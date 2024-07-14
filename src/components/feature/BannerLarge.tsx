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
    image: "/ipad_pro_hero__bh3eq6sqfjw2_large.png",
    title: "Ipad Pro M2",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 11.490.000",
    link : "/san-pham/ipad-gen-10-109-inch-2022-wifi"
  },
  {
    image: "/Apple-iPad-Air-2024-PNG.png",
    title: "Ipad Air 5",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 12.990.000",
    link : "/san-pham/ipad-air-5-109-inch-2022-wifi"
  },
]
export default function BannerLarge() {
  return (
    <div className="    bg-primary flex relative z-20 items-center overflow-hidden">
      <AutoSlider items={datas.map(item=>{
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
      className='sm:w-2/3 lg:w-3/6 flex flex-col relative z-20'
      exit={{ y: -10, opacity: 0 }}

    >
      <span className="w-20 h-2  bg-white mb-12"></span>
      <h2 className="font-bebas-neue uppercase text-2xl sm:text-8xl font-black flex flex-col leading-none bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">

        {item.title}
      </h2>
      <p className=" text-xs   md:text-base   text-secondary">
        {item.description}
      </p>
      <div className="flex mt-8">
        <Link
          href={item.link || "#"}
          className="uppercase hidden md:block py-2 px-1 md:px-4 rounded-lg  bg-secondary border-2 border-transparent text-primary  mr-4  font-bold"
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
      className=" sm:w-1/3 lg:w-3/6 relative flex  justify-center"
    >

      <Image width={500} height={500} src={item.image} alt='banner' className='w-[360px] h-[360px] rounded-lg' priority={true} />

    </motion.div>
  </div>)
}