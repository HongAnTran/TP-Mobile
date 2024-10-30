import BoxViewTextList from '@/components/common/BoxViewTextList';
import React, { ReactNode } from 'react'
const benefits : ReactNode[] = [
  <span>Tặng gói bảo hành <b>12 tháng</b></span>,
  <span>Bao đổi trả trong vòng <b>1 tháng</b></span>,
  <span>Bảo hành phụ kiện sạc cáp, cường lực miễn phí <b>1 năm</b></span>,
  <span>Vệ sinh sản phẩm <b>trọn đời</b></span>
];
export default function WarrantyPolicy() {
  return (
  <BoxViewTextList list={benefits} title='Chính sách bảo hành' icon={"🛡️"} />
  )
}
