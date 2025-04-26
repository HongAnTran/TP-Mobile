import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CategoryServiceApi from '@/services/categoryService'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import routes from '@/routes'
import { SortProduct } from '@/components/feature/SortProduct'
import ProductCollectionList from '../_components/ProductCollectionList'
import ErrorRespone from '@/api/error'
import ProductsSkeleton from '@/components/common/product/ProductsSkeleton'
import FilterProduct from '@/components/feature/FilterProduct'
import { Metadata } from 'next'
import TitleWithIcon from '@/components/common/TitleWithIcon'


async function getCategoryDetail(slug: string) {
  try {
    const caregory = await CategoryServiceApi.getDetail(slug)
    return caregory
  } catch (error) {
    if (error instanceof ErrorRespone) {
      if (error.statusCode === 404) {
        notFound()
      }
    }
    throw error
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const slug = params.slug
  const category = await getCategoryDetail(slug)
  const { meta_data } = category
  const titleShow = meta_data?.meta_title ? meta_data?.meta_title : category.title
  const desShow = meta_data?.meta_description ? meta_data?.meta_description : category.description
  const keywords = meta_data?.meta_keywords ? meta_data?.meta_keywords : ""
  const image = meta_data?.meta_image ? meta_data?.meta_image : category.image
  const DOMAIN = process.env.DOMAIN
  return {
    title: titleShow,
    description: desShow,
    keywords: keywords,
    authors: [{ name: "TP Mobile", url: DOMAIN }],
    creator: "TP Mobile",
    generator: "TP Mobile",
    applicationName: "TP Mobile",
    publisher: "TP Mobile",

    alternates: {
      canonical: `${DOMAIN}${routes.category}/${category.slug}`
    },
    openGraph: {
      title: titleShow,
      description: desShow || "",
      images: { url: image, width: 800, height: 600 },
      url: `${DOMAIN}${routes.category}/${category.slug}`,
      siteName: DOMAIN,
    },
    twitter: {
      title: titleShow,
      description: desShow || "",
      images: { url: image, width: 800, height: 600 },
      card: "summary_large_image",
      creator: "TP Mobile",
    },
    other: {
      "og:type": "category",
      "og:description": desShow || "",
      "og:title": titleShow,
      "og:image": image,
      "og:url": `${DOMAIN}${routes.category}/${category.slug}`,
      "og:image:width": 800,
      "og:image:height": 600,
    },
  }
}

export default async function page({ params, searchParams }: { params: { slug: string }, searchParams: { [x: string]: string } }) {
  const slug = params.slug
  const caregory = await getCategoryDetail(slug)
  const key = JSON.stringify(searchParams)
  console.log(caregory)
  const keys = Object.keys(searchParams)
  const values = keys.reduce((pre: any, key) => {
    return pre[key] = searchParams[key] ? searchParams[key].split(",") : []
  }, {})

  const defaultFilter = {
    ...values,
    price: searchParams?.price?.split(",").map(Number) || [0, 100],
  }

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Danh mục",
            slug: routes.category
          },
          {
            label: caregory.title,
            isActive: true
          }]} />

        <div className=' mt-6'>
          <TitleWithIcon component="h1" title={caregory.title} />


        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8 relative'>
            <div className=' lg:col-span-2 col-span-12'>
              <FilterProduct defaultValue={defaultFilter} searchParams={searchParams} />
            </div>
            <div className=' lg:col-span-10 col-span-12'>
              <div className='items-center mb-4 flex'>
                <TypographyP className=' font-semibold  text-base' >Sắp xếp:</TypographyP>
                <SortProduct searchParams={searchParams} />
              </div>
              <Suspense key={key} fallback={<ProductsSkeleton />}>
                <ProductCollectionList searchParams={{
                  category_id: caregory.id,
                  ...searchParams,
                }}
                  slug={`${routes.category}/${slug}`} />
              </Suspense>
              {caregory.description && <div className=' mt-4 bg-white rounded-lg p-4' dangerouslySetInnerHTML={{ __html: caregory.description }}></div>}
            </div>
          </div>

        </div>


      </div>
    </div >
  )
}
