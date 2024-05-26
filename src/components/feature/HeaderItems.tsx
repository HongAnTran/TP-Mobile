"use client"
import React, { useState } from 'react'
import { ReactNode } from 'react'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "@/components/common/Link";

import StoreIcon from '../icons/StoreIcon'
import { NewsIcon } from '../icons'
import { TypographyP } from '../ui/typography'
import routes, { privateToutes } from '@/routes'
import CartHeader from './CartHeader';
import { useSession } from 'next-auth/react';
interface HeaderItemProps { icon: ReactNode, text: string, href?: string, onClick?: () => void }


export default function HeaderItems() {
  const { data } = useSession()
  const customer = data?.user

  const [open, setOpen] = useState(false)


  const customerItem = customer ? {
    icon: <PersonIcon width={20} height={20} />,
    text: customer.name,
    href: privateToutes.account,
  } : {
    icon: <PersonIcon width={20} height={20} />,
    text: "Đăng nhập",
    href: routes.login
  }

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
    customerItem

  ]
  // if (type !== "desktop") {


  // }




  return (
    <>
      <div className=' flex justify-between fixed bottom-0 left-0 right-0  z-50 bg-primary p-4 md:hidden'>
        {
          items.map((item, index) => {
            return <HeaderItem {...item} key={index} />
          })
        }
      </div>


      <div className=' justify-end  gap-8 h-full    hidden md:flex '>
        {
          items.map((item, index) => {
            return <HeaderItem {...item} key={index} />
          })
        }
      </div>
    </>
  )
}


function HeaderItem({ icon, text, href }: HeaderItemProps) {
  return <>
    {href ? <Link href={href} >
      <div className=' flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row '>
        {icon}
        <TypographyP className='text-sm      hover:text-blue-500 transition-colors font-medium  block  md:hidden lg:block' >{text}</TypographyP>

      </div>
    </Link> : <div className='  flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row '>
      {icon}
      <div >
        <TypographyP className='  block  md:hidden lg:block' >{text}</TypographyP>
      </div>
    </div>}


  </>
}

function HeaderItemMobile({ icon, text, href, onClick }: HeaderItemProps) {
  return <Link href={href ? href : "#"} onClick={onClick}>
    <div className=' flex    items-center justify-between py-3 border-b border-gray-200'>
      {icon}
      <TypographyP >{text}</TypographyP>
    </div>
  </Link>
}
