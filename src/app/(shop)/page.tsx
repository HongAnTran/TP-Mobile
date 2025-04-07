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
import CONFIG from '@/consts/config'
import EventPopup from '@/components/feature/eventPopup/EventPopup'
import NavigationZone from '@/components/feature/zones/NavigationZone'
import BenefitsZone from '@/components/feature/zones/BenefitsZone'

export const metadata: Metadata = {
  title: "TP MOBILE STORE - Trang chủ",
  description: "TP Mobile store chuyên bán iPad có tâm nhất Sài Gòn. Chúng tôi cung cấp các sản phẩm iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn. Cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
  authors: [{ name: "TP Mobile", url: CONFIG.DOMAIN }],
  keywords: ['ipad cũ', "ipad", "ipad like new", "ipad có tâm", "ipad sỉ lẻ", 'ipad pro', 'ipad air', 'ipad mini', 'ipad gen' , 'ipad 10', 'ipad 9', 'ipad 8', 'ipad 7', 'ipad 6', 'ipad 5', 'ipad 4', 'ipad 3', 'ipad 2'],
  abstract: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
  openGraph: {
    type: 'website',
    url: process.env.DOMAIN,
    title: "TP MOBILE STORE - Trang chủ",
    description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
    images: [
      {
        url: `https://cdn.tpmobile.com.vn/image/upload/v1742969820/tpmobile-images-public/chqwmqybyrjm6ego88k3.jpg`,
        width: 800,
        height: 600,
        alt: 'TP Mobile Store',
      }
    ],
  },
  twitter: {
    site: '@TPMobile',
    title: "TP MOBILE STORE - Trang chủ",
    description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
    images: [
      {
        url: `https://cdn.tpmobile.com.vn/image/upload/v1742969820/tpmobile-images-public/chqwmqybyrjm6ego88k3.jpg`,
        width: 800,
        height: 600,
        alt: 'TP Mobile Store',
      }
    ],
  },
  alternates: {
    canonical: CONFIG.DOMAIN
  },
};

export default async function page() {
  const { value } = await SettingsServiceApi.getDetail<PageStructure>(SETTINGKEYS.homePageStructure)
  
  const { zones } = value

  return (
    <>
      <BannerLarge />
      <div className=' container py-4 mt-2'>
        <div className=' flex flex-col   gap-16'>
          {zones.map((zone, index) => {
            if (!zone.active) return null
            switch (zone.zone) {
              case "NAVIGATION":
                return <NavigationZone key={index} data={zone.data} />
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
               case "BENEFITS":
                return <BenefitsZone key={index} data={zone.data} /> 
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
