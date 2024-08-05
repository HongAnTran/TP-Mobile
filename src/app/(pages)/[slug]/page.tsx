import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageServiceApi from '@/services/pageService';
import { notFound } from 'next/navigation';
import React from 'react';



export async function generateMetadata({ params }: { params: { slug: string } }) {

  const slug = params.slug

  const page = await PageServiceApi.getDetail(slug)
  console.log("pâppa",page)
  if (!page) {
    notFound()
  }
  const { meta_data } = page

  return {
    title: meta_data?.meta_title ? meta_data?.meta_title : page.title,
    description: meta_data?.meta_description ? meta_data?.meta_description : page.title,
    keywords: meta_data?.meta_keywords ? meta_data?.meta_keywords : page.title
  }
}

export default async function Page({ params }: { params: { slug: string } }) {

  const slug = params.slug

  const page = await PageServiceApi.getDetail(slug)

  if (!page) {
    notFound()
  }

 



  return (
    <div className=' container my-8'>
      <Breadcrumbs breadcrumbsList={[{ label: page.title, isActive: true }]} />
      <section dangerouslySetInnerHTML={{ __html: page.content_html }} className=' mt-4'>
      </section>
    </div>
  );
}
