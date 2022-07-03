import { open } from "fs/promises";
import React, { ReactNode, useState } from "react";
import ValidLoginModal from "../modals/ValidLoginModal";
import { useUserStore } from "./userStore";

export default function Middleware({ children }: { children: ReactNode }) {
  const { user, setUser } = useUserStore();
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (user) {
    return <>{children}</>;
  }

  return (
    <div>
      <ValidLoginModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
