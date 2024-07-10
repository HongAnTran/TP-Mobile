import { Address } from "@/types/address"
import { ProductOrder } from "./product"
import { number } from "yup"




interface Order {
  id: number
  token: string
  code: string
  customer_id: number
  items: ProductOrder[]
  total_price: number
  temp_price: number
  ship_price: number
  discount: number
  note: string | null
  promotions: []
  shipping: Address
  status: OrderStatus; // Trạng thái của đơn hàng
  payment: {
    method: string,
    total: number
    debt: number
    paid: number
  }
}

interface Shipping {
  id: number
  order_id: number
  address: string
  city: string
  state: string
  postal_code: string
  country: string
  ship_date: Date
  tracking_number?: string
}

interface Payment {
  id: number
  order_id: number
  method: string
  transaction_id: string
  amount: number
  status: PaymentStatus
  payment_date: Date
}
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
export type { Order, Payment, Shipping }
