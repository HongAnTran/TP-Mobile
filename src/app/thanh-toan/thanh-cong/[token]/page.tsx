import OrderServiceApi from '@/services/orderService'
import React from 'react'
import CheckoutHeader from '../../[token]/_components/CheckoutHeader'
import ProductOrderItem from '@/components/common/product/ProductOrderItem'
import { StepProps } from '@/components/common/Steps';
import { TypographyH2, TypographyP, TypographySpan } from '@/components/ui/typography';
import PriceText from '@/components/common/PriceText';
import { Button } from '@/components/ui/button';
import Link from '@/components/common/Link';
import { ShippingType } from '@/types/Order.type';

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
  const { shipping, pickup } = order
  return (
    <div className=' container'>
      <CheckoutHeader steps={steps} />
      <TypographyH2 className=' text-center my-4 '>Đặt hàng thành công</TypographyH2>
      <TypographyP className=' text-center my-4 '>
        Cảm ơn bạn đã mua sắm tại TP Mobile Store. Mã đơn hàng <b>{order.code}</b>.

      </TypographyP>
      <TypographyP className=' text-center my-4 '>
        Chúng tôi sẽ liên hệ với bạn trong vòng 24H nếu không nhận được sự hỗ trợ trong vòng 24H vui lòng liên hệ 0568.44.77.99.
      </TypographyP>
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
            {order.shipping_type === ShippingType.SHIP && shipping ? <>
              <li className=' flex  justify-between'>
              <TypographySpan >Khách:</TypographySpan>
              <TypographySpan className=' font-bold' >{shipping.fullname}</TypographySpan>
            </li>
            <li className=' flex justify-between gap-4'>
              <TypographySpan className=' flex-shrink-0'>Địa chỉ giao hàng:</TypographySpan>
              <TypographySpan  >{shipping.address_full}</TypographySpan>
            </li>
            <li className=' flex  justify-between'>
              <TypographySpan >Số điện thoại:</TypographySpan>
              <TypographySpan className=' font-bold' >{shipping.phone}</TypographySpan>
            </li>
        
            </> : pickup && <>
            <li className=' flex  justify-between'>
              <TypographySpan >Khách:</TypographySpan>
              <TypographySpan className=' font-bold' >{pickup.fullname}</TypographySpan>
            </li>
            <li className=' flex  justify-between'>
              <TypographySpan >Số điện thoại:</TypographySpan>
              <TypographySpan className=' font-bold' >{pickup.phone}</TypographySpan>
            </li>
            <li className=' flex justify-between gap-4'>
              <TypographySpan className=' flex-shrink-0'>Nhận tại cửa hàng:</TypographySpan>
              <TypographySpan  >{pickup.store.name}</TypographySpan>
            </li>
            <li className=' flex justify-between gap-4'>
              <TypographySpan className=' flex-shrink-0'>Địa chỉ cửa hàng:</TypographySpan>
              <TypographySpan  >{pickup.store.detail_address}</TypographySpan>
            </li>
            <li className=' flex justify-between gap-4'>
              <TypographySpan className=' flex-shrink-0'>SDT cửa hàng:</TypographySpan>
              <TypographySpan  >{pickup.store.phone}</TypographySpan>
            </li>
            </>}
            <li className=' flex  justify-between'>
              <TypographySpan className=' text-gray-500'>Tạm tính:</TypographySpan>
              <PriceText className=' text-sm' price={order.total_price} />
            </li>
            {/* <li className=' flex items-center justify-between'>
              <TypographySpan className=' text-gray-500'>Khuyến mãi:</TypographySpan>
              <PriceText className=' text-sm' price={0} notAutoChange />
            </li> */}
            {/* <li className=' flex items-center justify-between'>
              <TypographySpan className=' text-gray-500'>Vận chuyển:</TypographySpan>
              <PriceText className=' text-sm' price={0} notAutoChange />
            </li> */}
            
            <hr />

            <li className=' flex items-center justify-between'>
              <TypographySpan className=' font-bold'>Tổng tiền:</TypographySpan>
              <div className=' flex gap-1 items-center'>
                <PriceText className=' text-sm text-red-500 font-bold' price={order.total_price} />
                {/* <TypographySpan > ({order.items.length}) </TypographySpan> */}
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
