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
    title: "Ipad Pro M2",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 18.490.000"
  },
  {
    image: "/ipad_pro_hero__bh3eq6sqfjw2_large.jpg",
    title: "Ipad Gen 10",
    description: "Bảo hành 12 tháng - bảo hành lâu nhất Hồ Chí Minh giá chỉ từ 21.490.000"
  },
]
export default function BannerLarge() {
  return (
    <div className="  bg-black flex relative z-20 items-center overflow-hidden">
      <AutoSlider items={datas.map(item=>{
        return (
         <BannerItem item={item} key={item.title} />
        )
      })} />
    </div>
  )
}

function BannerItem({ item }: { item: BannerHeroItem }) {

  return (<div className="container mx-auto px-6 flex relative pt-10 pb-2">
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
      className=" sm:w-1/3 lg:w-3/6 relative"
    >

      <Image width={500} height={500} src={item.image} alt='banner' className=' w-full' priority={true} />

    </motion.div>
  </div>)
}