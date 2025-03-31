import fetchApi from "@/api/instances/baseInstance";
import { checkIsClient, generateUniqueId, sleep } from "@/utils";
import { Cart } from "@/types/Cart.type";
import LocalStorageService from "@/utils/localStorage";
import { KEYS } from "@/consts/localStorage";

class CartService {
  private url: string = "/cart";
  private cart: Cart = {
    id: 0,
    customer_id: 0,
    item_count: 0,
    items: [],
    note: "",
    total_price: 0,
    token: generateUniqueId(),
  };

  constructor() {}

  async getDetail(id: Cart["id"]) {
    // await sleep(3000)
    if (checkIsClient()) {
      const cart = LocalStorageService.getItem(KEYS.CART, this.cart);
      if (cart.items.some((item: any) => item.product_title)) {
        LocalStorageService.setItem(KEYS.CART, this.cart);
        return this.cart;
      }
      return cart;
    }
    return this.cart;
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const CartServiceApi = new CartService();
export default CartServiceApi;
