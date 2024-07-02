import React from 'react'

import ProductsServiceApi from '@/services/productService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'


import { SortProduct } from '@/components/feature/SortProduct'
import FilterProduct from '@/components/feature/FilterProduct'


export default async function page({ searchParams }: { searchParams: { [key: string]: string } }) {

  const keyword = searchParams.keyword
  const defaultFilter = {
    color: searchParams?.color?.split(",") || [],
    price: searchParams?.price?.split(",").map(Number) || [0, 100],
    capacity: searchParams?.capacity?.split(",") || [],
    ram: searchParams?.ram?.split(",") || [],
    categories: searchParams?.categories?.split(",") || [],
    keyword: keyword
  }
  const { products, total } = await ProductsServiceApi.getList({
    keyword: keyword ? keyword.toString() : undefined,
    take: 20
  })

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Tìm kiếm",
            // isActive: true
          },
          {
            label: keyword,
            isActive: true
          }
          ]} />

        <div className=' mt-16'>
          <TypographyH1 className=' text-center   lg:text-2xl'>Có {total} kết quả theo từ khóa {keyword}</TypographyH1>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  col-span-2'>
              <FilterProduct defaultValue={defaultFilter} isUseCategory searchParams={searchParams} />
            </div>
            <div className=' col-span-10'>
              <div className=' flex justify-between'>

                <div className=' flex items-center mb-4'>
                  <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                  <SortProduct searchParams={searchParams} />

                </div>

              </div>
              <div className=' grid lg:grid-cols-4 grid-cols-2  gap-4'>
                {products.map((pro) => {
                  return <ProductCard key={pro.id} product={pro} />
                })}
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
