import { Product, ProductVariant } from '@/types/product'
import React from 'react'
import PriceText from '../PriceText'
import { TypographySpan } from '@/components/ui/typography'

export default function ProductShowPrice({ variant }: { variant: ProductVariant }) {
  return (
    <div className=' flex gap-2 items-center'>
      <PriceText className='text-red-500 font-bold' price={variant.price} />

      {variant.compare_at_price > 0 && variant.compare_at_price > variant.price ? <>
        <TypographySpan >-</TypographySpan>
        <PriceText className=' line-through text-gray-600' price={variant.compare_at_price} />
      </> : null}
    </div>
  )
}
