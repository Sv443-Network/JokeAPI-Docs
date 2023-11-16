import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OAuthProvider } from "./types";

export interface UserStore {
  avatarUrl?: string;
  username?: string;
  setUser: (user: Pick<UserStore, "avatarUrl" | "username">) => void,
}

export interface AuthStore {
  provider?: OAuthProvider;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  tokenType?: string;
  setAuth: (auth: Pick<AuthStore, "provider" | "accessToken" | "refreshToken" | "expiresIn" | "tokenType">) => void,
}

export const useUserStore = create<UserStore>(
  (set, _get) => ({
    setUser: (user: Parameters<UserStore["setUser"]>[0]) => set({ ...user }),
  }),
);

export const useAuthStore = create(
  persist<AuthStore>(
    (set, _get) => ({
      setAuth: (auth: Parameters<AuthStore["setAuth"]>[0]) => set({ ...auth }),
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
    },
  ),
);
