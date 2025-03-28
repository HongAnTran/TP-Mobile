import { ProductOrder } from "./Product.types"

interface Cart {
  id: number
  token: string
  item_count: number
  items:ProductOrder[]
  total_price: number
  note: string | null
  customer_id: number | null
}



export type {Cart}