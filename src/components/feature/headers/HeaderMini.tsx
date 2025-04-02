"use client"
import React, { ReactNode } from 'react'
import Logo from '@/components/common/Logo'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import Link from '@/components/common/Link';



export default function HeaderMini({ title, href, onBackClick }: { title?: string, href?: string, onBackClick?: () => void }) {
  const router = useRouter()
  return (
    <header className='  bg-primary   py-2 '>
      <div className=' container flex items-center justify-center flex-col  relative'>
        <div className=' w-fit p-1 md:hidden absolute left-4 top-0' onClick={() => {
          if (onBackClick) {
            onBackClick()
          } else {
            router.back()
          }
        }}>
          <ArrowBackIcon className=' text-secondary' />
        </div>
        <Logo href={href} />
        {title ? <Link href={href ? href : "#"}><p className='  text-secondary uppercase font-semibold text-base'>{title}</p></Link> : null}
      </div>
    </header>
  )
}

