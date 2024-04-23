
import React from 'react'
import { TypographyH3 } from '../ui/typography'
import ProductCard from '@/components/common/product/ProductCard'

import Link from 'next/link'
import { Button } from '../ui/button'
import ProductsServiceApi from '@/services/productService/productService'

interface SectionCategoryGridProps {
  title: string
  productIds: number[]
}

export default async  function SectionCategoryGrid({ title, productIds }: SectionCategoryGridProps) {

  const products = await ProductsServiceApi.getList()

  if (!products.length) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {products.map((product, index) => (
            <ProductCard product={product} key={index}/>
        ))}
      </div>
      <div className=' flex justify-center mt-2'>
        <Link href={"/"}>
          <Button  className=' bg-primary text-white hover:scale-110 transition-all'>Xem tất cả</Button>
        </Link>
      </div>
    </section>
  )
}
