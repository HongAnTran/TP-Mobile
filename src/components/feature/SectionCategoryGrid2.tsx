import React from 'react'
import { TypographyH3, TypographyP } from '../ui/typography'
import Image from 'next/image'
import ProductsServiceApi from '@/services/productService'

interface SectionCategoryGridProps {
  title: string
  productIds: number[]
}

export default async function SectionCategoryGrid2({ title, productIds }: SectionCategoryGridProps) {
  const {datas : products} = await ProductsServiceApi.getList()

  if (!products) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
        {products.slice(2).map((product, index) => (
     
            <div key={index} className=' bg-primary p-4 rounded-md  hover:scale-110  transition-transform'>
              <Image src={product.images[0].url} alt={product.title} width={200} height={200} />
              <TypographyP className=' line-clamp-1 text-center text-white mt-2'>{product.title}</TypographyP>
            </div>
        
        ))}
      </div>

    </section>
  )
}
