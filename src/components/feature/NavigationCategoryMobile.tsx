
"use client"
import React, { useState } from 'react'
import CategoryServiceApi from '@/services/categoryService'
import NavigationCategoryClient from './NavigationCategoryClient'
import { UilBars } from '@iconscout/react-unicons'
import IconBorder from '../common/IconBorder'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CategoryServiceClient from '@/servicesClient/CategoryService'
import Image from 'next/image'
import Link from '../common/Link'
import routes from '@/routes'

export default function NavigationCategoryMobile({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const { data, isSuccess, isLoading } = CategoryServiceClient.useList()

  if (!isSuccess) {
    return null
  }


  return (
    <>
      <IconBorder onClick={() => setOpen(true)}>

        <UilBars />
      </IconBorder>
      <Sheet open={open} onOpenChange={() => setOpen(false)} >
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Danh mục</SheetTitle>
            <ul>
              {data.map(cate => {
                return <Link key={cate.id} href={`${routes.category}/${cate.slug}`} onClick={()=>setOpen(false)}>
                  <li className=' border-b flex items-center justify-between p-2 gap-3' >
                    <div className=' w-10 h-10 flex-shrink-0'>
                      <Image className='  w-10 h-10 ' src={cate.image} alt={cate.title} width={100} height={100} />
                    </div>
                    <p className='  flex-1'>
                      {cate.title}
                    </p>
                  </li>
                </Link>

              })}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </>
  )
}
