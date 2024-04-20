import React from 'react'
import { TypographyH3 } from '../ui/typography'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import productsJson from "@/data/product.json"
import { Product } from '@/types/product'
import ProductCard from '../common/ProductCard'
import Link from 'next/link'
import routes from '@/routes'

interface SectionCategoryProps {

  title: string
  productIds: number[]
}

export default function SectionCategory({ title, productIds }: SectionCategoryProps) {
  const products = JSON.parse(JSON.stringify(productsJson)) as Product[]

  return (
    <div className=' flex flex-col gap-3'>
      <TypographyH3>{title}</TypographyH3>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <Link href={`${routes.products}/${product.slug}`} prefetch={false}>
                  <ProductCard product={product} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
