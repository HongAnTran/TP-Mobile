
import React from 'react'
import { TypographyH3 } from '../ui/typography'
import ProductCard from '@/components/common/product/ProductCard'

import Link from "@/components/common/Link";

import { Button } from '../ui/button'
import ProductsServiceApi from '@/services/productService'

interface SectionCategoryGridProps {
  title: string
  productIds: number[]
  categoryId?: number
  link? : string
  take? : number
}

export default async  function SectionCategoryGrid({ title, productIds , categoryId  , link , take = 8}: SectionCategoryGridProps) {

  const {datas : products} = await ProductsServiceApi.getList({category_id : categoryId ,limit : take})

  if (!products) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {products.map((product, index) => (
            <ProductCard product={product} key={index}/>
        ))}
      </div>
      <div className=' flex justify-center mt-2'>
        <Link href={link || "#"}>
          <Button  className=' bg-primary text-white hover:scale-110 transition-all'>Xem tất cả</Button>
        </Link>
      </div>
    </section>
  )
}
