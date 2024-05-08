
"use client"
import useCompareProduct from '@/hooks/useCompareProduct'
import routes from '@/routes'
import Link from 'next/link'
import React from 'react'
import { TypographySpan } from '../ui/typography'
import Image from 'next/image'
import compareIMG from "../../../public/compare.png"

export default function CompareProduct() {
  const { productsCompare } = useCompareProduct()
  return (
    <>
      {productsCompare.length ? <Link title='So sánh sản phẩm' href={routes.compareProduct} className='   fixed  bottom-20 left-20 w-[40px] h-[40px] rounded-full shadow-xl bg-black text-white'>
        <div className=' w-full h-full flex items-center justify-center relative'>

          <Image src={compareIMG} alt='compare' width={40} height={40} />
          <TypographySpan className=' flex items-center justify-center  rounded-full w-5 h-5   bg-red-600 absolute top-0 -right-1 text-white'>{productsCompare.length}</TypographySpan>
        </div>
      </Link> : null}
    </>
  )
}
