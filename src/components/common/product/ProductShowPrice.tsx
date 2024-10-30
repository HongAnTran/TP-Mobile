import { Product, ProductVariant } from '@/types/Product.types'
import React from 'react'
import PriceText from '../PriceText'
import { TypographySpan } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export default function ProductShowPrice({ variant , className }: { variant: ProductVariant , className?: string }) {
  return (
    <div className=' flex gap-2 items-center'>
      <PriceText className={cn('text-red-500 font-bold' , className)} price={variant.price} />

      {variant.compare_at_price > 0 && variant.compare_at_price > variant.price ? <>
        <TypographySpan >-</TypographySpan>
        <PriceText className=' line-through text-gray-600' price={variant.compare_at_price} />
      </> : null}
    </div>
  )
}
