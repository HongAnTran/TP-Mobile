import React from 'react'
import { TypographyH3 } from '../ui/typography'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import productsJson from "@/data/product.json"
import { Product } from '@/types/product'
import ProductCard from '../common/ProductCard'


interface SectionCategoryCarouselProps {

  title: string
  productIds: number[]
}

export default function SectionCategoryCarousel({ title, productIds }: SectionCategoryCarouselProps) {
  const products = JSON.parse(JSON.stringify(productsJson)) as Product[]

  if (!products.length) {
    return null
  }
  return (
    <section className=' flex flex-col gap-4'>
      <div className=' flex flex-col items-center justify-center'>
        <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,

          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
