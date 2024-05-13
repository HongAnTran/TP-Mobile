import React, { ReactNode } from 'react'
import Logo from '@/components/common/Logo'
import { PersonIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import StoreIcon from '../icons/StoreIcon'
import { CartIcon, HeartIcon} from '../icons'
import { TypographyH4, TypographyP } from '../ui/typography'
import routes from '@/routes'
import Notification from './Notification'

interface HeaderItemProps { icon: ReactNode, text: string, href?: string }

export default async function HeaderMini() {
  const items: HeaderItemProps[] = [
    {
      icon: <CartIcon  />,
      text: "Sản phẩm",
      href: routes.products
    },
    {
      icon: <StoreIcon />,
      text: "Cửa hàng TPMobile",
      href: routes.stores
    },


  ]

  return (
    <header className='  bg-black   text-white   shadow-lg '>
      <div className=' container '>
        <div className=' flex gap-10 items-center  py-4'>
          <div className=' flex-shrink-0'>
            <Logo />
          </div>
          <div className=' flex-1  '>

            <div className='flex  gap-8 h-full'>
              {
                items.map((item, index) => {
                  return <HeaderItem {...item} key={index} />
                })
              }

            </div>
          </div>
          <div>
            <HeaderItem    {...{
              icon: <PersonIcon width={20} height={20} />,
              text: "Đăng nhập",
              href: routes.login
            }} />
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