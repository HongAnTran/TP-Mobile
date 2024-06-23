import React  from 'react'
import NavigationCategoryClient from './NavigationCategoryClient'
import ArticeCategoryServiceApi from '@/services/articeCategoryService'


export default async function NavigationCategoryArticle() {
  const cates = await ArticeCategoryServiceApi.getList()
  return (
    <NavigationCategoryClient data={cates} />
  )
}
