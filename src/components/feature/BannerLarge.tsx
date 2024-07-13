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
    image: "/ipad_pro_hero__bh3eq6sqfjw2_large.jpg",
    title: "Ipad Gen 10",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 9.390.000",
    link : "/san-pham/ipad-gen-10-109-inch-2022-wifi"
  },
  {
    image: "https://i.pinimg.com/564x/34/a5/06/34a5069cd0ecc84848a4d73db910aab8.jpg",
    title: "Ipad Air 5",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 12.990.000",
    link : "/san-pham/ipad-air-5-109-inch-2022-wifi"
  },
]
export default function BannerLarge() {
  return (
    <div className="   bg-primary flex relative z-20 items-center overflow-hidden">
      <AutoSlider items={datas.map(item=>{
        return (
         <BannerItem item={item} key={item.title} />
        )
      })} />
    </div>
  )
}

function BannerItem({ item }: { item: BannerHeroItem }) {

  return (<div className="container mx-auto px-8 flex relative py-10">
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
      <p className=" text-xs   md:text-base  text-gray-200">
        {item.description}
      </p>
      <div className="flex mt-8">
        <Link
          href={item.link || "#"}
          className="uppercase hidden md:block py-2 px-1 md:px-4 rounded-lg bg-primary border-2 border-transparent text-white  mr-4 hover:bg-pink-400"
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