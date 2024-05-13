"use client"

import { useToast } from '@/components/ui/use-toast'
import { useShopStore } from '@/providers/shop-store-provider'
import CartServiceClient from '@/services/cartServiceClient'
import { Product, ProductVariant } from '@/types/product'
import { useCallback, useMemo } from 'react'

export default function useCart() {
  const { cart, setCart } = useShopStore(state => state)
  const { toast } = useToast()
  const cartClient = useMemo(() => {
    return new CartServiceClient(cart)
  }, [cart])


  const handleAddtoCart = useCallback((product: Product, variant: ProductVariant, quantity: number) => {
    cartClient.add(product, variant, quantity)
    setCart(cartClient.cart)
    toast({
      title: `Thêm ${product.title + "-" + variant.title} vào giỏ hàng thành công`
    })
  }, [cartClient, setCart, toast])

  const handleBuyNow = useCallback((product: Product, variant: ProductVariant, quantity: number) => {
    cartClient.add(product, variant, quantity)
    setCart(cartClient.cart)
  }, [cartClient, setCart])



  return {
    cartClient,
    handleAddtoCart,
    handleBuyNow
  }
}
