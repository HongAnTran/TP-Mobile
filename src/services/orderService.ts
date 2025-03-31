import { Order, OrderCheckoutInput } from "@/types/Order.type";
import fetchApi from "@/api/instances/baseInstance";

class OrderService {
  private url: string = "/orders";
  constructor() {}
  async getDetail(token: Order["token"]) {
    return fetchApi.get<Order>(`${this.url}/token/${token}`);
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
    return fetchApi.post(this.url, data, {
      timeout: 60 * 1000,
    });
  }
}

const OrderServiceApi = new OrderService();
export default OrderServiceApi;
