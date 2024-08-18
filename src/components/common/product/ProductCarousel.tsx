import React from 'react'
import { TypographyH3, TypographyP } from '../../ui/typography'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel'
import ProductCard from '@/components/common/product/ProductCard'
import { Product, ProductInList } from '@/types/Product.types'
import { cn } from '@/lib/utils'


interface ProductCarouselProps {
  title?: string
  products: Product[] | ProductInList[]
  className?:string
}

export default  function ProductCarousel({ title, products , className }: ProductCarouselProps) {
  return (
    <section className=' flex flex-col gap-4  mx-8 lg:mx-0'>
      {title ? <div className=' '>
        <TypographyH3 className=' text-center uppercase text-primary'>{title}</TypographyH3>
      </div> : null}
      <div>
        {products.length ?    <Carousel
          opts={{
            align: "start",
            loop: true,

          }}
          className="w-full"
        >
          <CarouselContent className={cn(className)}>
            {products.map((product, index) => (
              //  className=" md:basis-1/3 lg:basis-1/5 "
              <CarouselItem key={index}>
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> : <TypographyP className=' text-center' >Chưa có sản phẩm nào</TypographyP> }
    
      </div>
    </section>
  )
}
