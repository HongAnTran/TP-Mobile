import { Order, OrderCheckoutInput } from "@/types/Order.type";
import fetchApi from "@/api/instances/baseInstance";
import fetchApiAuth from "@/api/instances/authInstance";

class OrderService {
  private url: string = "/orders";
  constructor() {}
  async getDetail(token: Order["token"]) {
    return fetchApi.get<Order>(`${this.url}/token/${token}`);
  }
  async getDetailByCode(code: Order["code"]) {
    return fetchApi.get<Order>(`${this.url}/code/${code}`);
  }
  async checkout(
    token: Order["token"],
    order: OrderCheckoutInput
  ): Promise<Order> {
    return fetchApi.put(`${this.url}/checkout/${token}`, order, {
      timeout: 60 * 1000,
    });
  }

  async createOrder(data: any) {
    return fetchApi.post<Order>(this.url, data, {
      timeout: 60 * 1000,
    });
  }

  
  async createOrderCustomer(data: any) {
    return fetchApiAuth.post<Order>(`${this.url}/customer`, data, {
      timeout: 60 * 1000,
    });
  }

  async checkoutCustomer(
    token: Order["token"],
    order: OrderCheckoutInput
  ): Promise<Order> {
    return fetchApiAuth.put<Order>(`${this.url}/checkout/customer/${token}`, order, {
      timeout: 60 * 1000,
    });
  }
}

const OrderServiceApi = new OrderService();
export default OrderServiceApi;
