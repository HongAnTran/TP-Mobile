import React from 'react'
import ArticeDetail from './ArticeDetail'
import ArticeServiceApi from '@/services/articeService'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Metadata } from 'next'
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const artice = await ArticeServiceApi.getDetail(slug)
  if (!artice) {
    notFound()
  }
  const {meta_data} = artice
  const titleShow = meta_data?.meta_title || artice.title
  const desShow = meta_data?.meta_description || artice.description || undefined
  const DOMAIN = process.env.DOMAIN
  return {
    title: titleShow,
    description: desShow,
    openGraph: {
      title: titleShow,
      description: desShow,
      images: { url: artice.thumnal_url, width: 800, height: 600 },
      url: `${DOMAIN}/${routes.artice}/${artice.slug}`,
      siteName: DOMAIN,
    },
    category: artice.category.title,
    other: {
      "og:type": "artice",
    },
  }
}
export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const artice = await ArticeServiceApi.getDetail(slug)
  if (!artice) {
    notFound()
  }
  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Tin tức", slug: routes.artice }, { label: artice.title, isActive: true }]} />
      </div>
      <ArticeDetail artice={artice} />
    </>
  )
}
