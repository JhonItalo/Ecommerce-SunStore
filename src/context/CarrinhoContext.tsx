import { createContext, useEffect, useState } from "react";
import React from "react";

interface props {
  children: React.ReactNode;
}
interface context {
  AttCart: number;
  setAttCart: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  AttCart: 0,
  setAttCart: () => {},
};

export const CartContext = createContext<context>(defaultValue);

function CarrinhoContext({ children }: props) {
  console.log("contexto renderizou");
  const [AttCart, setAttCart] = useState<number>(0);

  useEffect(() => {
    console.log("effect");
    if (typeof localStorage.getItem("carrinho") != typeof "string") {
      localStorage.setItem("carrinho", "[]");
      console.log("if");
    } else {
      console.log("else");
      const responseString = localStorage.getItem("carrinho");
      const responseArray = JSON.parse(responseString);
      setAttCart(responseArray.length);
    }
  }, []);

  console.log(AttCart, "contexto");

  return (
    <CartContext.Provider value={{ AttCart, setAttCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CarrinhoContext;
