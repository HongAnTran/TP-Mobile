import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CategoryServiceApi from '@/services/categoryService'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import routes from '@/routes'
import FilterProduct from "../_components/FilterProduct"
import { SortProduct } from '@/components/feature/SortProduct'
import ProductCollectionList from '../_components/ProductCollectionList'
import ErrorRespone from '@/api/error'


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

export default async function page({ params, searchParams }: { params: { slug: string }, searchParams: { [x: string]: string } }) {
  const slug = params.slug
  const caregory = await getCategoryDetail(slug)
  const key = JSON.stringify(searchParams)
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
              <FilterProduct />
            </div>
            <div className=' lg:col-span-10 col-span-12'>
              <div className='items-center mb-4 hidden md:flex'>
                <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                <SortProduct />
              </div>
              <Suspense key={key} fallback={<p>Loading...</p>}>
                <ProductCollectionList searchParams={{
                  category_id: caregory.id,
                  ...searchParams
                }} />
              </Suspense>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
