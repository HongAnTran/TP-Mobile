import React from 'react'
import Cart from './Cart'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function page() {

  return (
    <div className=' container my-8'>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Giỏ hàng", isActive: true }]} />
      </div>
      <Cart />
    </div>
  )
}
