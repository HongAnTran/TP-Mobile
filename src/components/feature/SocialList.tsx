import React from 'react'
import { FacebookIcon, InstagramLogoIcon, TiktokIcon, ZaloIcon, } from '../icons'
import Link from "@/components/common/Link";
import Image from 'next/image';


export default function SocialList({ itemClass = "w-9 h-9" }: { itemClass?: string }) {
  const items = [
    {
      icon: <Image width={100} height={100} className={itemClass} src={"https://cdn.tpmobile.com.vn/image/upload/v1744301355/tpmobile-images-public/qmlmwbgox7vc0w7mpxow.webp"} alt='facebook' />,
      href: "https://www.facebook.com/store.tpmobile",
      title: "facebook"
    },
    {
      icon: <Image width={100} height={100} className={itemClass} src={"https://cdn.tpmobile.com.vn/image/upload/v1744301368/tpmobile-images-public/m9dfjovsmuzospjvx9lj.webp"} alt='zalo' />,

      href: "https://zalo.me/0347907042",
      title: "zalo"

    },
    {
      icon: <Image width={100} height={100} className={itemClass} src={"https://cdn.tpmobile.com.vn/image/upload/v1744301395/tpmobile-images-public/l9qzmn0sk8pkfmt3vb7t.webp"} alt='tiktok' />,

      href: "https://www.tiktok.com/@tpmobilestore",
      title: "tiktok"

    },
    {
      icon: <Image width={100} height={100} className={itemClass} src={"https://cdn.tpmobile.com.vn/image/upload/v1744301470/tpmobile-images-public/dbanvogb3lzakqc8sw1k.webp"} alt='instagram' />,

      href: "https://www.instagram.com/tpmobile.store/",
      title: "instagram"

    },

  ]
  return (
    <div className=' flex gap-6'>
      {
        items.map((item, index) => {
          return <Link title={item.title} target="_blank" href={item.href} key={index} className=' 
          flex items-center justify-center duration-200   
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
