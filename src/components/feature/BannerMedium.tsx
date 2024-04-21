"use client"
import React from 'react'
import banner from "../../../public/event.jpg"
import banner2 from "../../../public/event-2.jpg"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
export default function BannerMedium() {
const banners = [banner,banner2]
  return (
    <Carousel className="w-full "
    opts={{
      align: "start",
      loop: true,

    }}
    plugins={[
      Autoplay({
        delay: 2000,
        

      }),
    ]}
    >
      <CarouselContent>
        {banners.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              <Image src={src} alt='banner event' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>

  )
}
