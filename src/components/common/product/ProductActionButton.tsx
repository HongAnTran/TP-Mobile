"use client"

import { PhoneFilledIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from "@/components/common/Link";
import React from 'react'
import CONFIG from '@/consts/config';
import { convertHotlineToTel } from '@/utils'
import ConsultationDialog from '@/components/feature/consultation/ConsultationDialog';
import { Product } from '@/types/Product.types';

export default function ProductActionButton({ onAddtoCart, onBuyNow,product }: { onAddtoCart?: () => void, onBuyNow?: () => void  , product:Product}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <div className=' flex gap-2'>
      <Button className=' w-full group uppercase font-bold  '  onClick={() => {
        setIsOpen(true)
       }}>
      <PhoneFilledIcon className='  group-hover:animate-bounce mr-2' />Đăng ký nhận tư vấn</Button>
        {/* <Button className=' flex-1 uppercase font-bold' variant="outline" onClick={onBuyNow}

        >Mua ngay</Button> */}
      </div>
      <div className=' mt-2 grid grid-cols-2 gap-2'>
      <Button className=' flex-1 uppercase font-bold' variant="outline" onClick={onAddtoCart}>Thêm vào giỏ hàng</Button>
        <Link href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`}>
          <Button className=' w-full group uppercase font-bold' >
            <PhoneFilledIcon className='text-xs lg:text-sm  group-hover:animate-bounce mr-2' />Gọi đặt mua {" "} <span className=' hidden md:inline ml-1'> {CONFIG.HOTLINE}</span></Button>
        </Link>
      </div>
          <ConsultationDialog product={product} isOpen={isOpen} onClose={()=>{
    setIsOpen(false)
          }} />
    </div>
  )
}
