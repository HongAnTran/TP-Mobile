import { Address } from "./Address.type";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}



interface Customer {
  id: number;
  email: string;
  address: Address[];
  phone: string | null;
  gender: Gender;
  birthday: string | null;
  avatar: string | null;
  first_name: string;
  last_name: string;
  full_name: string;
  created_at: string;
  orders:{
    total: number,
    pending: number,
    success: number,
    draft: number,
  },
}

export type { Customer };
