import { TypographyH4 } from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'

export default function ProductBenefits() {
  return (
    <div>
      <div className=' border-b border-red-500 pb-2 mb-2'>
        <TypographyH4 className=' font-semibold  text-sm  text-red-500'>Quyền lợi khi mua hàng tại TP Mobile </TypographyH4>
      </div>

      <ul className=" flex flex-col gap-4">

        <li className="media flex items-center gap-2">
          <div className=" flex-shrink-0">
            <Image width="24" height="24" src="https://theme.hstatic.net/200000458129/1001199679/14/policy_product_image_1.png?v=30" alt="Giao hàng miễn phí trong 24h (chỉ áp dụng khu vực nội thành)" />
          </div>
          <div className="media-body text-xs font-semibold">
            Giao hàng miễn phí trong 24h (chỉ áp dụng khu vực nội thành)
          </div>
        </li>
        <li className="media flex items-center gap-2">
          <div className=" flex-shrink-0">
            <Image width="24" height="24" src="https://theme.hstatic.net/200000458129/1001199679/14/policy_product_image_3.png?v=30" alt="Trả góp lãi suất 0% qua thẻ tín dụng Visa, Master, JCB" />
          </div>
          <div className="media-body text-xs font-semibold">
            Trả góp lãi suất 0% qua thẻ tín dụng Visa, Master, JCB
          </div>
        </li>
        <li className="media flex items-center gap-2">
          <div className=" flex-shrink-0">
            <Image width="24" height="24" src="https://theme.hstatic.net/200000458129/1001199679/14/policy_product_image_4.png?v=30" alt="Đổi trả miễn phí trong 30 ngày" />
          </div>
          <div className="media-body text-xs font-semibold">
            Đổi trả miễn phí trong 30 ngày
          </div>
        </li>
      </ul>
    </div>
  )
}

