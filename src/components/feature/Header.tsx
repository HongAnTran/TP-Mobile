import React, { ReactNode } from 'react'
import Logo from '@/components/common/Logo'
import SearchInput from './SearchInput'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import StoreIcon from '../icons/StoreIcon'
import { CartIcon, PhoneFilledIcon } from '../icons'
import { TypographyP } from '../ui/typography'
import routes from '@/routes'

interface HeaderItemProps { icon: ReactNode, text: string, href?: string }

export default async function Header() {
  const items: HeaderItemProps[] = [
    {
      icon: <PhoneFilledIcon />,
      text: "0886723413",
      href: "tel:0886723413"
    },
    {
      icon: <StoreIcon />,
      text: "Cửa hàng",
      href: routes.stores
    },
    {
      icon: <CartIcon />,
      text: "Giỏ hàng",
      href: routes.cart
    },
    {
      icon: <PersonIcon width={20} height={20} />,
      text: "Đăng nhập",
      href: routes.login
    },

  ]

  return (
    <header className='  bg-black  text-white  shadow-md '>
      <div className=' container'>
        <div className=' flex gap-10 items-center  py-4 '>
          <div className=' flex-shrink-0'>
            <Logo />
          </div>
          <div className=' flex-1 max-w-[400px] '>
            <SearchInput />
          </div>
          <div className='  flex-1 '>
            <div className='flex  gap-8 h-full'>
              {
                items.map((item, index) => {
                  return <HeaderItem {...item} key={index} />
                })
              }

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}


function HeaderItem({ icon, text, href }: HeaderItemProps) {
  return <div className=' flex  gap-2   items-center'>
    {icon}
    <div>
      {
        href ?
          <Link href={href} className=' text-sm  hover:text-blue-500 transition-colors font-medium '>{text}</Link> :
          <TypographyP >{text}</TypographyP>
      }
    </div>
  </div>
}