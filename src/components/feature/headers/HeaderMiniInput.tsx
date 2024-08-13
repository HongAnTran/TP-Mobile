"use client"
import React from 'react'
import Logo from '@/components/common/Logo'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import SearchInput from '@/components/feature/SearchInput';
import Link from '@/components/common/Link';



export default function HeaderMiniInput({ title, href, onBackClick }: { title?: string, href?: string, onBackClick?: () => void }) {
  const router = useRouter()
  return (
    <header className='  bg-primary   py-2 '>
      <div className=' container flex items-center  justify-center md:justify-start gap-8 relative'>
        <div className=' w-fit p-1 md:hidden absolute left-4 top-2' onClick={() => {
          if (onBackClick) {
            onBackClick()
          } else {
            router.back()
          }
        }}>
          <ArrowBackIcon className=' text-secondary' />
        </div>
        <div className=' flex items-center gap-4'>
          <Logo href={href} />
          {title ? <Link href={href ? href : "#"}><p className='  text-secondary uppercase font-semibold text-base'>{title}</p></Link> : null}
        </div>
        <div className=' hidden md:block md:min-w-[500px]'><SearchInput /></div>
      </div>
    </header>
  )
}

