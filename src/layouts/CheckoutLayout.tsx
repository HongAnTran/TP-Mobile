import HeaderMini from '@/components/feature/headers/HeaderMini'
import { AuthStoreProvider } from '@/providers/auth-store-provider'
import { ShopStoreProvider } from '@/providers/shop-store-provider'
import React from 'react'

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthStoreProvider>
      <ShopStoreProvider>
        <main className=' min-h-screen flex flex-col scroll-smooth' >
          <HeaderMini title='thanh toán' />
          <div className=' flex-1  pb-8 '>
            {children}
          </div>
        </main>
      </ShopStoreProvider>
    </AuthStoreProvider>
  )
}
