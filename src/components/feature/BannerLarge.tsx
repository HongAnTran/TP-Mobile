"use client"
import Image from 'next/image'
import React from 'react'
import { CaretRightIcon } from '@radix-ui/react-icons'
import banner from "../../../public/ipad_pro_hero__bh3eq6sqfjw2_large.jpg"
import Link from 'next/link'

import { motion } from "framer-motion"
export default function BannerLarge() {

  return (
    <div className='  bg-black '>
      <div className=' container'>
        <div className=' grid grid-cols-12'>
          <div className=' col-span-4 hidden  lg:block'>
            <div className='  flex-col flex justify-center items-center w-full h-full '>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h2 className=' text-white  text-6xl font-bold'> TP MOBILE</h2>
                  <p className=' text-white text-center  text-xl font-bold'>Bán Ipad có tâm nhứt Sài Gòn</p>
                </div>
                {/* <Link href={"/"} className=' flex items-center  text-blue-700' >Tìm hiểu thêm <CaretRightIcon /> </Link> */}
              </motion.div>
            </div>
          </div>
          <div className=' col-span-12 lg:col-span-8'>
            <Image src={banner} alt='banner' className=' w-full' quality={100} priority={true} placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
  )
}
