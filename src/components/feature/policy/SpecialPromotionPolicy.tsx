import BoxViewTextList from '@/components/common/BoxViewTextList';
import React, { ReactNode } from 'react'
const benefits: ReactNode[] = [
  <span>Apple Pencil 2 giá chỉ 1.500.000 khi mua kèm với iPad</span>,
  <span>Apple Pencil 1 giá chỉ 900.000 khi mua kèm với iPad</span>,
  <span>Giảm ngay 300k khi mua với Apple Pencil</span>,
  <span>Giảm ngay 300k khi mua với AirPods</span>,
  <span>Giảm ngay 300k khi mua với Magic/Folio</span>,
  <span>Giảm ngay 300k cho khách hàng thân thiết</span>

];
export default function SpecialPromotionPolicy() {
  return (
    <BoxViewTextList  classNameIcon='animate-wiggle  animate-infinite' list={benefits} title='Ưu đãi đặc biệt' icon={"🎁"} />
  )
}
