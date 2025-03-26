'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'
import { type ShopStore, createShopStore, initShopStore } from '@/stores/shop-store'
import LoginDialog from '@/components/feature/login/LoginDialog'
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
    storeRef.current = createShopStore(initShopStore())
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
  return useStore(shopStoreContext, selector)
}
