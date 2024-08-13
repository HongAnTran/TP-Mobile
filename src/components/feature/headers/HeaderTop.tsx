import Link from '@/components/common/Link'
import { TypographyH4 } from '@/components/ui/typography'
import routes from '@/routes'
import React from 'react'
import Notification from '../Notification'
import { cn } from '@/lib/utils'
import { HeartIcon } from '@/components/icons'

export default function HeaderTop({ className} : {className?:string}) {
  return (
    <div className={cn(' flex   justify-between  items-center  py-2    bg-primary ' ,className)}>
      <TypographyH4 className=' md:text-xs text-[10px]  font-semibold  text-secondary ' >TP Mobile - Bán iPad có tâm &quot;Nhứt&quot; Sài Gòn 😎</TypographyH4>
      <div className=' flex gap-4'>
        <Link href={routes.wishlist} title='Yêu thích của bạn'>
          <HeartIcon className=' text-secondary  ' />

        </Link>
        <Notification />
      </div>
    </div>
  )
}
