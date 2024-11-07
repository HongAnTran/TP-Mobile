import { Article } from '@/types/Article.type'
import { CategoryArtice } from '@/types/categoryArtice'
import React from 'react'
import Artice from '../../_components/Artice'

export default function ArticeCategoryDetail({articeCategory , list} :{ articeCategory: CategoryArtice  , list : Article[]}) {

  return (
   <Artice  artices={list} />
  )
}
