"use client"
import React from 'react'
import { ReactNode } from 'react'
import { ExitIcon, PersonIcon, ReaderIcon } from "@radix-ui/react-icons"
import StoreIcon from '../../icons/StoreIcon'
import { PhoneFilledIcon } from '../../icons'
import { TypographyP, TypographySpan } from '../../ui/typography'
import routes, { privateRoutes } from '@/routes'
import CartHeader from './CartHeader';
import IconBorder from '../../common/IconBorder';
import NavLink from '../../common/NavLink';
import CONFIG from '@/consts/config'
import { convertHotlineToTel } from '@/utils'
import { cn } from '@/lib/utils'
import useProfile from '@/hooks/useProfile'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Spinner from '@/components/loading/Spinner'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from '@/components/common/Link'
import AuthServiceClientApi from '@/services/client/authService'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useQueryClient } from '@tanstack/react-query'

interface HeaderItemProps { icon: ReactNode, text: ReactNode, href?: string, onClick?: () => void , hoverContent?: ReactNode }
export default function HeaderItems() {

  const queryClient = useQueryClient()
  const { data: customer , isLoading   } = useProfile()
  const router = useRouter()
  const {toast} = useToast()
 async function handleLogout() {
    try {
        await AuthServiceClientApi.logout()
        router.push(routes.home)
        location.reload()
    } catch (error) {
        toast({
          title: "Đăng xuất không thành công",
          description: "Vui lòng thử lại sau",
          variant: "destructive",
        })
    }
  }

  const customerItem =isLoading ?{
    icon :  <><Spinner /></> ,
    text : "",
  } :  customer ? {
    icon:<>  <Avatar>
    <AvatarImage src={customer.avatar || undefined} />
    <AvatarFallback className=' uppercase'>{customer.first_name[0]}</AvatarFallback>
      </Avatar>
    </>,
    text: customer.first_name,
    hoverContent :  <ul className=' flex flex-col gap-2'>
      <Link href={privateRoutes.account}>
           <li className=' flex gap-2 items-center p-1 hover:bg-slate-200'>
            <PersonIcon />
            Tài khoản

           </li>
      </Link>
    <li className=' flex gap-2 items-center p-1 hover:bg-slate-200   cursor-pointer'
    onClick={handleLogout}
    >
        <ExitIcon />
      Đăng xuất</li>
</ul>
  } : {
    icon: <IconBorder><PersonIcon width={20} height={20} /></IconBorder>,
    text: <span>Đăng nhập</span>,
    href: routes.login,
  }

  const items: HeaderItemProps[] = [
    {
      icon: <IconBorder>
        <PhoneFilledIcon className=' w-6 h-6' />
      </IconBorder>
      ,
      text: <span className='  text-[11px]  font-medium uppercase'>Hotline <br /> <b>{CONFIG.HOTLINE}</b> </span>,
      href: `tel:${convertHotlineToTel(CONFIG.HOTLINE)}`
    },
    // {
    //   icon: <IconBorder>
    //     <ReaderIcon className=' w-6 h-6' />
    //   </IconBorder>
    //   ,
    //   text: <span className='  text-[11px]  font-medium uppercase'>Giới thiệu <br /> <b>TP MOBILE</b> </span>,
    //   href: routes.introduce
    // },
    {
      icon: <div className=' relative'>
        <IconBorder >
          <StoreIcon className=' w-6 h-6' />
        </IconBorder>
        <div className=' absolute -right-1 -top-1  w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shadow-md '>
          <TypographySpan className=' text-gray-800 font-bold text-xs'>{2}</TypographySpan>
        </div>
      </div>,
      text: <span className='  text-[11px]  font-medium uppercase'>Hệ thống<br /> <b>Cửa hàng</b> </span>,
      href: routes.stores
    },
    {

      icon:
        <CartHeader />
      ,
      text: <span className='  text-[11px]  font-medium uppercase'>Giỏ hàng<br /> <b>của bạn</b> </span>,
      href: routes.cart

    },
    customerItem
  ]


  return (
    <>
      <div className=' justify-end  gap-8 h-full    flex  '>
        {
          items.map((item, index) => {
            return <HeaderItem {...item} key={index} />
          })
        }
      </div>
    </>
  )
}


function HeaderItem({ icon, text, href, onClick , hoverContent}: HeaderItemProps) {


  if(hoverContent){

    return <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
      <div onClick={onClick} className={cn('  flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row ')}>
      {icon}
      <div >
        <TypographyP className='  block  md:hidden lg:block' >{text}</TypographyP>
      </div>
    </div>
        </HoverCardTrigger>
        <HoverCardContent  sideOffset={5}>
          {hoverContent}
          </HoverCardContent>
        </HoverCard>
  }

  return <>
    {href ? <NavLink href={href}  >
      <div onClick={onClick} className=' flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row '>
        {icon}
        <TypographyP className='text-sm      hover:text-blue-500 transition-colors font-medium   hidden xl:block' >{text}</TypographyP>

      </div>
    </NavLink> : <div onClick={onClick} className={cn('  flex  flex-shrink-0 gap-2   items-center  flex-col md:flex-row ', {
      "cursor-pointer": !!onClick
    })}>
      {icon}
      <div >
        <TypographyP className='  block  md:hidden lg:block' >{text}</TypographyP>
      </div>
    </div>}


  </>
}