import BannerLarge from '@/components/feature/banners/BannerLarge'
import ProductsZone from '@/components/feature/zones/ProductsZone'
import { PageStructure } from '@/types/Structure.type'
import { Metadata } from 'next'
import React from 'react'
import FeedbacksZone from '@/components/feature/zones/FeedbacksZone'
import ArticlesZone from '@/components/feature/zones/ArticlesZone'
import SettingsServiceApi from '@/services/SettingsService'
import { SETTINGKEYS } from '@/consts/settingsKey'
import BannerZone from '@/components/feature/zones/BannerZone'



export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store, bán ipad có tâm nhứt Sài Gòn chuyên các dòng ipad sỉ lẽ",
  authors: [{ name: "TP Mobile", url: process.env.DOMAIN }],
  keywords: ['ipad cũ', "ipad", "ipad like new", "ipad có tâm", "ipad sỉ lẽ"],
};
export default async function page() {
  const {value} = await SettingsServiceApi.getDetail<PageStructure>(SETTINGKEYS.homePageStructure)

  const { zones } = value
  return (
    <>
      <BannerLarge />
      <div className=' container py-4 mt-10'>
        <div className=' flex flex-col   gap-16'>
          {zones.map((zone, index) => {
            if(!zone.active) return null
            switch (zone.zone) {
              case "PRODUCTS":
                return <ProductsZone key={index} data={zone.data} />
              case "FEEDBACKS":
                return <FeedbacksZone key={index} data={zone.data} />
              case "BANNERS":
                  return <BannerZone key={index} data={zone.data} />
              case "ARTICLES":
                return (
                  <ArticlesZone
                    data={zone.data}
                    key={index}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </>
  )
}
