"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { motion } from "framer-motion"
import AutoSlider from '@/components/common/AutoSlide'

interface BannerHeroItem {
  image: string
  title: string
  description?: string
  link?: string
}

const datas: BannerHeroItem[] = [
  {
    image: "/Apple-iPad-Pro-2024-Black-PNG.png",
    title: "Ipad Pro M4",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 23,290,000₫",
    link: "/san-pham/ipad-air-6-11-inch-wifi-openbox"
  },
  {
    image: "/Apple-iPad-Air-2024-PNG.png",
    title: "Ipad Air 6",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 15,790,000đ",
    link: "/san-pham/ipad-air-6-13-inch-lte-new-seal"
  },
]
export default function BannerLarge() {
  return (
    <div className="    bg-primary flex relative z-20 items-center overflow-hidden">
      <AutoSlider items={datas.map(item => {
        return (
          <BannerItem item={item} key={item.title} />
        )
      })} />
    </div>
  )
}

function BannerItem({ item }: { item: BannerHeroItem }) {

  return (<div className="container mx-auto px-8 flex relative py-10  justify-center">
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4 }}
      className=' w-2/4 lg:w-3/6 flex flex-col relative z-20'
      exit={{ y: -10, opacity: 0 }}

    >
      <span className="w-20 h-2  bg-white mb-12"></span>
      <h2 className="font-bebas-neue uppercase   text-xl md:text-6xl xl:text-8xl font-black flex flex-col leading-none bg-gradient-to-r from-indigo-400  to-secondary  bg-clip-text text-transparent">

        {item.title}
      </h2>
      <p className=" text-xs   md:text-base   text-secondary">
        {item.description}
      </p>
      <div className="flex mt-8">
        <Link
          href={item.link || "#"}
          className=" text-sm lg:text-base uppercase md:block py-2 px-1 md:px-4 rounded-lg   bg-indigo-400 border-2 border-transparent text-white  mr-4  font-bold"
        >
          Tìm hiểu ngay
        </Link>
      </div>
    </motion.div>
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className=" w-2/4 lg:w-3/6 relative flex  justify-center"
    >

      <Image width={500} height={500} src={item.image} alt='banner' className=' w-[200px] h-[200px] md:w-[300px] md:h-[300px]  lg:w-[360px] lg:h-[360px] rounded-lg' priority={true} />

    </motion.div>
  </div>)
}