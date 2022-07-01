import create from "zustand";
import { persist } from "zustand/middleware";
import { client } from "../_app";
import { useRouter } from "next/router";
import { User } from "../../generated";
import { ReactNode } from "react";

interface UserStore {
  user: null | User;
  setUser: (user: null | User) => void;
}

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => ({ user }),
    }),
    {
      name: "asd",
      getStorage: () => localStorage,
    }
  )
);

export default function middleware({ children }: { children: ReactNode }) {
  // const { user } = useUserStore();
  // if (user !== null) return <>{children}</>;
  // return <>Anda harus login</>;
}
