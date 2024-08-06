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
  // read route params
  const slug = params.slug

  const category = await getCategoryDetail(slug)
  const titleShow = category.title
  const desShow = category.description || undefined
  const DOMAIN = process.env.DOMAIN
  return {
    title: titleShow,
    description: desShow,
    openGraph: {
      title: titleShow,
      description: desShow,
      images: { url: category.image, width: 800, height: 600 },
      url: `${DOMAIN}/${routes.category}/${category.slug}`,
      siteName: DOMAIN,
    },
    other: {
      "og:type": "category",
    },
  }
}

export default async function page({ params, searchParams }: { params: { slug: string }, searchParams: { [x: string]: string } }) {
  const slug = params.slug
  const caregory = await getCategoryDetail(slug)
  const key = JSON.stringify(searchParams)

  const keys = Object.keys(searchParams)
  const values = keys.reduce((pre : any,key)=>{
    return pre[key] = searchParams[key] ?  searchParams[key].split(",")  : []
  },{})

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

        <div className=' mt-16'>
          <TypographyH2 className=' text-center'>{caregory.title}</TypographyH2>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className=' lg:col-span-2 col-span-12'>
              <FilterProduct defaultValue={defaultFilter} searchParams={searchParams} />
            </div>
            <div className=' lg:col-span-10 col-span-12'>
              <div className='items-center mb-4 flex'>
                <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                <SortProduct searchParams={searchParams} />
              </div>
              <Suspense key={key} fallback={<ProductsSkeleton />}>
                <ProductCollectionList searchParams={{
                  category_id: caregory.id,
                  ...searchParams,
                }}
                  slug={`${routes.category}/${slug}`} />
              </Suspense>

            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
