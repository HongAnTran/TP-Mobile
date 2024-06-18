import React from 'react'
import { TypographyH3, TypographyP } from '../ui/typography'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import ProductCard from '@/components/common/product/ProductCard'
import { Product, ProductInList } from '@/types/product'


interface ProductCarouselProps {
  title?: string
  products: Product[] | ProductInList[]
}

export default  function ProductCarousel({ title, products }: ProductCarouselProps) {
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
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4 ">
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
