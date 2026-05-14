import { useState } from "react";

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const setOpen = (next: boolean) => setIsOpen(next);

  return {
    isOpen,
    toggle,
    close,
    open,
    setOpen,
  };
};
