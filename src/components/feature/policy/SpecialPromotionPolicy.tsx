import BoxViewTextList, { BoxViewTextItem } from '@/components/common/BoxViewTextList';
import Image from 'next/image';
import React, { ReactNode } from 'react'

export default function SpecialPromotionPolicy() {
  const benefits: BoxViewTextItem[] = [
    { id: 1, description: <span>Mua Apple pencil 1 like new  1.490.000 giảm còn <b>1.190.000</b></span> },
    { id: 2, description: <span>Mua Apple Pencil 2 like new 2.090.000 giảm còn <b>1.500.000</b></span> },
    { id: 4, description: <span>Mua Apple Pencil 2 openbox 2.290.000 giảm còn <b>1.790.000</b></span> },
    { id: 5, description: <span>Mua Apple Pencil 2 newseal 2.490.000 giảm còn <b>2.000.000</b></span> },
    { id: 6, description: <span>Mua Apple Pencil Pro newbody 2.900.000 giảm còn <b>2.400.000</b></span> },
    { id: 7, description: <span>Mua Apple Pencil Pro openbox 3.050.000 giảm còn <b>2.550.000</b> </span> },
    { id: 8, description: <span>Mua Apple Pencil Pro newseal 3.290.000 giảm còn <b>2.790.000</b></span> },
  ];
  return (
    <BoxViewTextList
    classNameHeader='bg-[#eeeeee]'
    classNameIcon='animate-wiggle  animate-infinite' list={benefits}
      title='Mua combo Apple pencil kèm iPad với giá cực hời'
      icon={
                  <Image className=' w-5 h-5' alt="icon" src="/icons/gift.png" width={20} height={20} />
      } iconItem={"✨"} />
  )
}