import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/ProductsService'
import Product from './Product'
import { Metadata } from 'next'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import { Product as ProductSchema, WithContext } from "schema-dts";
import { SearchParams } from '@/types/Common.type'
import CONFIG from '@/consts/config'

function generateStrucDataProduct(
  product: ProductType
): WithContext<ProductSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images.map(img => img.url),
    category: product.category.title,
    description: product.short_description || undefined,
    brand: product.brand ? {
      "@type": "Brand",
      name: product.brand.name,
    } : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.average_rating,
      reviewCount: product.rating_count,
      bestRating: 5,
      worstRating: 1,
      name: product.title,
      author: "TP Mobile Store"
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.DOMAIN}${routes.products}/${product.slug}`,
      priceCurrency: "VND",
      price: String(product.price),
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
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
  try {
    const slug = params.slug

    const product = await ProductsServiceApi.getDetail(slug)

    const { meta_data } = product
    const titleShow = meta_data?.meta_title || product.title
    const desShow = meta_data?.meta_description || product.short_description || undefined
    const keywords = meta_data?.meta_keywords || titleShow
    const DOMAIN = CONFIG.DOMAIN
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
        images: product.images.map(img => ({ url: img.url, width: 500, height: 500 })) || [],
        url: URL,
        siteName: DOMAIN,
        type: "website",
      },
      twitter: {
        title: titleShow,
        description: desShow,
        images: product.images.map(img => ({ url: img.url, width: 500, height: 500 })) || [],
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
    <div className=' bg-white'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <Product product={product} searchParams={searchParams} />
    </div>
  )
}
