import React  from 'react'
import CategoryServiceApi from '@/services/categoryService'
import NavigationCategoryClient from './NavigationCategoryClient'


export default async function NavigationCategory({ className}: {  className?: string }) {
  const cates = await CategoryServiceApi.getList()
  return (
    <NavigationCategoryClient data={cates} />
  )
}
