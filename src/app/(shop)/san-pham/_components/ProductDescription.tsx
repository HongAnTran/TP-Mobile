import React from 'react'
import { Product } from '@/types/Product.types'
import { TypographyH2, TypographyH4 } from '@/components/ui/typography'
import ProductSpecifications from './ProductSpecifications'
import ProductDescriptionDetai from './ProductDescriptionDetai'
export default async function ProductDescription({ product }: { product: Product }) {
  return (
    <div className=' grid grid-cols-12 lg:gap-8'>
      <div className='col-span-12 md:col-span-8 mb-5 lg:mb-0'>
        <div className=' p-4   rounded-lg shadow-xl border '>
          <ProductDescriptionDetai detalHTML={product.description_html} />
        </div>
      </div>
      <div className=' col-span-12 md:col-span-4'>
        <div className='  p-4   rounded-lg shadow-xl border h-full'>
          <TypographyH4 className='  text-center  pb-2 font-semibold  mb-2'>Thông số kỹ thuật</TypographyH4>
          <ProductSpecifications  productId={product.id}/>
        </div>
      </div>
    </div>
  )
}
