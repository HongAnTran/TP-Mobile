import React from 'react'
import { TypographyH3 } from '../ui/typography'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import ProductCard from '@/components/common/product/ProductCard'
import ProductsServiceApi from '@/services/productService'
import { Product } from '@/types/product'
import ProductCarousel from '../common/ProductCarousel'


interface SectionCategoryCarouselProps {
  title: string
  productIds: Product["id"][]
  skip?: number
}

export default async function SectionCategoryCarousel({ title, productIds, skip = 0 }: SectionCategoryCarouselProps) {
  const products = await ProductsServiceApi.getList({ take: 8, skip: skip })

  if (!products.total) {
    return null
  }
  return (
    <ProductCarousel title={title} products={products.products} />
  )
}
