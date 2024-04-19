import { Address } from "@/types/address"
import { ProductOrder } from "./product"

interface Order {
  id: number
  token: string
  code : string
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
    debt : number
    paid : number
  }
}




enum OrderStatus {
  PENDING = "PENDING", // Đơn hàng đang chờ xử lý
  PROCESSING = "PROCESSING", // Đơn hàng đang được xử lý
  SHIPPED = "SHIPPED", // Đơn hàng đã được gửi đi
  DELIVERED = "DELIVERED", // Đơn hàng đã được giao thành công
  CANCELLED = "CANCELLED", // Đơn hàng đã bị hủy
  FAILED = "FAILED", // Đơn hàng không thành công
}
export { OrderStatus }
export type { Order }
