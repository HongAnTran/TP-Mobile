import { Address } from "./Address.type";
type CustomerGender = "male" | "female" | "other" | "unknown";
interface Customer {
  id: number;
  email: string | null;
  address: Address[];
  phone: string;
  gender: CustomerGender;
  birthday: Date | null;
  image: string;
  name: string;
  provider: string;
  created_at: Date;
  updated_at: Date | null;
}

export type { Customer, CustomerGender };
