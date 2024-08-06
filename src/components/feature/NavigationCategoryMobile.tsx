
"use client"
import React, { useState } from 'react'
import IconBorder from '../common/IconBorder'
import MenuIcon from '@mui/icons-material/Menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import CategoryServiceClient from '@/servicesClient/CategoryService'
import Image from 'next/image'
import Link from '../common/Link'
import routes from '@/routes'

export default function NavigationCategoryMobile({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const { data, isSuccess, isLoading } = CategoryServiceClient.useList()


  return (
    <div className=' block lg:hidden'>
      <IconBorder onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconBorder>

      <Sheet open={open} onOpenChange={() => setOpen(false)} >
        <SheetContent side="left" >
          <SheetHeader>
            <SheetTitle>Danh mục</SheetTitle>
            {isSuccess ? <ul>
              {data.map(cate => {
                return <Link key={cate.id} href={`${routes.category}/${cate.slug}`} onClick={() => setOpen(false)}>
                  <li className=' border-b flex items-center justify-between p-2 gap-3' >
                    <div className=' w-10 h-10 flex-shrink-0'>
                      <Image className='  w-10 h-10 ' src={cate.image} alt={cate.title} width={100} height={100} />
                    </div>
                    <p className='  flex-1 font-semibold'>
                      {cate.title}
                    </p>
                  </li>
                </Link>
              })}
            </ul> : "Chưa có danh mục nào"}
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}
