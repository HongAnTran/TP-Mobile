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
  birthday: Date | null;
  avatar: string | null;
  first_name: string;
  last_name: string;
  full_name: string;
}

export type { Customer };
