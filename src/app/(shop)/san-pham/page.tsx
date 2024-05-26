import React from 'react'
import ProductsServiceApi from '@/services/productService'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import ProductCard from '@/components/common/product/ProductCard'
import { SortProduct } from '@/components/feature/SortProduct'
import FilterProduct from '@/components/feature/FilterProduct'


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
          <TypographyH1 className=' text-center'>Tất cả sản phẩm</TypographyH1>
        </div>
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-8'>
            <div className='  lg:col-span-2 col-span-12'>
              <FilterProduct />
            </div>
            <div className=' lg:col-span-10 col-span-12'>
              <div className=' flex items-center mb-4'>
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
