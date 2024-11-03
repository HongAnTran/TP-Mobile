import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/ProductsService'
import Product from './Product'
import { Metadata } from 'next'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import { Product as ProductSchema, WithContext } from "schema-dts";
import Head from 'next/head'
import { SearchParams } from '@/types/common.type'

function generateStrucDataProduct(
  product: ProductType
): WithContext<ProductSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images?.[0]?.url,
    category: product.category.title,
    description: product.short_description || undefined,
    brand: {
      "@type": "Brand",
      name: product.brand?.name || "Apple",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: Math.floor(Math.random() * 400),
      bestRating: 5,
      worstRating: 1,
      name: product.title,
      // itemReviewed: {
      //   "@type": "Product",
      //   name: product.title,
      // },
      author: "TP Mobile Store"
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.DOMAIN}${routes.products}/${product.slug}`,
      priceCurrency: "VND",
      price: product.price,
      priceValidUntil: "2024-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "TP Mobile",
      },
    },
  };
}
async function getData(slug: string) {
  try {
    const product = await ProductsServiceApi.getDetail(slug)
    return product
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // read route params
  try {
    const slug = params.slug

    const product = await ProductsServiceApi.getDetail(slug)

    const { meta_data } = product
    const titleShow = meta_data?.meta_title || product.title
    const desShow = meta_data?.meta_description || product.short_description || undefined
    const keywords = meta_data?.meta_keywords || titleShow
    const DOMAIN = process.env.DOMAIN
    const URL = `${DOMAIN}${routes.products}/${product.slug}`
    return {
      title: titleShow,
      description: desShow,
      alternates: {
        canonical: URL
      },
      authors: { name: "TP Mobile Store", url: DOMAIN },
      openGraph: {
        title: titleShow,
        description: desShow,
        images: product.images.map(img => ({ url: img.url, width: 800, height: 600 })) || [],
        url: URL,
        siteName: DOMAIN,
        type: "website",
      },
      keywords: keywords,
      category: product.category.title,
      other: {
        "og:type": "product",
        "og:price:amount": product.price,
        "og:price:currency": "VND",
        "og:availability": "https://schema.org/InStock",
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function page({ params, searchParams }: { params: { slug: string }, searchParams: SearchParams }) {
  const slug = params.slug
  const product = await getData(slug)
  const jsonLdProduct = generateStrucDataProduct(product);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
      </Head>
      <Product product={product} searchParams={searchParams} />
    </>
  )
}
