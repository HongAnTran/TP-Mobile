import React from 'react'
import ProductsServiceApi from '@/services/productService'
import { Product } from '@/types/Product.types'
import ProductCarousel from '../common/ProductCarousel'


interface SectionCategoryCarouselProps {
  title: string
  productIds: Product["id"][]
}

export default async function SectionCategoryCarousel({ title, productIds }: SectionCategoryCarouselProps) {
  const {datas : products , total} = await ProductsServiceApi.getList({ limit: 8, ids : productIds.join(",")})

  if (!products) {
    return null
  }
  return (
    <ProductCarousel title={title} products={products} />
  )
}
