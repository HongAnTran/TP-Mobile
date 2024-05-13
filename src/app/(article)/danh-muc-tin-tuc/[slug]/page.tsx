import React from 'react'
import ArticeCategoryDetail from './ArticeCategoryDetail'
import ArticeServiceApi from '@/services/articeService'
import ArticeCategoryServiceApi from '@/services/articeCategoryService'
import { notFound } from 'next/navigation'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const articeCategory = await ArticeCategoryServiceApi.getDetail(slug)

  if (!articeCategory) {
    notFound()
  }

  return (
   <ArticeCategoryDetail  articeCategory={articeCategory}/>
  )
}
