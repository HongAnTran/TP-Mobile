import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageServiceApi from '@/services/pageService';
import { PageLayoutType } from '@/types/page';
import { notFound } from 'next/navigation';
import React from 'react';



export async function generateMetadata({ params }: { params: { slug: string } }) {

  const slug = params.slug

  const page = await PageServiceApi.getDetail(slug)

  if (!page) {
    notFound()
  }

  return {
    title: page.meta_title ? page.meta_title : page.title,
    description: page.meta_description ? page.meta_description : page.title,
    keywords : page.meta_keywords ? page.meta_keywords : page.title
  }
}

export default async function Page({ params }: { params: { slug: string } }) {

  const slug = params.slug

  const page = await PageServiceApi.getDetail(slug)

  if (!page) {
    notFound()
  }

  if (page.layout_type === PageLayoutType.FULL) {
    return (
      <section dangerouslySetInnerHTML={{ __html: page.content }}>
      </section>
    )
  }



  return (
    <div className=' container my-8'>
      <Breadcrumbs breadcrumbsList={[{ label: page.title, isActive: true }]} />
      <section dangerouslySetInnerHTML={{ __html: page.content }} className=' mt-4'>
      </section>
    </div>
  );
}
