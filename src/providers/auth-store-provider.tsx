'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'
import { type AuthStore, createAuthStore } from '@/stores/auth-store'
import LoginDialog from '@/components/feature/login/LoginDialog'
export type AuthStoreApi = ReturnType<typeof createAuthStore>
export const AuthStoreContext = createContext<AuthStoreApi | null>(
  null,
)
export interface AuthStoreProviderProps {
  children: ReactNode
}

export const AuthStoreProvider = ({
  children,
}: AuthStoreProviderProps) => {
  const storeRef = useRef<AuthStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createAuthStore()
  }
  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
      <LoginDialog />
    </AuthStoreContext.Provider>
  )
}

export const useAuthStore = <T,>(
  selector: (store: AuthStore) => T,
): T => {
  const AuthStoreContextNew = useContext(AuthStoreContext)

  if (!AuthStoreContextNew) {
    throw new Error(`useAuthStore must be use within AuthStoreProvider`)
  }
  return useStore(AuthStoreContextNew, selector)
}
