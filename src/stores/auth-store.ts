import { KEYS } from "@/consts/localStorage";
import LocalStorageService from "@/utils/localStorage";

import { createStore } from "zustand/vanilla";

export type AuthState = {
  openLogin: boolean;
};
export type AuthActions = {
  setOpenLogin: (open: boolean) => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultInitState: AuthState = {
  openLogin: false,
};

export const createAuthStore = () => {
  const store = createStore<AuthStore>()((set) => ({
    ...defaultInitState,
    setOpenLogin: (open) => set((state) => ({ openLogin: open })),
  }));
  return store;
};
