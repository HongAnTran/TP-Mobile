import { generateUniqueId } from "@/utils";
import { Cart } from "@/types/cart";
import { Order, OrderCheckoutInput } from "@/types/order";
import fetchApi from "@/api/instances/baseInstance";
import fetchApiPublic from "@/api/instances/routerhandlersInstance";


class OrderService {
  private url: string = "/orders";
  constructor() { }
  async getDetail(token: Order["token"]) {
    return fetchApi.get<Order>(`${this.url}/token/${token}`);
  }
  async createOrder(body: any): Promise<Order> {
    return fetchApi.post(this.url, body)
  }

  async createOrderClient(cart: Cart): Promise<Order> {
    const order = {
      items: {
        create: cart.items.filter(item => item.selected).map((item) => {
          const { id, ...rest } = item;

          return rest
        })
      },
      total_price: cart.total_price,
      temp_price: cart.total_price,
      note: cart.note,
      ship_price: 0,
      discount: 0
    }

    return fetchApiPublic.post(this.url, order)
  }


  async checkoutClient(id: Order["id"], order: OrderCheckoutInput): Promise<Order> {
    return fetchApiPublic.post(`${this.url}/checkout/${id}`, order)
  }
  async checkout(id: Order["id"], order: OrderCheckoutInput): Promise<Order> {
    return fetchApi.put(`${this.url}/checkout/${id}`, order)
  }
}

const OrderServiceApi = new OrderService();
export default OrderServiceApi;
