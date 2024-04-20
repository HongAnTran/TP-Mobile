import BannerLarge from '@/components/feature/BannerLarge'
import SectionCategory from '@/components/feature/SectionCategory'
import React from 'react'

export default function page() {
  return (
    <div>
      <BannerLarge />
      <div className=' container py-4'>

        <SectionCategory title='Bạn có thể thích' productIds={[]} />

      </div>
    </div>
  )
}
