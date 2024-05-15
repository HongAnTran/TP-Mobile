import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/productService'
import Product from './Product'
export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = await ProductsServiceApi.getDetail(slug)

  if (!product) {
    notFound()
  }

  return (
    <Product product={product} />
  )
}
