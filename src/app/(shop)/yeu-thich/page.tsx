import React from 'react'
import Wishlist from './Wishlist'
import LayoutContainer from '@/layouts/LayoutContainer'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function page() {
  return (
    <LayoutContainer >
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Yêu thích",
            isActive: true
          }]} />
      <Wishlist />
    </LayoutContainer>
  )
}
