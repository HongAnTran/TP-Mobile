'use client'

import { type ReactNode, createContext, useRef, useContext, useEffect } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type ShopStore, createShopStore } from '@/stores/shop-store'
import LocalStorageService from '@/utils/localStorage'
import { KEYS } from '@/consts/localStorage'
export const ShopStoreContext = createContext<StoreApi<ShopStore> | null>(
  null,
)

export interface ShopStoreProviderProps {
  children: ReactNode
}

export const ShopStoreProvider = ({
  children,
}: ShopStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ShopStore>>()
  if (!storeRef.current) {
    storeRef.current = createShopStore()
  }
  return (
    <ShopStoreContext.Provider value={storeRef.current}>
      {children}
    </ShopStoreContext.Provider>
  )
}

export const useShopStore = <T,>(
  selector: (store: ShopStore) => T,
): T => {
  const shopStoreContext = useContext(ShopStoreContext)

  if (!shopStoreContext) {
    throw new Error(`useShopStore must be use within ShopStoreProvider`)
  }
  useEffect(() => {
    shopStoreContext.setState({ wishlist: (LocalStorageService.getItem(KEYS.WISHLIST, [])) })
  }, [shopStoreContext])

  return useStore(shopStoreContext, selector)
}
