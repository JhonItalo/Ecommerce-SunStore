import { createContext, useEffect, useState } from "react";
import React from "react";

interface context {
  CountItemCart: number;
  setCountItemCart: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  CountItemCart: 0,
  setCountItemCart: () => {
    //nothing
  },
};
export const CartCountContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
  console.log("contexto renderizou");
  const [CountItemCart, setCountItemCart] = useState<number>(0);

  useEffect(() => {
    const localStorageString = localStorage.getItem("carrinho");
    if (typeof localStorageString != typeof "string") {
      localStorage.setItem("carrinho", "[]");
    } else {
      const localStorageArray = JSON.parse(localStorageString!);
      setCountItemCart(localStorageArray.length);
    }
  }, []);

  console.log(CountItemCart, "contexto");

  return <CartCountContext.Provider value={{ CountItemCart, setCountItemCart }}>{children}</CartCountContext.Provider>;
};

export default CarrinhoContext;
