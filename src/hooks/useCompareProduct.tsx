"use client"

import { toast } from '@/components/ui/use-toast'
import setting from '@/consts/settings'
import { useShopStore } from '@/providers/shop-store-provider'
import { Product } from '@/types/product'
import { useCallback } from 'react'


export default function useCompareProduct() {
  const { productsCompare, setProductsCompare } = useShopStore(state => state)

  const addProductToCompare = useCallback((product: Product) => {
    if (productsCompare.length === setting.MAX_COMPARE_PRODUCT) {
      toast({ title: `Bạn chỉ được so sánh tối đa ${setting.MAX_COMPARE_PRODUCT} sản phẩm` })
      return
    }
    setProductsCompare([...productsCompare, product])
    toast({ title: "Đã thêm vào so sánh" })
  }, [productsCompare, setProductsCompare])

  const removeProductToCompare = useCallback((id: Product["id"]) => {
    setProductsCompare([...productsCompare.filter(product => product.id !== id)])

  }, [productsCompare, setProductsCompare])


  const checkIsContainCompare = useCallback((id: number) => {
    return productsCompare.some(item => item.id === id)
  }, [productsCompare])


  return {
    productsCompare,
    addProductToCompare,
    checkIsContainCompare,
    removeProductToCompare
  }
}
