import React from 'react'
import { TypographySpan } from '../ui/typography'
import { ProductVariant } from '@/types/Product.types'
import { convetNumberToPriceVND } from '@/utils'
import { cn } from '@/lib/utils'

export default function PriceText({ price, className , notAutoChange }: Pick<ProductVariant, "price"> & { className?: string , notAutoChange?: boolean }) {
  if(price === 0 && !notAutoChange) {
    return (
      <TypographySpan className={cn("text-black  font-medium text-base  md:text-sm", className)}>Liên hệ</TypographySpan>
    )
  }
  return (
    <TypographySpan className={cn("text-black  font-medium text-base  md:text-sm", className)}>{convetNumberToPriceVND(price)}</TypographySpan>
  )
}
