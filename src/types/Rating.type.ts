import { Customer } from "./Customer.type";

interface Rating {
  id: number;
  rate: number;
  content: string;
  images: string[];
  customer_id: number;
  product_id : number
  customer : Pick<Customer ,"full_name" |"avatar"> | null;
  like_count: number;
  created_at: string;
  tags:{
    id: number;
    title: string;
    code: string;
  }[]
  customer_seed:{
    name : string;
  } | null;
}
export type { Rating }