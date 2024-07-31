import { Address } from "@/types/address"
import { ProductOrder } from "./Product.types"
import { Customer } from "./customer"




interface Order {
  id: number
  token: string
  code: string
  customer_id: number | null
  items: ProductOrder[]
  total_price: number
  temp_price: number
  ship_price: number
  discount: number
  note: string | null
  promotions: []
  shipping: Shipping | null
  status: OrderStatus; // Trạng thái của đơn hàng
  payment: Payment | null,
  customer: Customer | null

}

interface OrderCheckoutInput {
  customer_id?: number
  discount?: number
  note?: string
  promotions?: []
  shipping: {
    create: ShippingCreate

  },
  payment: {
    create: PaymentCreate
  }
}

interface Shipping {
  id: number
  order_id: number
  address: string
  province: string
  district: string
  ward: string
  address_full: string
  country: string
  ship_date: Date | null
  tracking_number: string | null
  phone: string
  fullname : string
}
type ShippingCreate = Pick<Shipping, "address" | "address_full" | "country" | "district" | "province" | "ward" | "phone" | "fullname">

interface Payment {
  id: number
  order_id: number
  method: string
  transaction_id: string | null
  amount: number
  status: PaymentStatus
  payment_date: Date | null
}

type PaymentCreate = Pick<Payment, "amount" | "method" | "status" | "payment_date">
enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}


enum OrderStatus {
  PENDING = 3, // Đơn hàng đang chờ xử lý
  PROCESSING = 5, // Đơn hàng đang được xử lý
  SHIPPED = 7, // Đơn hàng đã được gửi đi
  DELIVERED = 9, // Đơn hàng đã được giao thành công
  CANCELLED = 10, // Đơn hàng đã bị hủy
  FAILED = 12, // Đơn hàng không thành công
}
export { OrderStatus, PaymentStatus }
export type { Order, Payment, Shipping, OrderCheckoutInput }
