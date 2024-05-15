
import CheckoutInfoForm from './_components/CheckoutInfoForm'
import CheckoutItem from './_components/CheckoutItem'
import CheckoutHeader from './_components/CheckoutHeader'
import { Order } from '@/types/order'
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
                <CheckoutItem key={item.id} productOrder={item} />
              )
            })}
          </div>
          <p className="mt-8 text-lg font-medium">Phương thức vận chuyển</p>
          <div className="mt-5 grid gap-6">
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked  readOnly/>
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">

                <div className="">
                  <span className="mt-2 font-semibold">COD</span>
                  <p className="text-slate-500 text-sm leading-6">2-4h (nội thành phố Hồ Chí Minh)</p>
                </div>
              </label>
            </div>

          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium capitalize">Thông tin thanh toán</p>
          <p className="text-gray-400">Hoàn tất đơn đặt hàng của bạn.</p>
          <CheckoutInfoForm  order={order}/>
        </div>
      </div>
    </>
  )
}

