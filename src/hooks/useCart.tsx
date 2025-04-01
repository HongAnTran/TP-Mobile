"use client"
import { useToast } from '@/components/ui/use-toast'
import { useShopStore } from '@/providers/shop-store-provider'
import routes from '@/routes'
import CartServiceClient from '@/services/cartServiceClient'
import { Product, ProductOrder, ProductVariant } from '@/types/Product.types'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import useProfile from './useProfile'
import { useQuery } from '@tanstack/react-query'
import CartServiceClientApi from '@/services/client/cartService'

export default function useCart() {
  const {data : customer , isSuccess} = useProfile()
  const { cart, setCart } = useShopStore(state => state)
console.log(cart)
  
  const {data : cartsCustomer , isLoading : isLoadingCard } = useQuery({
    queryKey: ["cart" , customer?.email],
    queryFn: async () => {
      const res = await CartServiceClientApi.getMyCart()
      if(res?.cart) {
        return res.cart
      }
      return await CartServiceClientApi.saveCart(null)
    },
    enabled: isSuccess && !!customer.email,
    staleTime : 1000 * 60 * 5,
  })

  const timmer = useRef<NodeJS.Timeout | null>(null)

  const { toast } = useToast()
  const router = useRouter()
  const cartClient = useMemo(() => {
    return new CartServiceClient(cart)
  }, [cart ])



  const handleAddtoCart = useCallback((product: Product, variant: ProductVariant, quantity: number) => {
    cartClient.add(product, variant, quantity)
    setCart(cartClient.cart)

  }, [cartClient, setCart, toast])

  const handleDeleteItem = useCallback((id: ProductOrder["id"]) => {
    cartClient.delete(id)
    setCart(cartClient.cart)
    toast({
      title: `Xóa khỏi giỏ hàng thành công`
    })
  }, [cartClient, setCart, toast])

  const handleChangeSelectItem = useCallback((product: ProductOrder, value: boolean) => {
    const productNew: ProductOrder = { ...product, selected: value }
    cartClient.update(productNew)
    setCart(cartClient.cart)
  }, [cartClient, setCart])

  const handleBuyNow = useCallback((product: Product, variant: ProductVariant, quantity: number) => {
    cartClient.add(product, variant, quantity)
    setCart(cartClient.cart)
    router.push(routes.cart)
  }, [cartClient, router, setCart])

  const handleChangeQuantity = useCallback((product: ProductOrder, quantity: number) => {
    const productNew: ProductOrder = { ...product, quantity: quantity, line_price: product.price * quantity }
    cartClient.update(productNew)
    setCart(cartClient.cart)
  }, [cartClient, setCart])

  const handleChangeSelectItems = useCallback((products: ProductOrder[], value: boolean) => {
    products.forEach(product => {
      const productNew: ProductOrder = { ...product, selected: value }
      cartClient.update(productNew)
    })
    setCart(cartClient.cart)
  }, [cartClient, setCart])

  const  saveCartToServer = useCallback(async () => {
    if(cart.customer_id && cart.items.length > 0){
      await CartServiceClientApi.saveCart(cart)
    }
  } , [JSON.stringify(cart)])

  useEffect(() => {
    cartsCustomer && setCart(cartsCustomer)
  }, [cartsCustomer, setCart])

  useEffect(() => {
    // save cart to server with customer id debounce 1s
    if(timmer.current) {
      clearTimeout(timmer.current)
    }
    timmer.current = setTimeout(() => {
      if(cart.customer_id && cart.items.length > 0){
        saveCartToServer()
      }
    }, 1000)
    return () => {
      if(timmer.current) {
        clearTimeout(timmer.current)
      }
    }
  },[saveCartToServer])
  return {
    cart,
    setCart,
    isLoadingCard,
    handleAddtoCart,
    handleBuyNow,
    handleChangeQuantity,
    handleDeleteItem,
    handleChangeSelectItem,
    handleChangeSelectItems
  }
}
