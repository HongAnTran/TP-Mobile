

import React from 'react'
import { TypographyH3, TypographyP } from '../../ui/typography'
import {  Card, CardContent, CardHeader } from '../../ui/card'
import Image from 'next/image'
import { BenefitsZone as BenefitsZoneType } from '@/types/Structure.type';
import { generateGridClasses } from '@/utils/helper';


export default function BenefitsZone({ data }: Pick<BenefitsZoneType, "data">) {
  const { col, rows, title } = data
  const gridClasses = generateGridClasses(col, "grid gap-4");

  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary '>{title}</TypographyH3>
      <div className={gridClasses}>
        {rows.map((feedback, index) => (
        <Card key={index} className=' border border-gray-300 group relative pb-3'>
            <CardHeader className=' py-3 px-4 flex flex-col items-center justify-center gap-1'>
            <Image className='  object-contain' src={feedback.icon.src} alt={feedback.icon.alt || ""} width={feedback.icon.width} height={feedback.icon.height} />
            <TypographyP className='text-xs md:text-sm uppercase text-muted-foreground font-semibold'>{feedback.title}</TypographyP>
            </CardHeader>
          <CardContent className="flex flex-col gap-2  py-0">
            <TypographyP className=' text-xs md:text-sm text-muted-foreground'>{feedback.description}</TypographyP>
          </CardContent>
        </Card>
        ))}
      </div>
    </section>
  )
}
