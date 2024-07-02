import React from 'react'
import { TypographySpan } from '../ui/typography'
import { ProductVariant } from '@/types/product'
import { convetNumberToPriceVND } from '@/utils'
import { cn } from '@/lib/utils'

export default function PriceText({ price, className }: Pick<ProductVariant, "price"> & { className?: string }) {
  return (
    <TypographySpan className={cn("text-black font-semibold  text-base  md:text-sm", className)}>{convetNumberToPriceVND(price)}</TypographySpan>
  )
}
