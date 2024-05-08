enum WishlistType {
  PRODUCT,
  ARTICE
}

interface Wishlist {
  id: number,
  customer_id: number
  item_id: number
  type : WishlistType
}

export { WishlistType }
export type { Wishlist }