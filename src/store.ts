import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OAuthProvider } from "./types";

export interface UserStore {
  avatarUrl: string | null;
  username: string | null;
}

export interface AuthStore {
  provider: OAuthProvider | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
  tokenType: string | null;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set, _get) => ({
      provider: null,
      accessToken: null,
      refreshToken: null,
      expiresIn: null,
      tokenType: null,
      setAuth: (auth: AuthStore) => set({ ...auth }),
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
    },
  ),
);

export const useUserStore = create<UserStore>(
  (set, _get) => ({
    // avatarUrl: null,
    // username: null,
    // #DEBUG
    avatarUrl: "https://picsum.photos/100/100",
    username: "Sv443",
    setUser: (auth: UserStore) => set({ ...auth }),
  }),
);
