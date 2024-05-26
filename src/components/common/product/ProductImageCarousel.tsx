'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ProductImage } from '@/types/product'
import Image from 'next/image'
import React from 'react'
import { type CarouselApi } from "@/components/ui/carousel"
import { cn } from '@/lib/utils'

export default function ProductImageCarousel({ images, alt, imageActive, setImageActive }:
  { images: ProductImage[], alt: string, imageActive: number, setImageActive: (index: number) => void }) {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }
    api.on("select", (api) => {
      setImageActive(api.selectedScrollSnap())
    })
  }, [api, setImageActive])
  React.useEffect(() => {
    if (api) {
      api?.scrollTo(imageActive)
    }

  }, [api, imageActive])

  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Image src={img.src} alt={alt} className='  object-contain w-[500px] h-[500px]' width={500} height={500} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=' -left-2' />
        <CarouselNext className='  right-2' />
      </Carousel>
      <div className=' flex gap-2 flex-wrap overflow-auto mt-2'>
        {images.map((img, index) => (

          <div key={index} className={cn('  transition-all  w-[60px] h-[60px] p-1 rounded-sm cursor-pointer', {
            " border border-red-500 ": index === imageActive
          })}

            onClick={() => {
              setImageActive(index)
            }}
          >
            <Image className='  w-full h-full' src={img.src} alt={alt} width={500} height={500} />
          </div>

        ))}
      </div>
    </div>
  )
}
