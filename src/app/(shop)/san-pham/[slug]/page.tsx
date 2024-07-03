import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/productService'
import Product from './Product'
import { Metadata } from 'next'
import routes from '@/routes'
import { Product as ProducType } from '@/types/product'
import { Product as ProductSchema, WithContext } from "schema-dts";

function generateStrucDataProduct(
  product: ProducType
): WithContext<ProductSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.featured_image,
    description: product.short_description || undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.price,
    },
  };
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  const product = await ProductsServiceApi.getDetail(slug)
  const titleShow = product.meta_title || product.title
  const desShow = product.meta_description || product.short_description || undefined
  const DOMAIN = process.env.DOMAIN
  return {
    title: titleShow,
    description: desShow,
    openGraph: {
      title: titleShow,
      description: desShow,
      images: product.images.map(img => ({ url: img, width: 800, height: 600 })),
      url: `${DOMAIN}/${routes.products}/${product.slug}`,
      siteName: DOMAIN,
    },
    category: product.category.title,
    other: {
      "og:type": "product",
      "og:price:amount": product.price,
      "og:price:currency": "VND",
    },
  }
}

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = await ProductsServiceApi.getDetail(slug)
  const jsonLdProduct = generateStrucDataProduct(product);

  if (!product) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <Product product={product} />
    </>
  )
}
