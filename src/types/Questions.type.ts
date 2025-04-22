import { Customer } from "./Customer.type";
enum QuestionStatus {
  PENDING,
  APPROVED,
  REJECTED,
}
interface QuestionCreate {
  content: string;
  product_id: number;
  customer_id?: number;
  email: string;
  phone: string;
  full_name: string;
}
interface QuestionAnswer {
  content: string;
  created_at: string;
}
interface QuestionDetail {
  id: number;
  content: string;
  product_id: number;
  customer_id: number | null;
  email: string;
  phone: string;
  customer: Customer | null;
  answers: QuestionAnswer[];
  status: QuestionStatus;
  like_count: number;
  full_name?: string;
  created_at: Date;
  updated_at: Date;
}
interface QuestionParams {
  product_id?: number;
  customer_id?: number;
}

export type { QuestionCreate, QuestionDetail, QuestionParams };
export { QuestionStatus };
