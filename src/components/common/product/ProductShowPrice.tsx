import { Product, ProductVariant } from '@/types/product'
import React from 'react'
import ProductPrice from './ProductPrice'
import { TypographySpan } from '@/components/ui/typography'

export default function ProductShowPrice({ variant }: { variant: ProductVariant }) {
  return (
    <div className=' flex gap-2 items-center'>
      <ProductPrice className='text-red-500 font-bold' price={variant.price} />

      {variant.compare_at_price ? <>
        <TypographySpan >-</TypographySpan>
        <ProductPrice className=' line-through text-gray-600' price={variant.compare_at_price} />
      </> : null}
    </div>
  )
}
