

import React from 'react'
import { TypographyH3, TypographyP } from '../../ui/typography'
import Link from "@/components/common/Link";

import { Button } from '../../ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/card'
import Image from 'next/image'
import f1 from "../../../../public/feedback/z5516755077447_17097fc14f25d338adcbc03007b1f623.jpg"
import f2 from "../../../../public/feedback/z5516760524100_bffe10e81604861211bc0f2e5c9b1c7a.jpg"
import f3 from "../../../../public/feedback/z5516755844007_beaf7ff8afd4197797a79c1c28146467.jpg"
import f4 from "../../../../public/feedback/z5516756870577_57a9c448a8a8bf090ebc46085d978c3a.jpg"
import { Feedback } from '@/types/feedback'
import routes from '@/routes';


export default function SectionFeedback() {
  const feedbacks: Feedback[] = [
    {
      id: 1,
      customerName: "Anh Long",
      image: f3,
      content: "Tôi rất hài lòng với dịch vụ của cửa hàng. Sản phẩm chất lượng và giá cả hợp lý.",
      rate: 5
    },
    {
      id: 2,
      customerName: "Anh Toại",
      image: f1,
      content: "Tôi rất hài lòng với dịch vụ của cửa hàng. Sản phẩm chất lượng và giá cả hợp lý.",
      rate: 5
    }, {
      id: 4,
      customerName: "Anh Sơn",
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
      <TypographyH3 className=' text-center uppercase text-primary '>Feedback từ khách hàng của TP Mobile</TypographyH3>
      <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} >
          </FeedbackCard>
        ))}
      </div>
      <div className=' flex gap-4 justify-center mt-2'>
        <Link href={routes.feedback}>
          <Button className=' bg-primary text-white hover:scale-110 transition-all'>Xem thêm</Button>
        </Link>
        <Link target="_blank" href={"https://www.google.com/maps/place/TP+MOBILE+STORE/@10.7827711,106.618124,17z/data=!4m18!1m9!3m8!1s0x31752d5f330ea7c7:0x1e87e39b41c64ce2!2sTP+MOBILE+STORE!8m2!3d10.7827711!4d106.6206989!9m1!1b1!16s%2Fg%2F11t59jrvk9!3m7!1s0x31752d5f330ea7c7:0x1e87e39b41c64ce2!8m2!3d10.7827711!4d106.6206989!9m1!1b1!16s%2Fg%2F11t59jrvk9?authuser=1&entry=ttu"}>
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
          <Image className=' aspect-square object-cover' src={feedback.image} alt={feedback.customerName} />
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