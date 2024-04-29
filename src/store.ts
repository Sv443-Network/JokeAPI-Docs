import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OAuthProvider } from "./types";

export interface UserStore {
  avatarUrl?: string;
  username?: string;
  email?: string;
  emailNotifs?: string,
  setUser: (user: Pick<UserStore,
    "avatarUrl"| "email" | "username" | "emailNotifs">) => void;
}

export interface AuthStore {
  provider?: OAuthProvider;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  tokenType?: string;
  setAuth: (
    auth: Pick<
      AuthStore,
      "provider" | "accessToken" | "refreshToken" | "expiresIn" | "tokenType"
    >,
  ) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set, _get) => ({
      setUser: (user: Parameters<UserStore["setUser"]>[0]) => set({ ...user }),
    }),
    {
      name: "user"
    }
  ));

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
