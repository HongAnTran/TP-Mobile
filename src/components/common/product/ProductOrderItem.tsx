import PriceText from '@/components/common/PriceText'
import { TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ProductOrder } from '@/types/Product.types'
import Image from 'next/image'
import React from 'react'

export default function ProductOrderItem({ productOrder, className }: { productOrder: ProductOrder, className?: string }) {
  return (
    <div className={cn("flex items-center  rounded-lg bg-white ", className)}>
      <Image width={80} height={80} className="m-2 h-20  w-20 rounded-md border object-cover object-center"
        src={productOrder.image} alt="" />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold line-clamp-2">{productOrder.title}</span>
        <span className="float-right text-gray-400 line-clamp-1">{productOrder.variant_title}</span>
        <div>
          <TypographySpan className="font-bold">{productOrder.quantity} X </TypographySpan>
          <PriceText price={productOrder.price} className=" text-sm" />
        </div>
      </div>
      <div>
        <PriceText price={productOrder.line_price} className=" text-sm font-bold text-red-500" />
      </div>
    </div>
  )
}
