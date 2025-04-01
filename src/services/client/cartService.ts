import fetchApiClient from "@/api/instances/clientInstance";
import { Cart, CartSave } from "@/types/Cart.type";
import { generateUniqueId } from "@/utils";

class CartService {
  private url: string = "/carts";
  private cart: Cart = {
    item_count: 0,
    items: [],
    note: "",
    total_price: 0,
    token: generateUniqueId(),
    customer_id: null,
  };
  constructor() {}

  async getMyCart() {
    return fetchApiClient.get<{
      cart : Cart | null
    }>(`${this.url}/me`);
  }
  async getDetail() {
    return this.cart;
  }

  async saveCart(cart : Cart | null) {
      const body  = cart || {...this.cart , items : undefined ,customer_id : undefined}
      const bodySave : CartSave = {
          token: body.token,
          item_count: body.item_count,
          total_price: body.total_price,
          note: body.note,
          customer :{
              connect : body.customer_id ? {id : body.customer_id} : undefined
          }
      }
      if(body.items){
          const itemsAdd = body.items.filter(item => item.id === 0).map(item => {
              return {
                  id : undefined,
                  line_price: item.line_price,
                  price: item.price,
                  price_original: item.price_original || 0,
                  line_price_original: item.line_price_original || 0,
                  quantity: item.quantity || 1,
                  product: {
                      connect: {
                          id: item.product_id,
                      },
                  },
                  variant: {
                      connect: {
                          id: item.variant_id,
                      },
                  },
              }
          })
          const itemsUpdate = body.items.filter(item => item.id !== 0).map(item => {
              return {
                  where: {
                      id: item.id,
                  },
                  data: {
                      line_price: item.line_price,
                      price: item.price,
                      price_original: item.price_original || 0,
                      line_price_original: item.line_price_original || 0,
                      quantity: item.quantity || 1,
                  },
              }
          })
          bodySave.items = {
              create : itemsAdd,
              update : itemsUpdate.length > 0 ? itemsUpdate : undefined
          }
      }
   
    return fetchApiClient.post<Cart>(this.url,bodySave);
  }
}

const CartServiceClientApi = new CartService();
export default CartServiceClientApi;
