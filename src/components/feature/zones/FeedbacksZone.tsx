

import React from 'react'
import { TypographyH3, TypographyP } from '../../ui/typography'
import Link from "@/components/common/Link";

import { Button } from '../../ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from '../../ui/card'
import Image from 'next/image'
import { Feedback } from '@/types/feedback'
import routes from '@/routes';
import { FeedbackZone } from '@/types/Structure.type';
import { generateGridClasses } from '@/utils/helper';


export default function FeedbacksZone({ data }: Pick<FeedbackZone, "data">) {
  const { col, rows, type, button, tags, title, typeCard } = data

  const gridClasses = generateGridClasses(col, "grid gap-4");

  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary '>{title}</TypographyH3>
      <div className={gridClasses}>
        {rows.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} >
          </FeedbackCard>
        ))}
      </div>
      {button ? <div className=' flex gap-4 justify-center mt-2'>
        <Link href={button.link || routes.feedback}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>{button.label}</Button>
        </Link>
      </div> : null}
    </section>
  )
}


function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <Card className=' border border-gray-300 group relative'>
      <CardContent className="flex flex-col gap-2 aspect-square py-4">
        <div className=' relative w-full aspect-square'>
          <Image className=' aspect-square object-cover' src={feedback.image.src} alt={feedback.image.alt || ""} width={feedback.image.widht} height={feedback.image.height} />
        </div>
        {/* <CardDescription className=' line-clamp-2'><b className='  text-primary'>{feedback.customerName}</b>: {feedback.content}</CardDescription> */}
        <div className=' flex  gap-2 items-center pt-2 border-t border-gray-200'>
          <TypographyP className='text-muted-foreground font-semibold'>Đã đánh giá:</TypographyP>
          <div className=' flex gap-1 items-center '>
            <StarFilledIcon className=' text-yellow-500' />
            <StarFilledIcon className=' text-yellow-500' />
            <StarFilledIcon className=' text-yellow-500' />
            <StarFilledIcon className=' text-yellow-500' />
            <StarFilledIcon className=' text-yellow-500' />
          </div>
        </div>
      </CardContent>
    </Card>

  )

}