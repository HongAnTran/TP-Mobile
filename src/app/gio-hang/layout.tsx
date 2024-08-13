import CartLayout from '@/layouts/CartLayout'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartLayout>
      {children}
    </CartLayout>
  )
}
