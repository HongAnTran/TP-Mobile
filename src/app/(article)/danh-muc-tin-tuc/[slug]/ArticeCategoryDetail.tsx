import { CategoryArtice } from '@/types/categoryArtice'
import React from 'react'

export default function ArticeCategoryDetail({articeCategory} :{ articeCategory: CategoryArtice }) {

  return (
    <div>{articeCategory.title}</div>
  )
}
