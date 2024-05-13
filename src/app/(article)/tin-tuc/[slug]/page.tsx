import React from 'react'
import ArticeDetail from './ArticeDetail'
import ArticeServiceApi from '@/services/articeService'
import { notFound } from 'next/navigation'

export default async function page({ params }: { params: { slug: string } }) {

  const slug = params.slug

  const artice = await ArticeServiceApi.getDetail(slug)


  if (!artice) {
    notFound()
  }



  return (
    <div className=' my-8 container'>
      <ArticeDetail artice={artice} />
    </div>
  )
}
