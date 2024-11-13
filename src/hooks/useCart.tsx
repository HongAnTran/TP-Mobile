"use client"
import { useToast } from '@/components/ui/use-toast'
import { useShopStore } from '@/providers/shop-store-provider'
import routes from '@/routes'
import CartServiceClient from '@/services/cartServiceClient'
import { Product, ProductOrder, ProductVariant } from '@/types/Product.types'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

export default function useCart() {
  const { cart, setCart, isLoadingCard } = useShopStore(state => state)
  const { toast } = useToast()
  const router = useRouter()
  const cartClient = useMemo(() => {
    return new CartServiceClient(cart)
  }, [cart])


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

  return {
    cart,
    isLoadingCard,
    handleAddtoCart,
    handleBuyNow,
    handleChangeQuantity,
    handleDeleteItem,
    handleChangeSelectItem,
    handleChangeSelectItems
  }
}
