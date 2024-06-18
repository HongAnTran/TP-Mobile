import React from 'react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import routes from '@/routes'
import SectionCategoryGrid from '@/components/feature/SectionCategoryGrid'
import CategoryServiceApi from '@/services/categoryService'


export default async function page() {

  const cates = await CategoryServiceApi.getList()

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
          {cates.map((cate) => {
            return <SectionCategoryGrid key={cate.id} title={cate.title} productIds={[]} categoryId={cate.id} />
          })}


        </div>


      </div>
    </div>
  )
}
