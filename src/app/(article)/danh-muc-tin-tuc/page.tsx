import React from 'react'
import ArticeCategory from './ArticeCategory'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export default function page() {

  return (
    <>
      <div className=' mb-8'>
        <Breadcrumbs breadcrumbsList={[{ label: "Danh mục bài viêt"}]} />
      </div>
      <ArticeCategory />
    </>
  )
}
