import React, { ReactNode } from 'react'

const promotionPolicy:  ReactNode[] = [
  <span>Tặng gói dán màn hình <b>miễn phí 1 năm</b></span>,
  <span>Tặng sạc cap bảo hành <b>miễn phí 1 năm</b> </span>,
  <span>Khách hàng thân thiết được hưởng đặc quyền đặc biệc lên tới <b>1.000.000đ</b></span>,
  <span>Hỗ trợ trả góp <b>0% </b>qua thẻ tín dụng</span>

]

export default function PromotionPolicy() {
  return (
    <div className="max-w-sm   rounded-xl overflow-hidden shadow-lg">
      <div className="flex items-center   p-3   bg-primary">
        <span className="text-2xl mr-2 animate-wiggle" >🎁</span>
        <h2 className=" text-secondary font-semibold text-lg">Chính sách khuyến mãi</h2>
      </div>
      <ul className="space-y-3 text-gray-700 p-4">
        {promotionPolicy.map((item, index) => {
          return (<li key={JSON.stringify(item)} className="flex items-start">
            <span className="bg-red-500 flex-shrink-0 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">{index + 1}</span>
            <div>
              {item}
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
}
