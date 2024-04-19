"use client"
import Image from 'next/image'
import React from 'react'
import { CaretRightIcon } from '@radix-ui/react-icons'
import banner from "../../../public/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
import Link from 'next/link'

import { motion  } from "framer-motion"
export default function BannerLarge() {

  return (
    <div className='  bg-black '>
      <div className=' container'>
        <div className=' grid grid-cols-12'>
          <div className=' col-span-4'>
            <div className=' flex flex-col  justify-center items-center w-full h-full'>
              <h2 className=' text-white  text-6xl font-bold'> TP MOBILE</h2>
              <p className=' text-white text-xl font-bold'>Bán Ipad có tâm nhứt Sài Gòn</p>
              <Link href={"/"}  className=' flex items-center  text-blue-700' >Tìm hiểu thêm <CaretRightIcon /> </Link>
            </div>
          </div>
          <div className=' col-span-8'>
            <Image src={banner} alt='banner' className=' w-full' quality={100} priority={true} placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
  )
}
