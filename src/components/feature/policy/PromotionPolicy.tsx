import Image from 'next/image';
import React, { ReactNode } from 'react'


 interface BoxViewTextItem {
  description: ReactNode, id: number
}
export default function PromotionPolicy() {
  const promotionPolicy: BoxViewTextItem[] = [
    { id: 1, description: <span>Tặng gói dán màn hình <b>miễn phí 1 năm</b></span> },
    { id: 2, description: <span>Tặng sạc cáp bảo hành <b>miễn phí 1 năm</b></span> },
    { id: 3, description: <span>Khách hàng thân thiết được hưởng đặc quyền đặc biệt lên tới <b>1.000.000đ</b></span> },
    { id: 4, description: <span>Hỗ trợ trả góp <b>0% </b> qua thẻ tín dụng</span> },
  ];
  return (
    <div className="max-w-sm   rounded-xl overflow-hidden shadow-lg">
      <div className="flex items-center   p-3   bg-primary">
        <span className="text-xl mr-2 animate-wiggle" >
          <Image className=' w-5 h-5' alt="icon" src="/icons/gift.png" width={20} height={20} />
        </span>
        <h2 className=" text-secondary font-semibold text-lg">Chính sách khuyến mãi</h2>
      </div>
      <ul className="space-y-3 text-gray-700 p-4">
        {promotionPolicy.map((item, index) => {
          return (<li key={item.id} className="flex items-start">
            <span className="bg-red-500 flex-shrink-0 text-white rounded-full h-5 w-5 flex items-center justify-center  text-xs font-bold mr-3">{index + 1}</span>
            <div className=' text-xs'>
              {item.description}
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
}
