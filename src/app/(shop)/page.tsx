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
import { WithContext, BreadcrumbList } from 'schema-dts'
import CONFIG from '@/consts/config'
import EventPopup from '@/components/feature/eventPopup/EventPopup'

// function generateStructData(
// ): WithContext<BreadcrumbList> {
//   return {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "iPad Pro", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-pro` },
//       { "@type": "ListItem", "position": 2, "name": "iPad Air", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-air` },
//       { "@type": "ListItem", "position": 3, "name": "iPad Gen", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-gen` },
//       { "@type": "ListItem", "position": 4, "name": "iPad Mini", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-mini` },
//       { "@type": "ListItem", "position": 5, "name": "Phụ kiện", "item": `${CONFIG.DOMAIN}/danh-muc/phu-kien` },
//       { "@type": "ListItem", "position": 6, "name": "Iphone", "item": `${CONFIG.DOMAIN}/danh-muc/iphone` },
//       { "@type": "ListItem", "position": 7, "name": "iPad cũ", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-cu` },
//       { "@type": "ListItem", "position": 8, "name": "iPad New", "item": `${CONFIG.DOMAIN}/danh-muc/ipad-new` },
//     ]

//   };
// }
export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store chuyên bán iPad có tâm nhất Sài Gòn. Danh mục: iPad Pro, iPad Air, iPad Mini, iPad Gen.",
  authors: [{ name: "TP Mobile", url: CONFIG.DOMAIN }],
  keywords: ['ipad cũ', "ipad", "ipad like new", "ipad có tâm", "ipad sỉ lẻ", 'ipad pro', 'ipad air', 'ipad mini', 'ipad gen'],
  openGraph: {
    title: "TP MOBILE STORE",
    description: "Chuyên bán iPad có tâm nhất Sài Gòn: iPad Pro, iPad Air, iPad Mini, iPad Gen.",
    type: "website",
    url: CONFIG.DOMAIN,
    images: [`${CONFIG.DOMAIN}/icon.ico`],
  },
  alternates: {
    canonical: CONFIG.DOMAIN
  },
};

export default async function page() {
  const { value } = await SettingsServiceApi.getDetail<PageStructure>(SETTINGKEYS.homePageStructure)
  // const jsonLd = generateStructData();

  const { zones } = value
  return (
    <>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}

      <BannerLarge />
      <div className=' container py-4 mt-10'>
        <div className=' flex flex-col   gap-16'>
          {zones.map((zone, index) => {
            if (!zone.active) return null
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
      {/* <EventPopup /> */}

    </>
  )
}
