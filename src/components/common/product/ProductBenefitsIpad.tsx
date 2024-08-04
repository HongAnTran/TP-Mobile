import { TypographyH4 } from '@/components/ui/typography'
import React from 'react'

export default function ProductBenefitsIpad() {
  return (
    <div className='  mb-2 mt-6'>
      <div className=' border rounded-t border-red-500 p-2'>
        <TypographyH4 className=' font-semibold  text-sm   text-center  text-red-500'>  📱🎁 Ưu Đãi iPad Độc Quyền! 🎉</TypographyH4>
      </div>
      <ul className=' flex flex-col gap-2  border rounded-b p-2 border-red-500'>



        <li className="media flex items-center gap-2">

          <div className="media-body text-xs font-semibold">
            🎁 Full Phụ Kiện Cao Cấp: Cốc sạc, cáp, que chọt sim - đầy đủ và miễn phí!
          </div>
        </li>
        <li className="media flex items-center gap-2">

          <div className="media-body text-xs font-semibold">
            🧼 Vệ Sinh Sản Phẩm Trọn Đời:
          </div>
        </li>
        <li className="media flex items-center gap-2">

          <div className="media-body text-xs font-semibold">
            💪 Dán Cường Lực 1 Năm Miễn Phí
          </div>
        </li>
      </ul>
    </div>


  )
}
