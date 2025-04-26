import React from 'react'
import { FacebookIcon, InstagramLogoIcon, TiktokIcon, ZaloIcon, } from '../icons'
import Link from "@/components/common/Link";
import Image from 'next/image';
import { convertHotlineToTel } from '@/utils';
import CONFIG from '@/consts/config';


export default function SocialList({ itemClass = "w-9 h-9" }: { itemClass?: string }) {
  const items = [
    {
      icon: <FacebookIcon className=' w-9 h-9' />,
      href: "https://www.facebook.com/store.tpmobile",
      title: "facebook"
    },
    {
      icon: <Image width={100} height={100} className={itemClass} src={"https://cdn.tpmobile.com.vn/image/upload/v1745679130/tpmobile-images-public/zalo-icon-circle-1.webp"} alt='zalo' />,

      href: `https://zalo.me/${convertHotlineToTel(CONFIG.HOTLINE)}`,
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
