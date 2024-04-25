import React from 'react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import routes from '@/routes'
import SectionCategoryGrid from '@/components/feature/SectionCategoryGrid'
import SectionCategoryGrid2 from '@/components/feature/SectionCategoryGrid2'


export default async function page() {

  
  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Danh mục",
            slug: routes.category,
            isActive: true
          }
        ]} />

        <div className=' mt-16 mb-16'>
          <TypographyH2 className=' text-center'>Danh mục sản phẩm</TypographyH2>
        </div>
        <div className=' flex flex-col   gap-16'>
          <SectionCategoryGrid title='Ipad' productIds={[]} />
          <SectionCategoryGrid title='Iphone' productIds={[]} />
          <SectionCategoryGrid2 title='Phụ kiện' productIds={[]} />
        </div>


      </div>
    </div>
  )
}
