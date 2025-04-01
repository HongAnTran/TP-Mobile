import { Cart } from "@/types/Cart.type";
import { Order, OrderCheckoutInput } from "@/types/Order.type";
import fetchApiPublic from "@/api/instances/clientInstance";

class OrderServiceClient {
  private url: string = "/orders";
  constructor() {}
  async createOrderClient(cart: Cart): Promise<Order> {
    const order = {
      items: {
        createMany: {
          data: cart.items
            .filter((item) => item.selected)
            .map((item) => {
              const {
                price,
                price_original,
                line_price,
                line_price_original,
                variant_id,
                product_id,
                quantity,
              } = item;
              return {
                price,
                price_original,
                line_price,
                line_price_original,
                quantity,
                variant_id,
                product_id
              };
            }),
        },
      },
      total_price: cart.total_price,
      temp_price: cart.total_price,
      note: cart.note,
      ship_price: 0,
      discount: 0,
    };

    return fetchApiPublic.post(this.url, order, {
      timeout: 60 * 1000,
    });
  }

  async checkoutClient(
    token: Order["token"],
    order: OrderCheckoutInput
  ): Promise<Order> {
    return fetchApiPublic.post(`${this.url}/checkout/${token}`, order, {
      timeout: 60 * 1000,
    });
  }
}

const OrderServiceClientApi = new OrderServiceClient();
export default OrderServiceClientApi;
