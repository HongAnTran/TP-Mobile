import ProductsSkeleton from '@/components/common/ProductsSkeleton'
import BannerLarge from '@/components/feature/BannerLarge'
import BannerMedium from '@/components/feature/BannerMedium'
import SectionArticles from '@/components/feature/SectionArticles'
import SectionCategoryCarousel from '@/components/feature/SectionCategoryCarousel'
import SectionCategoryGrid from '@/components/feature/SectionCategoryGrid'
import SectionFeedback from '@/components/feature/SectionFeedback'
import routes from '@/routes'
import CategoryServiceApi from '@/services/categoryService'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store, bán ipad có tâm nhứt Sài Gòn chuyên các dòng ipad sỉ lẽ",
  authors :[{name : "TP Mobile" , url : process.env.DOMAIN}],
  keywords : ['ipad cũ' , "ipad" , "ipad like new"],
  

};
export default async function page() {
  const cates = await CategoryServiceApi.getList()
  return (
    <div>
      <BannerLarge />
      <div className=' container py-4 mt-10'>
        <div className=' flex flex-col   gap-16'>
          <BannerMedium />
          <SectionCategoryCarousel title='Sản phẩm nổi bật' productIds={[9, 10, 11, 12, 13]} />
          <SectionCategoryCarousel title='Sản phẩm mới' productIds={[1, 2, 3, 4, 5, 6, 7, 8]} skip={8} />
          {
            cates.map(cate => {
              return <Suspense key={cate.id} fallback={<ProductsSkeleton />}>
                <SectionCategoryGrid link={`${routes.category}/${cate.slug}`} title={cate.title} categoryId={cate.id} productIds={[]} />
              </Suspense>
            })
          }
          <SectionFeedback />
          <SectionArticles />
        </div>
      </div>
    </div>
  )
}
