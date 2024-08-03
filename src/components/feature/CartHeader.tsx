"use client"
import { useShopStore } from '@/providers/shop-store-provider'
import React from 'react'
import { CartIcon } from '../icons'
import { TypographySpan } from '../ui/typography'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ProductOrderItem from '@/components/common/product/ProductOrderItem'
import PriceText from '../common/PriceText'
import { Button } from '../ui/button'
import Link from '../common/Link'
import routes from '@/routes'
import IconBorder from '../common/IconBorder'




export default function CartHeader() {
  const { cart, isLoadingCard } = useShopStore(state => state)
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild className=' hover:cursor-pointer'>
          <div className=' relative'>
            <IconBorder >

              <CartIcon className=' w-7 h-7' />
            </IconBorder>
            {isLoadingCard ? null : <div className=' absolute -right-1 -top-1  w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shadow-md '>
              <TypographySpan className=' text-gray-800 font-bold text-xs'>{cart.item_count}</TypographySpan>
            </div>}
          </div>

        </HoverCardTrigger>
        <HoverCardContent className=" w-96" side="bottom" align="center">

          {cart.item_count ?
            <ul className=' flex flex-col gap-2 max-h-[300px] px-2  overflow-auto '>
              {cart.items.map(item => {
                return <ProductOrderItem productOrder={item} key={item.id} className=' border-b border-gray-200' />
              })}
            </ul> : <p className="text-sm text-center">
              Chưa có sản phẩm nào trong giỏ hàng
            </p>}

          <div className=' p-2 '>
            <div className=' flex  justify-between items-center'>
              <TypographySpan>Tạm tính</TypographySpan>
              <PriceText price={cart.total_price} />
            </div>
            <Link href={routes.cart}>
              <Button className=' w-full mt-4  capitalize'>Xem giỏ hàng</Button>
            </Link>


          </div>

        </HoverCardContent>
      </HoverCard>
    </>

  )
}
