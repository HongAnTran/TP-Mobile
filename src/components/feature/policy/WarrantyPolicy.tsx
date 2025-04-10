import BoxViewTextList, { BoxViewTextItem } from '@/components/common/BoxViewTextList';
import Image from 'next/image';
import React, { ReactNode } from 'react'

export default function WarrantyPolicy() {
  const benefits: BoxViewTextItem[] = [
    { id: 1, description: <span>Tặng gói bảo hành <b>12 tháng</b></span> },
    { id: 2, description: <span>Bao đổi trả trong vòng <b>1 tháng</b></span> },
    { id: 3, description: <span>Bảo hành phụ kiện sạc cáp, cường lực miễn phí <b>1 năm</b></span> },
    { id: 4, description: <span>Vệ sinh sản phẩm <b>trọn đời</b></span> },
  ];
  return (
    <BoxViewTextList
    classNameHeader='bg-[#eeeeee]'
    list={benefits} title='Chính sách bảo hành' icon={
                        <Image className=' w-5 h-5' alt="icon" src="/icons/shield.png" width={20} height={20} />
      
    } iconItem={<Image className=' w-5 h-5' alt="icon" src="/icons/shield.png" width={20} height={20} />} />
  )
}
