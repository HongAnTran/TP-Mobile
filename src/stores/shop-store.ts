import { Product } from '@/types/product'
import { Wishlist } from '@/types/wishlist'
import { createStore } from 'zustand/vanilla'

export type ShopState = {
  wishlist: Wishlist[],
  productsCompare: Product[]
}

export type ShopActions = {
  setWishlist: (list: Wishlist[]) => void
  setProductsCompare: (list: Product[]) => void
}

export type ShopStore = ShopState & ShopActions

export const defaultInitState: ShopState = {
  wishlist: [],
  productsCompare: []
}

export const createShopStore = (
  initState: Partial<ShopState> = defaultInitState,
) => {
  return createStore<ShopStore>()((set) => ({
    ...defaultInitState,
    ...initState,
    setWishlist: (list) => set((state) => ({ wishlist: list })),
    setProductsCompare: (list) => set((state) => ({ productsCompare: list })),

  }))

}