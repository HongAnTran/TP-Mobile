import React from 'react'
import { notFound } from 'next/navigation'

import ProductsServiceApi from '@/services/productService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CategoryServiceApi from '@/services/categoryService'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import routes from '@/routes'

import FilterProduct from '@/components/feature/FilterProduct'
import { SortProduct } from '@/components/feature/SortProduct'


export default async function page() {

  const products = await ProductsServiceApi.getList()

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Sản phẩm",
            isActive: true
          }]} />

        <div className=' mt-16'>
          <TypographyH2 className=' text-center'>Tất cả sản phẩm</TypographyH2>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  col-span-3'>
              <FilterProduct />
            </div>
            <div className=' col-span-9'>
              <div className=' flex items-center'>
                <TypographyP className=' font-semibold  text-base' >Sắp xếp theo:</TypographyP>
                <SortProduct />

              </div>
              <div className=' grid grid-cols-4 gap-4'>
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
