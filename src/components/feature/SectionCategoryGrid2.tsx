import React from 'react'
import { TypographyH3, TypographyP } from '../ui/typography'
import productsJson from "@/data/product.json"
import { Product } from '@/types/product'
import ProductCard from '../common/ProductCard'
import Link from 'next/link'
import routes from '@/routes'
import { Button } from '../ui/button'
import Image from 'next/image'

interface SectionCategoryGridProps {
  title: string
  productIds: number[]
}

export default function SectionCategoryGrid2({ title, productIds }: SectionCategoryGridProps) {
  const products = JSON.parse(JSON.stringify(productsJson)) as Product[]
  if (!products.length) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
        {products.slice(2).map((product, index) => (
     
            <div key={index} className=' bg-primary p-4 rounded-md  hover:scale-110  transition-transform'>
              <Image src={product.image.src} alt={product.title} width={200} height={200} />
              <TypographyP className=' line-clamp-1 text-center text-white mt-2'>{product.title}</TypographyP>
            </div>
        
        ))}
      </div>

    </section>
  )
}
