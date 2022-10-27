import { createContext, useEffect, useState } from "react";
import React from "react";
import { LocalStorageProps } from "../types";

interface context {
  //CountItemCart: number;
  //setCountItemCart: React.Dispatch<React.SetStateAction<number>>;
  storage: LocalStorageProps[];
  attLocalStorage: boolean;
  setAttLocalStorage: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultValue = {
  /* CountItemCart: 0,
  setCountItemCart: () => {
    //nothing
  },*/
  storage: [],
  attLocalStorage: false,
  setAttLocalStorage: () => {
    //nothing
  },
};
export const CartContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
 
  const [attLocalStorage, setAttLocalStorage] = useState<boolean>(false);
  const [storage, setStorage] = useState<LocalStorageProps[]>([]);

  useEffect(() => {
    const localStorageString = localStorage.getItem("carrinho");
    if (typeof localStorageString != typeof "string") {
      localStorage.setItem("carrinho", "[]");
    } else {
      const localStorageArray = JSON.parse(localStorageString!);
      setStorage(localStorageArray);
    }
  }, [attLocalStorage]);

 

  return <CartContext.Provider value={{ attLocalStorage, setAttLocalStorage, storage }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;
