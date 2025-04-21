import React from 'react'
import CategoryServiceApi from '@/services/categoryService'
import NavigationCategoryClient from './NavigationCategoryClient'
import SettingsServiceApi from '@/services/SettingsService'
import { SETTINGKEYS } from '@/consts/settingsKey'
import { MenuSettings } from '@/types/Settings.type'


export default async function NavigationCategory({ className }: { className?: string }) {
  // const { value } = await SettingsServiceApi.getDetail<MenuSettings[]>(SETTINGKEYS.mainMenu)
  // const slugs = value.map((item) => item.slug).join(',')



  const { datas: cates } = await CategoryServiceApi.getList({
    // slugs
  })

  return (
    <NavigationCategoryClient data={cates} />
  )
}
