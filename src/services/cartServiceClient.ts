import { KEYS } from "@/consts/localStorage";
import { Cart } from "@/types/cart";
import { Product, ProductOrder, ProductVariant } from "@/types/product";
import LocalStorageService from "@/utils/localStorage";

class CartServiceClient {
  cart: Cart

  constructor(cart: Cart) {
    this.cart = cart
  }

  getDetail() {
    return this.cart
  }

  add(product: Product, variant: ProductVariant, quantity: number) {
    const itemIndex = this.cart.items.findIndex(item => item.product_id === product.id && variant.id === item.variant_id)

    if (itemIndex < 0) {
      const data = this.convertToProductOrder(product, variant, quantity)
      this.cart.items.unshift(data);

    } else {
      const itemFind = this.cart.items[itemIndex]
      const quantityCombine = quantity + itemFind.quantity
      const data = this.convertToProductOrder(product, variant, quantityCombine)
      this.cart.items.splice(itemIndex, 1)
      this.cart.items.unshift(data);
    }

    this.calcTotalCart()
  }
  update(productorder: ProductOrder) {
    const itemIndex = this.cart.items.findIndex(item => item.id === productorder.id);
    if (itemIndex >= 0) {
      this.cart.items[itemIndex] = productorder;
      this.calcTotalCart();
    }
  }

  delete(id: ProductOrder["id"]) {
    this.cart.items = this.cart.items.filter(item => item.id !== id)
    this.calcTotalCart()
  }

  private calcTotalCart() {
    this.cart.item_count = this.cart.items.length
    this.cart.total_price = this.cart.items.filter(item=>item.selected).reduce((pre, item) => {
      return pre + item.line_price
    }, 0)

    this.saveCartToLocalStorage()
  }

 private saveCartToLocalStorage() {
    LocalStorageService.setItem(KEYS.CART, this.cart)
  }

  private convertToProductOrder(product: Product, variant: ProductVariant, quantity: number): ProductOrder {
    const imgSrc = product.images.find(item => item.id === variant.image_id)
    return {
      id: Math.floor(new Date().getTime() * Math.random()),
      title: product.title,
      slug: product.slug,
      category_title: product.category_title,
      category_id: product.category_id,
      vendor: product.vendor,
      barcode: product.barcode, // null check for barcode
      line_price: variant.price * quantity,
      price: variant.price,
      price_original: variant.price,
      line_price_original: variant.price * quantity,
      variant_id: variant.id,
      product_id: product.id,
      image: imgSrc ? imgSrc.src : product.image.src, // You need to provide the image URL here
      product_title: product.title,
      variant_title: variant.title,
      variant_options: [variant.option1, variant.option2, variant.option3].filter(opt => opt), // Filter out empty options
      quantity: quantity,
      selected : true
    };
  }

}

export default CartServiceClient