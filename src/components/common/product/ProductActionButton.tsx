"use client"

import { PhoneFilledIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from "@/components/common/Link";
import React from 'react'
import CONFIG from '@/consts/config';
import { convertHotlineToTel } from '@/utils'

export default function ProductActionButton({ onAddtoCart, onBuyNow }: { onAddtoCart?: () => void, onBuyNow?: () => void }) {


  return (
    <div>
      <div className=' flex gap-2'>
        <Button className=' flex-1 uppercase font-bold' variant="outline" onClick={onAddtoCart}>Thêm vào giỏ hàng</Button>
        <Button className=' flex-1 uppercase font-bold' variant="outline" onClick={onBuyNow}>Mua ngay</Button>
      </div>
      <div className=' mt-2'>
        <Link href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`}>
          <Button className=' w-full group uppercase font-bold' ><PhoneFilledIcon className='  group-hover:animate-bounce mr-2' />Gọi đặt mua {CONFIG.HOTLINE}</Button>
        </Link>
      </div>

    </div>
  )
}
