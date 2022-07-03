import React, { ReactNode, useEffect, useState } from "react";
import ValidLoginModal from "../modals/ValidLoginModal";
import { useUserStore } from "./userStore";

export default function Middleware({ children }: { children: ReactNode }) {
  const { user, setUser } = useUserStore();
  let [isOpen, setIsOpen] = useState(true);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
  }, [])
  

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (user && ready) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <ValidLoginModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
