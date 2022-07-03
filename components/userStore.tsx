import create from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../generated";

interface UserStore {
  user: null | User;
  setUser: (user: null | User) => void;
}

export const useUserStore: any = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: any) => set({ user }),
    }),
    {
      name: "asd",
      getStorage: () => localStorage,
    }
  )
);
