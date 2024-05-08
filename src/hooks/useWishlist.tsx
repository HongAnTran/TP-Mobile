
"use client"

import { toast } from '@/components/ui/use-toast'
import { KEYS } from '@/consts/localStorage'
import { useShopStore } from '@/providers/shop-store-provider'
import { WishlistType } from '@/types/wishlist'
import LocalStorageService from '@/utils/localStorage'
import { useCallback } from 'react'

export default function useWishlist() {
  const { wishlist, setWishlist } = useShopStore(state => state)

  const toggleItemToWishlist = useCallback((id: number, type: WishlistType) => {
    let datas = [...wishlist]
    if (datas.find(pro => pro.item_id === id)) {
      datas = datas.filter(data => data.item_id !== id && data.type === type)
      toast({ title: "Đã bỏ yêu thích " })
    } else {
      datas.unshift({ customer_id: 0, id: new Date().getTime(), item_id: id, type })
      toast({ title: "Thêm  yêu thích thành công" })

    }
    setWishlist(datas)
    LocalStorageService.setItem(KEYS.RECENT_VIEW, datas)
  }, [setWishlist, wishlist])

  const checkIsContainWishlist = useCallback((id: number, type: WishlistType) => {
    return wishlist.some(item => item.item_id === id && type === item.type)
  }, [wishlist])



  return {
    wishlist,
    toggleItemToWishlist,
    checkIsContainWishlist
  }
}
