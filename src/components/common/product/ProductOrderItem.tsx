import PriceText from '@/components/common/PriceText'
import { TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ProductOrder } from '@/types/Product.types'
import Image from 'next/image'
import React from 'react'

export default function ProductOrderItem({ productOrder, className }: { productOrder: ProductOrder, className?: string }) {
  const { product, variant } = productOrder
  const srcImage = variant.image?.url ? variant.image?.url : product.images[0].url
  return (
    <div className={cn("   flex items-center  rounded-lg bg-white ", className)}>
      <Image width={80} height={80} className="m-2 h-10 w-10 md:h-20  md:w-20 rounded-md border object-cover object-center"
        src={srcImage} alt={product.title} />
      <div className="flex w-full flex-col px-1 md:px-4 py-4">
        <span className="font-semibold line-clamp-2">{product.title}</span>
        <span className="float-right text-gray-400 line-clamp-1">{variant.title}</span>
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
