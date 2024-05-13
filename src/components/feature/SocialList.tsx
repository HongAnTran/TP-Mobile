import React from 'react'
import { FacebookIcon, InstagramLogoIcon, TiktokIcon, ZaloIcon, } from '../icons'
import Link from "@/components/common/Link";


export default function SocialList({ itemClass = "w-4 h-4" }: { itemClass?: string }) {
  const items = [
    {
      icon: <FacebookIcon className={itemClass} />,
      href: "https://www.facebook.com/store.tpmobile",
      title: "facebook"
    },
    {
      icon: <ZaloIcon className={itemClass} />,
      href: "https://zalo.me/0347907042",
      title: "zalo"

    },
    {
      icon: <TiktokIcon className={itemClass} />,
      href: "https://www.tiktok.com/@tpmobilestore",
      title: "tiktok"

    },
    {
      icon: <InstagramLogoIcon className={itemClass} />,
      href: "https://www.instagram.com/tpmobile.store/",
      title: "instagram"

    },

  ]
  return (
    <div className=' flex gap-4'>
      {
        items.map((item, index) => {
          return <Link title={item.title} target="_blank" href={item.href} key={index} className=' 
          flex items-center justify-center duration-200  rounded-full w-8 h-8  border border-black
             hover:scale-110
             transition-transform
          '>
            {item.icon}
          </Link>
        })
      }
    </div>
  )
}
