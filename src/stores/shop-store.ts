import { KEYS } from "@/consts/localStorage";
import CartServiceApi from "@/services/client/cartService";
import { Cart } from "@/types/Cart.type";
import { Product } from "@/types/Product.types";
import { Wishlist } from "@/types/wishlist";
import LocalStorageService from "@/utils/localStorage";
import { createStore } from "zustand/vanilla";

export type ShopState = {
  wishlist: Wishlist[];
  productsCompare: Product[];
  cart: Cart;
  isLoadingCard: boolean;
};

export type ShopActions = {
  setWishlist: (list: Wishlist[]) => void;
  setProductsCompare: (list: Product[]) => void;
  setCart: (cart: Cart) => void;
};

export type ShopStore = ShopState & ShopActions;

export const defaultInitState: ShopState = {
  wishlist: [],
  productsCompare: [],
  cart: {
    item_count: 0,
    items: [],
    note: "",
    total_price: 0,
    token: "",
    customer_id: null,
  } as Cart,
  isLoadingCard: true,
};

export const initShopStore = async (): Promise<ShopState> => {
  try {
    const response = await CartServiceApi.getDetail();
    const wishlist = LocalStorageService.getItem(KEYS.WISHLIST, []);
    return {
      productsCompare: [],
      wishlist: wishlist,
      cart: response,
      isLoadingCard: false,
    };
  } catch (error) {
    const wishlist = LocalStorageService.getItem(KEYS.WISHLIST, []);
    return {
      ...defaultInitState,
      isLoadingCard: false,
      wishlist: wishlist,
    };
  }
};

export const createShopStore = (initState: Promise<ShopState>) => {
  const store = createStore<ShopStore>()((set) => ({
    ...defaultInitState,
    ...initState,
    setWishlist: (list) => set((state) => ({ wishlist: list })),
    setProductsCompare: (list) => set((state) => ({ productsCompare: list })),
    setCart: (cart) => set((state) => ({ cart: cart })),
  }));
  initState.then(store.setState);
  return store;
};
