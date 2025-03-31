import { KEYS } from "@/consts/localStorage";
import LocalStorageService from "@/utils/localStorage";

import { createStore } from "zustand/vanilla";

export type AuthState = {
  openLogin: boolean;
  openRegister: boolean;
};
export type AuthActions = {
  setOpenLogin: (open: boolean) => void;
  setOpenRegister: (open: boolean) => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  openLogin: false,
  openRegister: false,
};

export const createAuthStore = () => {
  const store = createStore<AuthStore>()((set) => ({
    ...defaultInitState,
    setOpenLogin: (open) => set((state) => ({ openLogin: open })),
    setOpenRegister: (open) => set((state) => ({ openRegister: open })),
  }));
  return store;
};
