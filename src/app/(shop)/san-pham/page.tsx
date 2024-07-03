import React, { Suspense } from 'react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import { SortProduct } from '@/components/feature/SortProduct'
import FilterProduct from '@/components/feature/FilterProduct'
import ProductsSkeleton from '@/components/common/ProductsSkeleton'
import ProductCollectionList from '../danh-muc/_components/ProductCollectionList'
import routes from '@/routes'
import LayoutContainer from '@/layouts/LayoutContainer'


export default async function page({ searchParams }: { searchParams: { [key: string]: string } }) {


  const key = JSON.stringify(searchParams)
  const defaultFilter = {
    color: searchParams?.color?.split(",") || [],

    price: searchParams?.price?.split(",").map(Number) || [0, 100],
    capacity: searchParams?.capacity?.split(",") || [],
    ram: searchParams?.ram?.split(",") || [],
    categories: searchParams?.categories?.split(",") || []
  }
  return (
    <LayoutContainer>
      <>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Sản phẩm",
            isActive: true
          }]} />

        <div className=' mt-16'>
          <TypographyH1 className=' text-center'>Tất cả sản phẩm</TypographyH1>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  lg:col-span-2 col-span-12'>
              <FilterProduct defaultValue={defaultFilter} isUseCategory />
            </div>
            <div className=' lg:col-span-10 col-span-12'>
              <div className=' flex items-center mb-4'>
                <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                <SortProduct searchParams={searchParams} />

              </div>
              <Suspense key={key} fallback={<ProductsSkeleton />}>
                <ProductCollectionList searchParams={{
                  ...searchParams,

                }}
                  slug={routes.products}
                />
              </Suspense>
            </div>
          </div>

        </div>
      </>
    </LayoutContainer>
  )
}
