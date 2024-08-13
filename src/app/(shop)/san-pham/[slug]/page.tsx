import React from 'react'
import { notFound } from 'next/navigation'
import ProductsServiceApi from '@/services/productService'
import Product from './Product'
import { Metadata } from 'next'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import { Product as ProductSchema, WithContext } from "schema-dts";

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
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.price,
      priceValidUntil: "2024-12-31", // Set a default date or use a specific one from the product
      availability: "https://schema.org/InStock", // Updated to include full URL
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5, // Example default value
        reviewCount: Math.floor(Math.random() * 400),

      },
      seller: {
        "@type": "Organization",
        name: "TP Mobile",
      },
    },
  };
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  const product = await ProductsServiceApi.getDetail(slug)

  const { meta_data } = product
  const titleShow = meta_data?.meta_title || product.title
  const desShow = meta_data?.meta_description || product.short_description || undefined
  const DOMAIN = process.env.DOMAIN
  return {
    title: titleShow,
    description: desShow,


    openGraph: {
      title: titleShow,
      description: desShow,
      images: product.images.map(img => ({ url: img.url, width: 800, height: 600 })) || [],
      url: `${DOMAIN}/${routes.products}/${product.slug}`,
      siteName: DOMAIN,
      type: "website",
    },
    keywords : titleShow,
    category: product.category.title,
    other: {
      "og:type": "product",
      "og:price:amount": product.price,
      "og:price:currency": "VND",
      "og:availability": "https://schema.org/InStock",
    },

    
  }
}

async function getData(slug: string) {
  try {
    const product = await ProductsServiceApi.getDetail(slug)
    return product
  } catch (error) {
    notFound()
  }
}

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = await getData(slug)
  const jsonLdProduct = generateStrucDataProduct(product);

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
