import { createContext, useEffect, useState } from "react";
import React from "react";

interface context {
  AttCart: number;
  setAttCart: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  AttCart: 0,
  setAttCart: () => {
    //nothing
  },
};
export const CartContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
  console.log("contexto renderizou");
  const [AttCart, setAttCart] = useState<number>(0);

  useEffect(() => {
    if (typeof localStorage.getItem("carrinho") != typeof "string") {
      localStorage.setItem("carrinho", "[]");
    } else {
      const responseString = localStorage.getItem("carrinho");
      const responseArray = JSON.parse(responseString!);
      setAttCart(responseArray.length);
    }
  }, []);

  console.log(AttCart, "contexto");

  return <CartContext.Provider value={{ AttCart, setAttCart }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;
