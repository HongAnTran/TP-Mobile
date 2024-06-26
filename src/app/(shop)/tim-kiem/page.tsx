import React from 'react'

import ProductsServiceApi from '@/services/productService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'


import { SortProduct } from '@/components/feature/SortProduct'
import FilterProduct from '@/components/feature/FilterProduct'


export default async function page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const keyword = searchParams.keyword

  const { products } = await ProductsServiceApi.getList({
    keyword: keyword ? keyword.toString() : undefined,
    take: 20
  })

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Sản phẩm",
            isActive: true
          }]} />

        <div className=' mt-16'>
          <TypographyH1 className=' text-center   lg:text-2xl'>Có 44 kết quả theo từ khóa {keyword}</TypographyH1>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  col-span-2'>
              <FilterProduct />
            </div>
            <div className=' col-span-10'>
              <div className=' flex justify-between'>

                <div className=' flex items-center mb-4'>
                  <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                  <SortProduct />

                </div>
                <TypographyH3 className='  '>Bài viết liên quan</TypographyH3>

              </div>
              <div className='  grid-cols-4  grid gap-4'>
                <div className='  col-span-3'>
                  <div className=' grid grid-cols-3 gap-4'>
                    {products.map((pro) => {
                      return <ProductCard key={pro.id} product={pro} />
                    })}
                  </div>
                </div>
                <div className='  col-span-1'>
                  {/* <ArticleCard article={{

                  }} /> */}
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
