import React from 'react'
import ArticeDetail from './ArticeDetail'
import ArticeServiceApi from '@/services/articeService'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const artice = await ArticeServiceApi.getDetail(slug)
  if (!artice) {
    notFound()
  }

  console.log(artice)

  return (
    <>
      <div className=' mb-8'>
      <Breadcrumbs breadcrumbsList={[{ label: "Tin tức" , slug: routes.artice }, { label: artice.title, isActive: true }]} />
      </div>

      <ArticeDetail artice={artice} />
    </>
  )
}
