import React from 'react'
import ArticeCategoryDetail from './ArticeCategoryDetail'
import ArticeServiceApi from '@/services/articeService'
import ArticeCategoryServiceApi from '@/services/articeCategoryService'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const articeCategory = await ArticeCategoryServiceApi.getDetail(slug)
  const { datas } = await ArticeServiceApi.getList({ categoryId: articeCategory.id })


  if (!articeCategory) {
    notFound()
  }

  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Danh mục bài viêt", slug: routes.articeCategory }, { label: articeCategory.title, isActive: true }]} />
      </div>
      <ArticeCategoryDetail list={datas} articeCategory={articeCategory} />
    </>
  )
}
