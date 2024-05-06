"use client"
import React from 'react'
import { HeartIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TypographyP } from '../ui/typography'
import { WishlistType } from '@/types/wishlist'

export default function ButtonWishlist({ id, type = WishlistType.PRODUCT }: { id: number, type?: WishlistType}) {

  
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} disableHoverableContent  >
        <TooltipTrigger >
          <HeartIcon className=' text-red-600 w-5 h-5' />
        </TooltipTrigger>
        <TooltipContent >
          <TypographyP>Yêu thích sản phẩm</TypographyP>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
