import React from 'react'
import { Product } from '@/types/Product.types'
import { TypographyH2 } from '@/components/ui/typography'
import ProductSpecifications from './ProductSpecifications'
import ProductDescriptionDetai from './ProductDescriptionDetai'
export default async function ProductDescription({ product }: { product: Product }) {
  return (
    <div className=' grid grid-cols-12 lg:gap-8'>
      <div className='col-span-12 md:col-span-8 mb-5 lg:mb-0'>
        <div className=' p-2 rounded-md shadow-md border'>
          <TypographyH2 className='  text-center text-xl pb-2 border-b border-gray-300 mb-2'>Mô tả sản phẩm</TypographyH2>
          <ProductDescriptionDetai detalHTML={product.description_html} />
        </div>
      </div>
      <div className=' col-span-12 md:col-span-4'>
        <div className=' p-2 rounded-md shadow-md border h-full'>
          <TypographyH2 className='  text-xl  pb-2 border-b border-gray-300 mb-2 text-center'>Thông số kỹ thuật</TypographyH2>
          <ProductSpecifications  productId={product.id}/>
        </div>
      </div>
    </div>
  )
}
