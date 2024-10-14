import { Location } from "./location";


// type AddressType = "home" | "office"

interface AddressInffo {
  id : number
  name: string
  email: string | null; // Địa chỉ email của người nhận hàng (có thể là null)
  detail_address: string; // 
  phone: string; // Số điện thoại liên hệ
  province: Pick<Location, "code" | "name">
  district: Pick<Location, "code" | "name">
  ward: Pick<Location, "code" | "name">
}
interface Address extends AddressInffo {
  id: number,
  // type: AddressType
  isDefault: boolean
  created_at : string
  updated_at : string | null
  customer_id : number

}
export type { Address, AddressInffo }