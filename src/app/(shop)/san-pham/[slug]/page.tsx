import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/productService'
import Product from './Product'
import { Metadata } from 'next'


export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  const product = await ProductsServiceApi.getDetail(slug)


 
  return {
    title: product.title,
    description : product.short_description,
    openGraph: {
      images: product.images,
    },
  }
}
 
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
