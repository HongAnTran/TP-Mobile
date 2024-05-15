import PriceText from '@/components/common/PriceText'
import { TypographySpan } from '@/components/ui/typography'
import { ProductOrder } from '@/types/product'
import Image from 'next/image'
import React from 'react'

export default function CheckoutItem({ productOrder }: { productOrder: ProductOrder }) {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row sm:items-center">
      <Image width={112} height={96} className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={productOrder.image} alt="" />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{productOrder.title}</span>
        <span className="float-right text-gray-400">{productOrder.variant_title}</span>
        <div>
          <TypographySpan  className="font-bold">{productOrder.quantity} X </TypographySpan>
          <PriceText  price={productOrder.price} className=" text-sm"/>
        </div>
      </div>
      <div>
      <PriceText  price={productOrder.line_price} className=" text-sm font-bold text-red-500"/>
      </div>
    </div>
  )
}
