import create from "zustand";
import { persist } from "zustand/middleware";
import { client } from "../_app";
import { useRouter } from "next/router";
import { User } from "../../generated";
import { ReactNode } from "react";

export default function middleware({ children }: { children: ReactNode }) {
  // const { user } = useUserStore();
  // if (user !== null) return <>{children}</>;
  // return <>Anda harus login</>;
}
