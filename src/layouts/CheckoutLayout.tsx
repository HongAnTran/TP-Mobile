import HeaderMini from '@/components/feature/HeaderMini'
import React from 'react'

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=' min-h-screen flex flex-col scroll-smooth' >
      <HeaderMini />
            <div className=' flex-1  pb-8 '>
                {children}
            </div>
        </main>
  )
}
