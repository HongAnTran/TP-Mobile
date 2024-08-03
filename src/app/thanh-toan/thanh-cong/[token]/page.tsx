import OrderServiceApi from '@/services/orderService'
import React from 'react'
import CheckoutHeader from '../../[token]/_components/CheckoutHeader'
import ProductOrderItem from '@/components/common/product/ProductOrderItem'
import { StepProps } from '@/components/common/Steps';
import { TypographyH2, TypographyP, TypographySpan } from '@/components/ui/typography';
import PriceText from '@/components/common/PriceText';
import { Button } from '@/components/ui/button';
import Link from '@/components/common/Link';

const steps: StepProps[] = [
  {
    label: 'Cửa hàng',
    link: '/home',
    status: 'completed',
  },
  {
    label: 'Giỏ hàng',
    link: '/cart',
    status: 'completed',
  },
  {
    label: 'Thanh toán',
    link: '#',
    status: 'completed',
  },
  {
    label: 'Thành công',
    link: '#',
    status: "completed",
  },
];

export default async function page({ params }: { params: { token: string } }) {
  const token = params.token
  const order = await OrderServiceApi.getDetail(token)
  return (
    <div className=' container'>
      <CheckoutHeader steps={steps} />
      <TypographyH2 className=' text-center my-4 '>Đặt hàng thành công</TypographyH2>
      <TypographyP className=' text-center my-4 '>Cảm ơn bạn đã đặt hàng tại TP Mobile</TypographyP>
      <div className="grid  lg:grid-cols-2 ">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium capitalize">Tóm tắt đơn hàng</p>
          <p className="text-gray-400">Kiểm tra đơn hàng của bạn.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {order.items.map(item => {
              return (
                <ProductOrderItem key={item.id} productOrder={item} />
              )
            })}
          </div>

        </div>
        <div className="mt-10  px-4 py-8  border">
          <p className="text-xl text-center font-medium capitalize">Thông tin đơn hàng</p>
          <ul className=' flex flex-col gap-4  my-4  '>
            <li className=' flex items-center justify-between'>
              <TypographySpan >Địa chỉ giao hàng</TypographySpan>
              <TypographySpan className=' font-bold'  >{order.shipping?.address_full}</TypographySpan>
            </li>
            <li className=' flex items-center justify-between'>
              <TypographySpan >Số điện thoại</TypographySpan>
              <TypographySpan className=' font-bold' >{order.shipping?.phone}</TypographySpan>
            </li>
            <li className=' flex items-center justify-between'>
              <TypographySpan className=' text-gray-500'>Tạm tính</TypographySpan>
              <PriceText className=' text-sm' price={order.total_price} />
            </li>
            <li className=' flex items-center justify-between'>
              <TypographySpan className=' text-gray-500'>Khuyến mãi</TypographySpan>
              <PriceText className=' text-sm' price={0} notAutoChange />
            </li>
            <li className=' flex items-center justify-between'>
              <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
              <PriceText className=' text-sm' price={0} notAutoChange />
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
          <div className=' mt-4 flex  gap-4 justify-end'>
            <Link target="_blank" href="https://www.google.com/maps/place/TP+MOBILE+STORE/@10.7827711,106.618124,17z/data=!4m18!1m9!3m8!1s0x31752d5f330ea7c7:0x1e87e39b41c64ce2!2sTP+MOBILE+STORE!8m2!3d10.7827711!4d106.6206989!9m1!1b1!16s%2Fg%2F11t59jrvk9!3m7!1s0x31752d5f330ea7c7:0x1e87e39b41c64ce2!8m2!3d10.7827711!4d106.6206989!9m1!1b1!16s%2Fg%2F11t59jrvk9?authuser=1&entry=ttu">
              <Button >Viết đánh giá</Button>
            </Link>
            <Link href="/" >
              <Button >Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
