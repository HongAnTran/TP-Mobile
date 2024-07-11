import CheckoutLayout from '@/layouts/CheckoutLayout'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutLayout>
      {children}
    </CheckoutLayout>
  )
}
