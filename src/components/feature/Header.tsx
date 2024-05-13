
import {  ReactNode } from 'react'
import Logo from '@/components/common/Logo'
import SearchInput from './SearchInput'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "@/components/common/Link";

import StoreIcon from '../icons/StoreIcon'
import {  HeartIcon, NewsIcon } from '../icons'
import { TypographyH4, TypographyP } from '../ui/typography'
import routes from '@/routes'
import Notification from './Notification'
import { cn } from '@/lib/utils'
import CartHeader from './CartHeader';

interface HeaderItemProps { icon: ReactNode, text: string, href?: string }

export default function Header() {
  const items: HeaderItemProps[] = [
    {
      icon: <StoreIcon />,
      text: "Cửa hàng TPMobile",
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
      // href: "#"

    },
    {
      icon: <PersonIcon width={20} height={20} />,
      text: "Đăng nhập",
      href: routes.login


    },
  ]



  return (
    <header className={cn('  bg-black   text-white   shadow-lg  transition-transform duration-300')}>
      <div className=' container'>
        <HeaderTop />
        <div className=' flex gap-10 items-center  pt-0 py-3 '>
          <div className=' flex-shrink-0'>
            <Logo />
          </div>
          <div className=' flex-1 max-w-[400px] '>
            <SearchInput />
          </div>
          <div className='  flex-1   flex-shrink-0   '>
            <div className='flex justify-end  gap-8 h-full'>
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
  return <div className=' flex  flex-shrink-0  gap-2   items-center'>
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

function HeaderTop() {
  return (
    <div className=' flex   justify-between  items-center  py-2    bg-secondary '>
      <TypographyH4 className=' text-xs  font-semibold' >TP Mobile Store - Bán Ipad có tâm nhứt Sài Gòn</TypographyH4>
      <div className=' flex gap-4'>
        {/* <SocialList /> */}
        <Link href={routes.wishlist} title='Yêu thích của bạn'>
          <HeartIcon className=' text-white' />
        </Link>
        <Notification />
      </div>
    </div>
  )
}