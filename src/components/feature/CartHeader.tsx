"use client"
import { useShopStore } from '@/providers/shop-store-provider'
import React from 'react'
import { CartIcon } from '../icons'
import { TypographySpan } from '../ui/typography'



export default function CartHeader() {
  const { cart, isLoadingCard } = useShopStore(state => state)
  return (
    <div className=' relative'>
      <CartIcon />
      {isLoadingCard ? null : <div className=' absolute -right-1 -top-1  w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shadow-md '>
        <TypographySpan className=' text-gray-800 font-bold text-xs'>{cart.item_count}</TypographySpan>
      </div>}
    </div>
  )
}
