
"use client"
import { KEYS } from '@/consts/localStorage'
import SETTINGS from '@/consts/config'
import ProductsServiceApi from '@/services/client/ProductsService'
import { Product, ProductInList } from '@/types/Product.types'
import LocalStorageService from '@/utils/localStorage'
import { useCallback, useEffect, useState } from 'react'

export default function useProductRecentView() {
  const [productsRecentView, setProductsRecentView] = useState<ProductInList[]>([])
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
  
        const { datas } = await ProductsServiceApi.getList({ ids: idsProductsRecentView.join(",") });
  
        const sortedProducts = idsProductsRecentView
          .map(id => {
            const product = datas.find(p => p.id === id);
            return product;
          })
          .filter(Boolean) as ProductInList[];
        setProductsRecentView(sortedProducts);
      })();
    }
  }, [idsProductsRecentView]);
  


  return {
    productsRecentView,
    addProductToRecentView
  }
}
