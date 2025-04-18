
"use client"
import { useEffect, useState } from 'react'
import useWishlist from './useWishlist'
import { WishlistType } from '@/types/wishlist'
import ProductsServiceApi from '@/services/client/ProductsService'
import { Products } from '@/types/Product.types'

export default function useWishlistData() {
  const { wishlist } = useWishlist()
  const [data, setData] = useState<Products>()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (!wishlist.length) {
      setData({ datas: [], total: 0 })
      return
    }
    setIsLoading(true);
    (async () => {
      try {
        const idsProduct: number[] = []
        const idsArticle = []
        wishlist.forEach(item => {
          if (item.type === WishlistType.PRODUCT) {
            idsProduct.push(item.item_id)
            return
          }
          if (item.type === WishlistType.ARTICE) {
            idsArticle.push(item.item_id)
          }
        })
        const data = await ProductsServiceApi.getList({ ids: idsProduct.join(",") })
        setData(data)

      } catch (error) {

      } finally {
        setIsLoading(false);

      }
    })()

  }, [wishlist])

  return {
    isLoading,
    data
  }
}
