"use client"
import React, { useEffect } from 'react'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TypographyP } from '../../ui/typography'
import { WishlistType } from '@/types/wishlist'
import { useShopStore } from '@/providers/shop-store-provider'
import LocalStorageService from '@/utils/localStorage'
import { KEYS } from '@/consts/localStorage'
import useWishlist from '@/hooks/useWishlist'
import useProduct from '@/hooks/useProduct'

export default function ButtonWishlist({ id, type = WishlistType.PRODUCT }: { id: number, type?: WishlistType }) {
  const { toggleItemToWishlist, checkIsContainWishlist } = useWishlist()
  // const { data } = useProduct()

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} disableHoverableContent  >
        <TooltipTrigger asChild>
          {checkIsContainWishlist(id, type) ?
            <HeartFilledIcon aria-hidden="true" className=' text-red-600 w-5 h-5' onClick={() => { toggleItemToWishlist(id, type) }} /> :
            <HeartIcon  aria-hidden="true" className=' text-red-600 w-5 h-5' onClick={() => { toggleItemToWishlist(id, type) }} />}

        </TooltipTrigger>
        <TooltipContent >
          <TypographyP>Yêu thích sản phẩm</TypographyP>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
