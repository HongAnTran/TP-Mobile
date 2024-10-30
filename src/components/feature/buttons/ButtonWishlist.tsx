"use client"
import React  from 'react'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TypographyP } from '../../ui/typography'
import { WishlistType } from '@/types/wishlist'
import useWishlist from '@/hooks/useWishlist'

export default function ButtonWishlist({ id, type = WishlistType.PRODUCT }: { id: number, type?: WishlistType }) {
  const { toggleItemToWishlist, checkIsContainWishlist } = useWishlist()

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} disableHoverableContent  >
        <TooltipTrigger asChild>
          {checkIsContainWishlist(id, type) ?
            <HeartFilledIcon aria-hidden="true" className=' text-red-600 w-5 h-5  cursor-pointer' onClick={() => { toggleItemToWishlist(id, type) }} /> :
            <HeartIcon  aria-hidden="true" className=' text-red-600 w-5 h-5  cursor-pointer' onClick={() => { toggleItemToWishlist(id, type) }} />}

        </TooltipTrigger>
        <TooltipContent >
          <TypographyP className=' text-white'>Yêu thích sản phẩm</TypographyP>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
