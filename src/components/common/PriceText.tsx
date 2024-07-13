import React from 'react'
import { TypographySpan } from '../ui/typography'
import { ProductVariant } from '@/types/product'
import { convetNumberToPriceVND } from '@/utils'
import { cn } from '@/lib/utils'

export default function PriceText({ price, className }: Pick<ProductVariant, "price"> & { className?: string }) {
  if(price === 0) {

    return (
      <TypographySpan className={cn("text-black  font-medium text-base  md:text-sm", className)}>Liên hệ</TypographySpan>
    )
  }
  return (
    <TypographySpan className={cn("text-black  font-medium text-base  md:text-sm", className)}>{convetNumberToPriceVND(price)}</TypographySpan>
  )
}
