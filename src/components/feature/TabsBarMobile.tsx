"use client"
import React from 'react'
import { ReactNode } from 'react'
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons"

import StoreIcon from '../icons/StoreIcon'
import { NewsIcon, PhoneFilledIcon } from '../icons'
import { TypographyP, TypographySpan } from '../ui/typography'
import routes, { privateToutes } from '@/routes'
import { useSession } from 'next-auth/react';
import IconBorder from '../common/IconBorder';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import NavLink from '../common/NavLink';

interface HeaderItemProps { icon: ReactNode, text: ReactNode, href?: string, onClick?: () => void }




export default function TabsBarMobile() {
  const { data } = useSession()
  const customer = data?.user



  const customerItem = customer ? {
    icon: <IconBorder> <PersonIcon width={20} height={20} /></IconBorder>,
    text: customer.name,
    href: privateToutes.account,
  } : {
    icon: <IconBorder><PersonIcon width={20} height={20} /></IconBorder>,
    text: "Đăng nhập",
    href: routes.login
  }

  const itemsMobile: HeaderItemProps[] = [
    {

      icon: <IconBorder>
        <HomeIcon />
      </IconBorder>,
      text: "Trang chủ",
      href: routes.home
    },
    {

      icon: <IconBorder>
        <GridViewIcon />
      </IconBorder>,
      text: "Danh mục",
      href: routes.category
    },

    {
      icon: <div className=' relative'>
        <IconBorder >
          <StoreIcon />
        </IconBorder>
        <div className=' absolute -right-1 -top-1  w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shadow-md '>
          <TypographySpan className=' text-gray-800 font-bold text-xs'>{2}</TypographySpan>
        </div>
      </div>,
      text: "Cửa hàng",
      href: routes.stores
    },

    {
      icon: <IconBorder><NewsIcon /></IconBorder>,
      text: "Tin tức",
      href: routes.artice
    },

    // customerItem
  ]
  return (
    <nav className='  text-secondary rounded-t-xl flex justify-between fixed -bottom-[6px] left-0 right-0  z-50 bg-primary p-4 md:hidden'>
      {
        itemsMobile.map((item, index) => {
          return <HeaderItemMobile {...item} key={index} />
        })
      }
    </nav>
  )
}




function HeaderItemMobile({ icon, text, href, onClick }: HeaderItemProps) {
  return <>
    {href ? <NavLink href={href} absolute >
      <div className=' flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row '>
        {icon}
        <TypographyP className='text-sm      hover:text-blue-500 transition-colors font-medium' >{text}</TypographyP>

      </div>
    </NavLink> : <div className='  flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row '>
      {icon}
      <div >
        <TypographyP className='  block  md:hidden lg:block' >{text}</TypographyP>
      </div>
    </div>}
  </>
}
