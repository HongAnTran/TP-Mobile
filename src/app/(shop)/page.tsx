import BannerLarge from '@/components/feature/banners/BannerLarge'
import ProductsZone from '@/components/feature/zones/ProductsZone'
import { PageStructure } from '@/types/Structure.type'
import { Metadata } from 'next'
import React from 'react'
import FeedbacksZone from '@/components/feature/zones/FeedbacksZone'
import ArticlesZone from '@/components/feature/zones/ArticlesZone'
import SettingsServiceApi from '@/services/SettingsService'
import { SETTINGKEYS } from '@/consts/settingsKey'



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
    <div className='  '>
      <BannerLarge />

      <div className=' container py-4 mt-10'>
        <div className=' flex flex-col   gap-16'>
          {zones.map((zone, index) => {
            switch (zone.zone) {
              case "PRODUCTS":
                return <ProductsZone key={index} data={zone.data} />
              case "FEEDBACKS":
                return <FeedbacksZone key={index} data={zone.data} />
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
    </div>
  )
}



// const pageStruct: PageStructure = {
//   zones: [
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "Sản phẩm nổi bật",
//         tags: [],
//         rows: [47, 55, 56, 58, 89, 21, 64, 26],
//         col: {
//           lg: 5,
//           md: 2,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "Sản phẩm mới",
//         tags: [],
//         rows: [58, 90, 63, 42, 53, 31],
//         col: {
//           lg: 5,
//           md: 2,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "IPAD PRO",
//         tags: [],
//         rows: [52, 48, 42, 41, 29],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "IPAD AIR",
//         tags: [],
//         rows: [63, 60, 22, 21, 61],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "IPAD GEN",
//         tags: [],
//         rows: [14, 18, 10, 15, 11],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "IPAD MINI",
//         tags: [],
//         rows: [26, 25, 24, 23, 65],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "Phụ Kiện",
//         tags: [],
//         rows: [84, 85, 83, 81, 80],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "PRODUCTS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "IPHONE",
//         tags: [],
//         rows: [79, 77, 73, 69, 78],
//         col: {
//           lg: 5,
//           md: 3,
//           xs: 2,
//         }
//       }
//     },
//     {
//       zone: "FEEDBACKS",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "feedback",
//         rows: [
//           {
//             image: {
//               src: "/feedback/z5516755077447_17097fc14f25d338adcbc03007b1f623.jpg",
//               alt: "",
//               widht: 500,
//               height: 500
//             },
//             rate: 5,
//           },
//           {
//             image: {
//               src: "/feedback/z5516760524100_bffe10e81604861211bc0f2e5c9b1c7a.jpg",
//               alt: "",
//               widht: 500,
//               height: 500
//             },
//             rate: 5,
//           },
//           {
//             image: {
//               src: "/feedback/z5516755844007_beaf7ff8afd4197797a79c1c28146467.jpg",
//               alt: "",
//               widht: 500,
//               height: 500
//             },
//             rate: 5,
//           },
//           {
//             image: {
//               src: "/feedback/z5516756870577_57a9c448a8a8bf090ebc46085d978c3a.jpg",
//               alt: "",
//               widht: 500,
//               height: 500
//             },
//             rate: 5,
//           }
//         ],
//         col: {
//           lg: 4,
//           md: 2,
//           xs: 1,
//         }
//       }
//     },
//     {
//       zone: "ARTICLES",
//       data: {
//         type: "grid",
//         typeCard: "default",
//         title: "Tin tức mới",
//         button: {
//           link: "#",
//           label: "Xem tất cả"
//         },
//         rows: [
//           1
//         ],
//         col: {
//           lg: 2,
//           md: 2,
//           xs: 1,
//         }
//       }
//     }
//   ]
// }