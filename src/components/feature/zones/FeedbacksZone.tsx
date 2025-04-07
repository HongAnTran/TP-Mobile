"use client"
import React from 'react'
import { TypographyH3 } from '../../ui/typography'
import { Card, CardContent } from '../../ui/card'
import Image from 'next/image'
import { Feedback } from '@/types/feedback'
import { FeedbackZone } from '@/types/Structure.type';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import AutoScroll from 'embla-carousel-auto-scroll'

export default function FeedbacksZone({ data }: Pick<FeedbackZone, "data">) {
  const { col, rows, type, button, tags, title, typeCard } = data
  return (
    <section className=' flex flex-col gap-4 bg-white p-4 py-6  rounded-xl shadow-md'>
      <TypographyH3 className=' flex gap-2 items-center justify-center text-center uppercase text-primary '>
        <Image  alt='thanks' src={"https://cdn.tpmobile.com.vn/image/upload/v1744016138/tpmobile-images-public/mbuapfqiiibdfpn0wu6p.webp"} width={50} height={50}/>
        {title}
        </TypographyH3>
      <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree:false,

          }}
          className="w-full"
              plugins={[
                AutoScroll({
                  startDelay: 0,
                  speed: 1,
                  stopOnFocusIn: false,
                  stopOnInteraction: false,
                }),
              ]}
        >
          <CarouselContent >
        {rows.map((feedback, index) => (
          <CarouselItem key={index} className={cn("basis-1/3 lg:basis-1/5 ")}>
          <FeedbackCard  feedback={feedback} >
          </FeedbackCard>
            </CarouselItem>
        ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
    </section>
  )
}


function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <Card className=' border-0 border-gray-300 group relative rounded-none'>
      <CardContent className="flex flex-col gap-2 aspect-square p-0">
        <div className=' relative w-full aspect-square'>
          <Image className=' rounded-md aspect-square object-cover' src={feedback.image.src} alt={feedback.image.alt || ""} width={feedback.image.widht} height={feedback.image.height} />
        </div>
          <Image className=' absolute  bottom-0 right-0'  alt='thanks' src={"https://cdn.tpmobile.com.vn/image/upload/v1744016138/tpmobile-images-public/mbuapfqiiibdfpn0wu6p.webp"} width={50} height={50}/>
      </CardContent>
    </Card>

  )

}