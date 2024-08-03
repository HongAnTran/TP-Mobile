import React, { ReactNode } from 'react'
import Logo from '@/components/common/Logo'
export default async function HeaderMini() {

  return (
    <header className='  bg-primary   py-2 '>
      <div className=' container flex items-center justify-center '>
        <Logo  />
      </div>
    </header>
  )
}

