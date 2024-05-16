
import CheckoutInfoForm from './_components/CheckoutInfoForm'


import CheckoutHeader from './_components/CheckoutHeader'
import { Order } from '@/types/order'
import ProductOrderItem from '@/components/common/ProductOrderItem'
export default function Checkout({ order }: { order: Order }) {
  return (
    <>
      <CheckoutHeader />
      <div className="grid  lg:grid-cols-2 ">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium capitalize">Tóm tắt đơn hàng</p>
          <p className="text-gray-400">Kiểm tra đơn hàng của bạn. và chọn phương thức vận chuyển.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {order.items.map(item => {
              return (
                <ProductOrderItem key={item.id} productOrder={item} />
              )
            })}
          </div>

        </div>
        <div className="mt-10 bg-gray-50 px-4 py-8 lg:mt-0">
          <p className="text-xl font-medium capitalize">Thông tin thanh toán</p>
          <p className="text-gray-400">Hoàn tất đơn đặt hàng của bạn.</p>
          <CheckoutInfoForm order={order} />
        </div>
      </div>
    </>
  )
}

