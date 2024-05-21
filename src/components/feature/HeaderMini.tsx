import React, { ReactNode } from 'react'
import Logo from '@/components/common/Logo'
export default async function HeaderMini() {

  return (
    <header className='  bg-white   text-black   shadow-2xl py-2 '>
      <div className=' container flex items-center justify-center '>
        <Logo className=' text-primary' />
      </div>


    </header>
  )
}

