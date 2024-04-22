

import React from 'react'
import { TypographyH3, TypographyP } from '../ui/typography'
import Link from 'next/link'
import { Button } from '../ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import f1 from "../../../public/f1.jpg"
import f2 from "../../../public/f2.jpg"
import f3 from "../../../public/f3.jpg"
import f4 from "../../../public/f4.jpg"
import { Feedback } from '@/types/feedback'


export default function SectionFeedback() {
  const feedbacks: Feedback[] = [
    {
      id: 1,
      customerName: "Anh Long bê đe",
      image: f3,
      content: "Tôi rất hài lòng với dịch vụ của cửa hàng. Sản phẩm chất lượng và giá cả hợp lý.",
      rate: 5
    },
    {
      id: 2,
      customerName: "Anh Toại ngu",
      image: f1,
      content: "Tôi rất hài lòng với dịch vụ của cửa hàng. Sản phẩm chất lượng và giá cả hợp lý.",
      rate: 5
    },    {
      id: 4,
      customerName: "Anh Sơn ngu",
      image: f4,
      content: "Tôi rất hài lòng với dịch vụ của cửa hàng. Sản phẩm chất lượng và giá cả hợp lý.",
      rate: 5
    },
    {
      id: 3,
      customerName: "Tuấn",
      image: f2,
      content: "Mình đã mua iPhone và iPad ở đây và rất ấn tượng với dịch vụ. Nhân viên thân thiện và nhiệt tình.",
      rate: 5
    }
  ];
  return (
    <section className=' flex flex-col gap-4'>
      <TypographyH3 className=' text-center uppercase text-primary'>Feedback từ khách hàng của TP Mobile</TypographyH3>
      <div className=' grid grid-cols-2  lg:grid-cols-4 gap-4'>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} >
          </FeedbackCard>
        ))}
      </div>
      <div className=' flex gap-4 justify-center mt-2'>
        <Link href={"/"}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>Viết đánh giá</Button>
        </Link>
      </div>
    </section>
  )
}


function FeedbackCard({ feedback }: { feedback: Feedback }) {
  return (
    <Card className=' border border-gray-300 group relative'>
      <CardContent className="flex flex-col gap-2 aspect-square py-4">
        <div className=' relative w-full aspect-square'>
          <Image className=' w-full h-full aspect-square object-cover' src={feedback.image} alt={feedback.customerName} />
        </div>

        <CardDescription className=' line-clamp-2'><b className='  text-primary'>{feedback.customerName}</b>: {feedback.content}</CardDescription>
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