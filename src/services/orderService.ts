import fetchApi from "@/api/instances/baseInstance";
import { checkIsClient, generateUniqueId, sleep } from "@/utils";
import { Cart } from "@/types/cart";
import { Order, OrderStatus } from "@/types/order";
import LocalStorageService from "@/utils/localStorage";
import { KEYS } from "@/consts/localStorage";


class OrderService {
  private url: string = "/order";
  private order: Order = {
    id: 1,
    token: generateUniqueId(),
    code: generateUniqueId(),
    customer_id: 0,
    items: [],
    total_price: 0,
    temp_price: 0,
    ship_price: 0,
    discount: 0,
    note: "",
    promotions: [],
    shipping: {
      street: "",
      email: "", // Địa chỉ email của người nhận hàng (có thể là null)
      phone: "", // Số điện thoại liên hệ
      province: {
        code: 0, // Mã code của thành phố
        name: "", // Tên của thành phố
      },
      district: {
        code: 0, // Mã code của thành phố
        name: "", // Tên của thành phố
      },
      ward: {
        code: 0, // Mã code của thành phố
        name: "", // Tên của thành phố
      },
      full_name: "",
      isDefault: true,
      type: "home",

    },
    status: OrderStatus.PROCESSING,
    payment: {
      method: "",
      total: 0,
      debt: 0,
      paid: 0
    }
  }

  constructor() { }



  async getDetail(token: Order["token"]) {
    // await sleep(3000)

    return this.order
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }


  async createOrder(cart: Cart): Promise<Order> {
    const order = {
      ...this.order,
      items: cart.items.filter(item => item.selected),
      total_price: cart.total_price,
      temp_price: cart.total_price,
    }
    // LocalStorageService.setItem(order.token, order)
    return order
  }
}

const OrderServiceApi = new OrderService();
export default OrderServiceApi;
