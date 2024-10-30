import BoxViewTextList, { BoxViewTextItem } from '@/components/common/BoxViewTextList';
import React, { ReactNode } from 'react'

export default function SpecialPromotionPolicy() {
  const benefits: BoxViewTextItem[] = [
    { id: 1, description: <span>Apple Pencil 2 giá chỉ 1.500.000 khi mua kèm với iPad</span> },
    { id: 2, description: <span>Apple Pencil 1 giá chỉ 900.000 khi mua kèm với iPad</span> },
    { id: 3, description: <span>Giảm ngay 300k khi mua với Apple Pencil</span> },
    { id: 4, description: <span>Giảm ngay 300k khi mua với AirPods</span> },
    { id: 5, description: <span>Giảm ngay 300k khi mua với Magic/Folio</span> },
    { id: 6, description: <span>Giảm ngay 300k cho khách hàng thân thiết</span> },
  ];
  return (
    <BoxViewTextList  classNameIcon='animate-wiggle  animate-infinite' list={benefits} title='Ưu đãi đặc biệt' icon={"🎁"} />
  )
}
