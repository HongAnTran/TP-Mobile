import { Address } from "@/types/Address.type";
import { ProductOrder } from "./Product.types";
import { Customer } from "./Customer.type";

interface Order {
  id: number;
  token: string;
  code: string;
  customer_id: number | null;
  items: ProductOrder[];
  total_price: number;
  temp_price: number;
  ship_price: number;
  discount: number;
  note: string | null;
  promotions: [];
  shipping: Shipping | null;
  status: OrderStatus; // Trạng thái của đơn hàng
  payment: Payment | null;
  customer: Customer | null;
  created_at: Date;
  updated_at: Date | null;
  shipping_type: ShippingType;
}
// status: number
// fullname: string
// phone: string
// email?: string | null
// note?: string | null
// created_at?: Date | string
// updated_at?: Date | string | null
// store: StoreCreateNestedOneWithoutOrder_pickupInput
interface OrderCheckoutInput {
  customer_id?: number;
  discount?: number;
  note?: string;
  promotions?: [];
  shipping_type: ShippingType;
  shipping?: {
    create: ShippingCreate;
  };
  pickup?:{
    create: OrderPickupCreate
  }
  payment: {
    create: PaymentCreate;
  };
}
interface OrderPickupCreate{
status: OrderPickupStatus
fullname: string
phone: string
email?: string | null
note?: string | null
store:{
  connect: {
    id: number
  }
}
}

export enum OrderPickupStatus {
  PENDING = 1, 
  PROCESSING = 2, 
  SUCCESS = 3, 
  FAILED = 4,
  CANCELLED = 5, 
}

interface Shipping {
  id: number;
  order_id: number;
  address: string;
  province: string;
  district: string;
  ward: string;
  address_full: string;
  email: string | null;
  country: string;
  ship_date: Date | null;
  tracking_number: string | null;
  phone: string;
  fullname: string;
  shipping_method: string | null;
}
type ShippingCreate = Pick<
  Shipping,
  | "email"
  | "address"
  | "address_full"
  | "country"
  | "district"
  | "province"
  | "ward"
  | "phone"
  | "fullname"
>;

export enum PaymentMethod {
  COD = "cod",
}

interface Payment {
  id: number;
  order_id: number;
  method: PaymentMethod;
  transaction_id: string | null;
  amount: number;
  status: PaymentStatus;
  payment_date: Date | null;
}

type PaymentCreate = Pick<
  Payment,
  "amount" | "method" | "status" | "payment_date"
>;
export enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum ShippingType{
  SHIP=1,
  PICKUP
}

export enum OrderStatus {
  DRAFT = 1, // Đơn hàng chưa được hoàn tất bởi khách hàng
  PENDING = 2, // Chờ xử lí
  PROCESSING = 3, // Đơn hàng đang được xử lý
  FAILED = 4, // Đơn hàng thất bại do lỗi
  CANCELLED = 5, // Đơn hàng đã bị hủy
  SHIPPED = 6, // Đơn hàng đã được gửi đi
  RETURNED = 7, // Đơn hàng bị trả
  SUCCESS = 8, // Đơn hàng đã được giao thành công
}
export type { Order, Payment, Shipping, OrderCheckoutInput };
