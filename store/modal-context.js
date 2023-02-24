import { createContext, useState } from 'react';

const ModalContext = createContext({
  isOpen: false,
  setOpen: function () {},
  setClose: function () {},
});

export function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(true);
  }

  function setClose() {
    setIsOpen(false);
  }

  const context = {
    isOpen: isOpen,
    setOpen: setOpen,
    setClose: setClose,
  };

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
}

export default ModalContext;
