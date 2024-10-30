import BoxViewTextList, { BoxViewTextItem } from '@/components/common/BoxViewTextList';
import React, { ReactNode } from 'react'

export default function WarrantyPolicy() {
  const benefits: BoxViewTextItem[] = [
    { id: 1, description: <span>Tặng gói bảo hành <b>12 tháng</b></span> },
    { id: 2, description: <span>Bao đổi trả trong vòng <b>1 tháng</b></span> },
    { id: 3, description: <span>Bảo hành phụ kiện sạc cáp, cường lực miễn phí <b>1 năm</b></span> },
    { id: 4, description: <span>Vệ sinh sản phẩm <b>trọn đời</b></span> },
  ];
  return (
  <BoxViewTextList list={benefits} title='Chính sách bảo hành' icon={"🛡️"} />
  )
}
