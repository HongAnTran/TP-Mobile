import { PhoneFilledIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ProductActionButton() {
  return (
    <div>
      {/* <div className=' flex gap-2'>
        <Button className=' flex-1 uppercase font-bold' variant="outline">Thêm vào giỏ hàng</Button>
        <Button className=' flex-1 uppercase font-bold' variant="outline">Mua ngay</Button>

      </div> */}
      <div className=' mt-2'>
        <Link href={"tel:0347907042"}>
          <Button className=' w-full group uppercase font-bold' ><PhoneFilledIcon className='  group-hover:animate-bounce mr-2' />Gọi đặt mua 0347.907.042</Button>
        </Link>
      </div>

    </div>
  )
}
