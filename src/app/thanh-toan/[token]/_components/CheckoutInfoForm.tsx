"use client"

import InputController from '@/components/common/inputs/InputController'
import PriceText from '@/components/common/PriceText'
import { Button } from '@/components/ui/button'
import { TypographySpan } from '@/components/ui/typography'
import { Order } from '@/types/order'
import React from 'react'
import { useForm } from 'react-hook-form'
export default function CheckoutInfoForm({ order }: { order: Order }) {

  const { control, handleSubmit } = useForm({
    defaultValues: order.shipping
  })

  function onSubmit(shipping: Order["shipping"]) {
    console.log(shipping)

  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' mt-4 flex gap-2'>
        <InputController label='Họ và tên' name="full_name" control={control} />
        <InputController label='Số điện thoại' name="phone" control={control} />
      </div>
      <div className=' mt-4 flex gap-2'>
        <InputController label='Email' name="email" control={control} />
        <InputController label='Tên đường' name="street" control={control} />
      </div>
      <ul className=' flex flex-col gap-4  my-4  '>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Tạm tính</TypographySpan>
          <PriceText className=' text-sm' price={order.total_price} />
        </li>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Khuyến mãi</TypographySpan>
          <PriceText className=' text-sm' price={0} />
        </li>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
          <PriceText className=' text-sm' price={0} />
        </li>
        <hr />

        <li className=' flex items-center justify-between'>
          <TypographySpan className=' font-bold'>Tổng tiền:</TypographySpan>
          <div className=' flex gap-1 items-center'>
            <PriceText className=' text-sm text-red-500 font-bold' price={order.total_price} />
            <TypographySpan > ({order.items.length}) </TypographySpan>
          </div>
        </li>
      </ul>

      <Button type="submit" className=' w-full'>Thanh toán</Button>
    </form>
  )
}
