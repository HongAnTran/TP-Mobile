import { Address } from "./Address.type";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

interface Customer {
  id: number;
  email: string | null;
  address: Address[];
  phone: string;
  gender: Gender;
  birthday: Date | null;
  image: string;
  name: string;
  provider: string;
  created_at: Date;
  updated_at: Date | null;
}

export type { Customer };
