import { Article } from '@/types/article'
import { CategoryArtice } from '@/types/categoryArtice'
import React from 'react'
import Artice from '../../_components/Artice'

export default function ArticeCategoryDetail({articeCategory , list} :{ articeCategory: CategoryArtice  , list : Article[]}) {

  return (
   <Artice  artices={list} title={articeCategory.title}/>
  )
}
