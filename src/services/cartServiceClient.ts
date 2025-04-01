import { KEYS } from "@/consts/localStorage";
import { Cart } from "@/types/Cart.type";
import { Product, ProductOrder, ProductVariant } from "@/types/Product.types";
import LocalStorageService from "@/utils/localStorage";

class CartServiceClient {
  cart: Cart;

  constructor(cart: Cart) {
    this.cart = cart;
  }

  getDetail() {
    return this.cart;
  }
  add(product: Product, variant: ProductVariant, quantity: number) {
    const itemIndex = this.cart.items.findIndex(
      (item) => item.product_id === product.id && variant.id === item.variant_id
    );

    if (itemIndex < 0) {
      const data = this.convertToProductOrder(product, variant, quantity);
      this.cart.items.unshift(data);
    } else {
      const itemFind = this.cart.items[itemIndex];
      const quantityCombine = quantity + itemFind.quantity;
      const data = this.convertToProductOrder(
        product,
        variant,
        quantityCombine
      );
      this.cart.items.splice(itemIndex, 1);
      this.cart.items.unshift(data);
    }

    this.calcTotalCart();
  }
  update(productorder: ProductOrder) {
    const itemIndex = this.cart.items.findIndex(
      (item) => item.id === productorder.id
    );
    if (itemIndex >= 0) {
      this.cart.items[itemIndex] = productorder;
      this.calcTotalCart();
    }
  }

  delete(id: ProductOrder["id"]) {
    this.cart.items = this.cart.items.filter((item) => item.id !== id);
    this.calcTotalCart();
  }

  private calcTotalCart() {
    this.cart.item_count = this.cart.items.length;
    this.cart.total_price = this.cart.items
      .filter((item) => item.selected)
      .reduce((pre, item) => {
        return pre + item.line_price;
      }, 0);

    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage() {
    LocalStorageService.setItem(KEYS.CART, this.cart);
  }

  private convertToProductOrder(
    product: Product,
    variant: ProductVariant,
    quantity: number
  ): ProductOrder {
    // gen id for product order ramdom max 999 and unique
    const id =  Number(new Date().getTime().toString().slice(-3)) + Math.floor(Math.random() * 1000)
    return {
      id: id,
      line_price: variant.price * quantity,
      price: variant.price,
      price_original: variant.price,
      line_price_original: variant.price * quantity,
      variant_id: variant.id,
      product_id: product.id,
      quantity: quantity,
      selected: true,
      product,
      variant,
    };
  }
}

export default CartServiceClient;
