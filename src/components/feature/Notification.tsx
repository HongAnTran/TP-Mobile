"use client"
import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { NotificationIcon } from '../icons'
import { TypographySpan } from '../ui/typography'
export default function Notification() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className=' hover:cursor-pointer'>
        <div className='  relative'>
          <NotificationIcon className=' text-white' />
          <div className=' absolute -right-1 -top-1  w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shadow-md '>
            <TypographySpan className=' text-gray-800 font-bold text-xs'>0</TypographySpan>
          </div>
        </div>

      </HoverCardTrigger>
      <HoverCardContent className="w-80" side="bottom" align="end">
   
          <p className="text-sm text-center">
            Chưa có thông báo nào !
          </p>
      
      </HoverCardContent>
    </HoverCard>
  )
}
