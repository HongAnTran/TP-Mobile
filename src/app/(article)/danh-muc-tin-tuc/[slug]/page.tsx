import React from 'react'
import ArticeCategoryDetail from './ArticeCategoryDetail'
import ArticeServiceApi from '@/services/articeService'
import ArticeCategoryServiceApi from '@/services/articeCategoryService'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const artices = await ArticeServiceApi.getList()

  const articeCategory = await ArticeCategoryServiceApi.getDetail(slug)

  if (!articeCategory) {
    notFound()
  }

  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Danh mục bài viêt", slug: routes.articeCategory }, { label: articeCategory.title, isActive: true }]} />
      </div>
      <ArticeCategoryDetail list={artices} articeCategory={articeCategory} />
    </>
  )
}
