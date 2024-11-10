import React from 'react'

import ProductsServiceApi from '@/services/ProductsService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import { SortProduct } from '@/components/feature/SortProduct'
import FilterProduct from '@/components/feature/FilterProduct'
import PaginationServer from '@/components/common/paginations/PaginationServer'
import routes from '@/routes'
import SETTINGS from '@/consts/config'
import { ValueFiter } from '@/types/Common.type'


export default async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const page = Number(searchParams.page) ? Number(searchParams.page) : 1
  const LIMIT = SETTINGS.LIMIT_SHOW_PRODUCT_LIST

  const keyword = searchParams.keyword
  const keys = Object.keys(searchParams)
  const values = keys.reduce((pre: any, key) => {
    return pre[key] = searchParams[key] ? searchParams[key].split(",") : []
  }, {})
  const defaultFilter: ValueFiter = {
    ...values,
    categories: searchParams?.categories?.split(",") || [],
    price: searchParams?.price?.split(",").map(Number) || [0, 100],
    keyword: keyword,
    page,
  }
  const { datas: products, total } = await ProductsServiceApi.getList({
    keyword: keyword ? keyword.toString() : undefined,
    limit: LIMIT,
    ...searchParams
  })
  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Tìm kiếm",
          },
          {
            label: keyword,
            isActive: true
          }
        ]} />

        <div className=' mt-6 lg:mt-16'>
          <TypographyH1 className=' text-center  text-base   lg:text-2xl'>Có {total} kết quả theo từ khóa {keyword}</TypographyH1>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className=' col-span-12 lg:col-span-2'>
              <FilterProduct defaultValue={defaultFilter} isUseCategory searchParams={searchParams} />
            </div>
            <div className=' col-span-12 lg:col-span-10'>
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
              <div className=' mt-10 flex justify-center'>
                 <PaginationServer query={searchParams} page={page} total={total} pageSize={LIMIT} urlSrc={routes.search} />
                 </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
