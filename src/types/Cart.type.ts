import { ProductOrder } from "./Product.types"

interface Cart {
  token: string
  item_count: number
  items:ProductOrder[]
  total_price: number
  note: string | null
  customer_id: number | null
}
type CartItemCreate = Pick<ProductOrder, "line_price" | "price" | "price_original" | "line_price_original" | "quantity"> & {
  product: {
    connect: {
      id: number
    }
  }
  variant: {
    connect: {
      id: number
    }
  }
}
type CartItemCreateUpdate =  {
  where :{
    id: number
  },
  data: Omit<CartItemCreate, "product" | "variant">
}

interface CartSave {
  token: string
  item_count: number
  items?:{
    create?: CartItemCreate[]
    update?: CartItemCreateUpdate[]
  }
  total_price: number
  note: string | null
  customer:{
    connect?: {
      id: number
    }
  }
}



export type {Cart , CartSave}