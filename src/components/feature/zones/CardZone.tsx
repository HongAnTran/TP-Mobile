

import React from 'react'
import { TypographyH3, TypographyP } from '../../ui/typography'
import { Card, CardContent, CardHeader } from '../../ui/card'
import Image from 'next/image'
import { CardsZone } from '@/types/Structure.type';
import { generateGridClasses } from '@/utils/helper';
import Link from '@/components/common/Link';


export default function CardZone({ data }: Pick<CardsZone, "data">) {
  const { col, rows, title } = data
  const gridClasses = generateGridClasses(col, "grid gap-4");
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary '>{title}</TypographyH3>
      <div className={gridClasses}>
        {rows.map((data, index) => {
          if (!data.link) {
            return (
              <Card key={index} className=' border border-gray-300 group relative pb-3'>
                <CardHeader className=' py-3 px-4 flex flex-col items-center justify-center gap-1'>
                  <Image className='  object-contain' src={data.image.src} alt={data.image.alt || ""} width={data.image.width} height={data.image.height} />
                  <TypographyP className='text-xs md:text-sm uppercase text-muted-foreground font-semibold'>{data.title}</TypographyP>
                </CardHeader>
                <CardContent className="flex flex-col gap-2  py-0">
                  <TypographyP className=' text-xs md:text-sm text-muted-foreground'>{data.description}</TypographyP>
                </CardContent>
              </Card>
            )
          }
          return (<Link key={index} href={data.link || "#"} target="_blank">
            <Card className=' border border-gray-300 group relative pb-3'>
              <CardHeader className=' py-3 pt-0 px-0 flex flex-col items-center justify-center gap-1'>
                <Image className='  object-contain' src={data.image.src} alt={data.image.alt || ""} width={data.image.width} height={data.image.height} />

              </CardHeader>
              <CardContent className="flex flex-col gap-2 px-2  py-0">
                <TypographyP className='text-xs md:text-sm  text-muted-foreground font-semibold'>{data.title}</TypographyP>
                <TypographyP className=' text-xs md:text-sm text-muted-foreground'>{data.description}</TypographyP>
              </CardContent>
            </Card>
          </Link>)
        })}
      </div>
    </section>
  )
}
