import { Location } from "./location";

interface AddressInffo {
  id: number;
  name: string;
  email: string | null; // Địa chỉ email của người nhận hàng (có thể là null)
  detail_address: string; //
  phone: string; // Số điện thoại liên hệ
  province: Pick<Location, "code" | "name">;
  district: Pick<Location, "code" | "name">;
  ward: Pick<Location, "code" | "name">;
}

export enum AddressType {
  HOME = "HOME",
  WORK = "WORK",
  OTHER = "OTHER",
}
interface Address extends AddressInffo {
  id: number;
  isDefault: boolean;
  created_at: string;
  email : string | null; 
  type : AddressType 
  updated_at: string | null;
  customer_id: number;
}
type AddressCreate ={
  name: string;
  phone: string;
  detail_address: string;
  email?: string | null; 
  type: AddressType; 
  province: {
    connect : { code: string };
  };
  district: {
    connect: { code: string };
  }
  ward: {
    connect: { code: string };
  };
  isDefault?: boolean;
}

type AddressUpdate  = Partial<AddressCreate>


export type { Address, AddressInffo  , AddressCreate, AddressUpdate };
