
"use client"
import { KEYS } from '@/consts/localStorage'
import SETTINGS from '@/consts/settings'
import ProductsServiceApi from '@/services/productService'
import { Product } from '@/types/product'
import LocalStorageService from '@/utils/localStorage'
import { useCallback, useEffect, useState } from 'react'

export default function useProductRecentView() {
  const [productsRecentView, setProductsRecentView] = useState<Product[]>([])
  const [idsProductsRecentView, setIdsProductsRecentView] = useState<Product["id"][]>(LocalStorageService.getItem<Product["id"][]>(KEYS.RECENT_VIEW, []))

  const addProductToRecentView = useCallback((product: Product) => {
    const list = [...idsProductsRecentView]
    const index = list.findIndex((item) => item === product.id);
    if (index >= 0) {
      list.splice(index, 1);
    }
    list.unshift(product.id);

    const len = list.length;
    if (len > SETTINGS.MAX_SAVE_PRODUCT_RECENT_VIEW) {
      list.pop();
    }
    LocalStorageService.setItem(KEYS.RECENT_VIEW, list)
    setIdsProductsRecentView(list)
  }, [idsProductsRecentView])

  useEffect(() => {
    if (idsProductsRecentView.length) {
      (async () => {
        const res = await ProductsServiceApi.getList({ ids: idsProductsRecentView })
        setProductsRecentView(res)
      })()
    }
  }, [idsProductsRecentView])


  return {
    productsRecentView,
    addProductToRecentView
  }
}