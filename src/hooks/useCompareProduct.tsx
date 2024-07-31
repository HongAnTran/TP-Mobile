"use client"

import { toast } from '@/components/ui/use-toast'
import SETTINGS from '@/consts/settings'
import { useShopStore } from '@/providers/shop-store-provider'
import { Product } from '@/types/Product.types'
import { useCallback, useState } from 'react'


export default function useCompareProduct() {
  const { productsCompare, setProductsCompare } = useShopStore(state => state)
  const [open, setOpen] = useState(true)

  const addProductToCompare = useCallback((product: Product) => {
    if (productsCompare.length === SETTINGS.MAX_COMPARE_PRODUCT) {
      toast({ title: `Bạn chỉ được so sánh tối đa ${SETTINGS.MAX_COMPARE_PRODUCT} sản phẩm` })
      return
    }
    setProductsCompare([...productsCompare, product])
    setOpen(true)

  }, [productsCompare, setProductsCompare])

  const removeProductToCompare = useCallback((id: Product["id"]) => {
    setProductsCompare([...productsCompare.filter(product => product.id !== id)])

  }, [productsCompare, setProductsCompare])


  const checkIsContainCompare = useCallback((id: number) => {
    return productsCompare.some(item => item.id === id)
  }, [productsCompare])

  const removeAll = useCallback(() => {
    setProductsCompare([])
  }, [setProductsCompare])

  return {
    setOpen,
    open,
    productsCompare,
    addProductToCompare,
    checkIsContainCompare,
    removeProductToCompare,
    removeAll
  }
}
