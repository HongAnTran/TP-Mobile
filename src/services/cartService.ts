import fetchApiAuth from "@/api/instances/authInstance";

class CartService {
  private url: string = "/customers/carts";
  constructor() {}

  async getMyCart() {
    return fetchApiAuth.get(`${this.url}`);
  }

  async saveCart(cart: any) {
    return fetchApiAuth.put(`${this.url}`, cart);
  }
}

const CartServiceApi = new CartService();
export default CartServiceApi;
