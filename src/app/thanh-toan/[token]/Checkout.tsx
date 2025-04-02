
import CheckoutInfoForm from './_components/CheckoutInfoForm'


import CheckoutHeader from './_components/CheckoutHeader'
import { Order } from '@/types/Order.type'
import ProductOrderItem from '@/components/common/product/ProductOrderItem'
import { StepProps } from '@/components/common/Steps';

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
    status: "active",
  },
  {
    label: 'Thành công',
    link: '#',
    status: "pending",
  },
];
export default function Checkout({ order }: { order: Order }) {
  return (
    <>
      <CheckoutHeader steps={steps} />
      <div className="grid  lg:grid-cols-2  relative">
        <div className="md:px-4 pt-8">
          <p className="text-xl font-medium capitalize text-center lg:text-start">Tóm tắt đơn hàng</p>
          <p className="text-gray-400 text-center lg:text-start">Kiểm tra đơn hàng của bạn. và chọn phương thức vận chuyển.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6   sticky top-10">
            {order.items.map(item => {
              return (
                <ProductOrderItem key={item.id} productOrder={item} />
              )
            })}
          </div>

        </div>
        <div className="mt-10 bg-gray-50 px-4 py-8 lg:mt-0">
          <p className="text-xl font-medium capitalize text-center">Thông tin thanh toán</p>
          <CheckoutInfoForm order={order} />
        </div>
      </div>
    </>
  )
}

