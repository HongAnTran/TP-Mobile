"use client"
import React, { useState } from 'react'
import { ReactNode } from 'react'
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons"
import Link from "@/components/common/Link";

import StoreIcon from '../icons/StoreIcon'
import { NewsIcon } from '../icons'
import { TypographyP } from '../ui/typography'
import routes from '@/routes'
import CartHeader from './CartHeader';
import { getDeviceType } from '@/utils/device';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet"
import Logo from '../common/Logo';
import useGetTypeDevice from '@/hooks/useGetTypeDevice';
interface HeaderItemProps { icon: ReactNode, text: string, href?: string, onClick?: () => void }

const items: HeaderItemProps[] = [
  {
    icon: <StoreIcon />,
    text: "Cửa hàng",
    href: routes.stores
  },
  {
    icon: <NewsIcon />,
    text: "Tin tức",
    href: routes.artice
  },

  {
    icon: <CartHeader />,
    text: "Giỏ hàng",
    href: routes.cart

  },
  {
    icon: <PersonIcon width={20} height={20} />,
    text: "Đăng nhập",
    href: routes.login


  },
]
export default function HeaderItems() {
  const [open, setOpen] = useState(false)
  const type = useGetTypeDevice()

  if (type !== "desktop") {

    return <div className=' justify-end   h-full  flex'>

      <Button variant="ghost" onClick={() => setOpen(true)} className=' p-0' >
        <HamburgerMenuIcon width={28} height={28} />
      </Button>

      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>

        <SheetContent>
          <SheetHeader>
            <Logo className=' text-primary' />

          </SheetHeader>
          <hr/>
          <ul className=' flex flex-col gap-2'>
            {
              items.map((item, index) => {
                return <HeaderItemMobile {...item} key={index} onClick={() => {
                  setOpen(false)
                }} />
              })
            }
          </ul>
        </SheetContent>
      </Sheet>

    </div >
  }

  return (
    <div className=' justify-end  gap-8 h-full  flex'>
      {
        items.map((item, index) => {
          return <HeaderItem {...item} key={index} />
        })
      }
    </div>
  )
}


function HeaderItem({ icon, text, href }: HeaderItemProps) {
  return <div className=' flex  flex-shrink-0 gap-2   items-center  '>
    {icon}
    <div >
      {
        href ?
          <Link href={href} className=' text-sm  hover:text-blue-500 transition-colors font-medium '>{text}</Link> :
          <TypographyP >{text}</TypographyP>
      }
    </div>
  </div>
}

function HeaderItemMobile({ icon, text, href, onClick }: HeaderItemProps) {
  return <Link href={href ? href : "#"} onClick={onClick}>
    <div className=' flex    items-center justify-between py-3 border-b border-gray-200'>
      {icon}   
       <TypographyP >{text}</TypographyP>
    </div>
  </Link>
}
