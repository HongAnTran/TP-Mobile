import OrderServiceApi from '@/services/orderService'
import React from 'react'
import CheckoutHeader from '../../[token]/_components/CheckoutHeader'
import ProductOrderItem from '@/components/common/ProductOrderItem'
import { StepProps } from '@/components/common/Steps';
import { TypographyH2 } from '@/components/ui/typography';

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
    label: 'Xác nhận',
    link: '#',
    status: "active",
  },
];

export default async function page({ params }: { params: { token: string } }) {
  const token = params.token
  const order = await OrderServiceApi.getDetail(token)
  return (
    <div className=' container'>
    <CheckoutHeader  steps={steps}/>
    <TypographyH2 className=' text-center my-2 '>Thanh toán thành công</TypographyH2>
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
      <div className="mt-10  px-4 py-8 lg:mt-0">
        <p className="text-xl text-center font-medium capitalize">Thông tin đơn hàng</p>
      </div>
    </div>
  </div>
  )
}
