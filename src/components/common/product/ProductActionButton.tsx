"use client"

import { AddSquareIcon, PhoneFilledIcon, TruckIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from "@/components/common/Link";
import React from 'react'
import CONFIG from '@/consts/config';
import { convertHotlineToTel } from '@/utils'
import ConsultationDialog from '@/components/feature/consultation/ConsultationDialog';
import { Product } from '@/types/Product.types';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import routes from '@/routes';

export default function ProductActionButton({ onAddtoCart, onBuyNow,product }: { onAddtoCart?: () => void, onBuyNow?: () => void  , product:Product}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
         <Button variant="destructive"   className=' flex-1 flex-col w-full py-1 h-auto'  onClick={onBuyNow}
  
  >
  <p className=' uppercase font-bold flex items-center'>
  <TruckIcon className='   text-secondary  group-hover:animate-bounce mr-2' />
    Mua ngay</p>
   <p className=' text-sm'>( Giao nhanh 2H hoặc nhận tại cửa hàng )</p></Button>

      <div className=' mt-2 grid grid-cols-2 gap-2'>
      <div className=' flex gap-2'>
      <Button variant="outline"  className='  text-xs w-full group uppercase font-bold  ' onClick={() => {
        setIsOpen(true)
       }}>
      <ChatBubbleIcon className='  group-hover:animate-bounce mr-2' />Đăng ký nhận tư vấn</Button> 
       
      </div>
      {/* <Button className=' flex-1 uppercase font-bold' variant="outline" onClick={onAddtoCart}>Thêm vào giỏ hàng</Button> */}
        <Link href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`}>
          <Button variant="outline" className=' text-xs w-full group uppercase font-bold' >
            <PhoneFilledIcon className='text-xs lg:text-sm  group-hover:animate-bounce mr-2' />Gọi đặt mua {" "} <span className=' hidden md:inline ml-1'> {CONFIG.HOTLINE}</span></Button>
        </Link>
      </div>
      <div className=' mt-2 grid grid-cols-2 gap-2'>
      <div className=' flex gap-2'>
      <Button variant="secondary"  className='  text-xs w-full group uppercase font-bold  ' onClick={() => {
        onAddtoCart && onAddtoCart()
       }}>
     Thêm vào giỏ hàng</Button> 
       
      </div>
        <Link href={routes.installmentPolicy}>
          <Button variant="secondary" className=' text-xs w-full group uppercase font-bold' >
            Trả góp 0% </Button>
        </Link>
      </div>
          <ConsultationDialog product={product} isOpen={isOpen} onClose={()=>{
    setIsOpen(false)
          }} />
    </div>
  )
}
