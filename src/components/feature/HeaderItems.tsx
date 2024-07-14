"use client"
import React, { useState } from 'react'
import { ReactNode } from 'react'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "@/components/common/Link";

import StoreIcon from '../icons/StoreIcon'
import { NewsIcon, PhoneFilledIcon } from '../icons'
import { TypographyP } from '../ui/typography'
import routes, { privateToutes } from '@/routes'
import CartHeader from './CartHeader';
import { useSession } from 'next-auth/react';
import IconBorder from '../common/IconBorder';
interface HeaderItemProps { icon: ReactNode, text: ReactNode, href?: string, onClick?: () => void }




export default function HeaderItems() {
  const { data } = useSession()
  const customer = data?.user



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
      icon: <IconBorder>
        <PhoneFilledIcon className=' w-6 h-6' />
      </IconBorder>
      ,
      text: <span className='  text-[11px]  font-medium uppercase'>Hotline <br /> <b>0347907042</b> </span>,
      href: "tel:0347907042"
    },
    {
      icon: <IconBorder>
        <StoreIcon className=' w-6 h-6'/>
      </IconBorder>,
      text: <span className='  text-[11px]  font-medium uppercase'>Hệ thống<br /> <b>Cửa hàng</b> </span>,
      href: routes.stores
    },
    {
      icon:
        <IconBorder>
          <NewsIcon className=' w-6 h-6'/>
        </IconBorder>
      ,
      text:<span className='  text-[11px]  font-medium uppercase'>Tin tức<br /> <b>Công nghệ</b> </span> ,
      href: routes.artice
    },

    {

      icon: 
        <CartHeader />
     ,
      text:<span className='  text-[11px]  font-medium uppercase'>Giỏ hàng<br /> <b>của bạn</b> </span> ,
      href: routes.cart

    },
    // customerItem
  ]

  const itemsMobile: HeaderItemProps[] = [
    {
      icon: <StoreIcon />,
      text: "Danh mục",
      href: routes.category
    },
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
    // customerItem
  ]
  return (
    <>
      <div className=' flex justify-between fixed bottom-0 left-0 right-0  z-50 bg-primary p-4 md:hidden'>
        {
          itemsMobile.map((item, index) => {
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
      <TypographyP className=' flex-shrink-0'>{text}</TypographyP>
    </div>
  </Link>
}
