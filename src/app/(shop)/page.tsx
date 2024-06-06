import BannerLarge from '@/components/feature/BannerLarge'
import BannerMedium from '@/components/feature/BannerMedium'
import SectionArticles from '@/components/feature/SectionArticles'
import SectionCategoryCarousel from '@/components/feature/SectionCategoryCarousel'
import SectionCategoryGrid from '@/components/feature/SectionCategoryGrid'
import SectionCategoryGrid2 from '@/components/feature/SectionCategoryGrid2'
import SectionFeedback from '@/components/feature/SectionFeedback'
import React from 'react'

export default function page() {
  return (
    <div>
      <BannerLarge />
      <div className=' container py-4 mt-10'>
        <div className=' flex flex-col   gap-16'>
          <BannerMedium />
          <SectionCategoryCarousel title='Sản phẩm nổi bật' productIds={[1]}  />
          <SectionCategoryCarousel title='Sản phẩm mới' productIds={[1]}  />
          <SectionCategoryGrid title='Ipad' productIds={[1]} />
          {/* <SectionCategoryGrid title='Iphone' productIds={[]} />
          <SectionCategoryGrid2  title='Phụ kiện' productIds={[]} /> */}
          <SectionFeedback />
          <SectionArticles />
        </div>
      </div>
    </div>
  )
}
