import fetchApi from "@/api/instances/baseInstance";
import { Product } from "@/types/product";
import productsJson from "@/data/product.json"
import { sleep } from "@/utils";
import { Cart } from "@/types/cart";


class CartService {
  private url: string = "/cart";
  private cart: Cart = {
    id: 0,
    customer_id: 0,
    item_count: 0,
    items: [],
    note: "",
    total_price: 0,
    token: ""
  }

  constructor() { }



  async getDetail(id: Cart["id"]) {
    // await sleep(3000)
    return this.cart
    // return fetchApi.get<Product>(`${this.url}/${id}`, {});
  }
}

const CartServiceApi = new CartService();
export default CartServiceApi;
