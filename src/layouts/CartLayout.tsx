import HeaderMiniInput from '@/components/feature/headers/HeaderMiniInput'
import HeaderTop from '@/components/feature/headers/HeaderTop'
import { ShopStoreProvider } from '@/providers/shop-store-provider'
import routes from '@/routes'
import React from 'react'

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <ShopStoreProvider>
      <main className=' min-h-screen flex flex-col scroll-smooth' >
        <div className='  bg-primary'>
          <HeaderTop className=' container' />
        </div>
        <HeaderMiniInput title='Giỏ hàng' />
        <div className=' flex-1  pb-8 '>
          {children}
        </div>
      </main>
    </ShopStoreProvider>
  )
}
