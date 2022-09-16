import React, { useContext, useState, useEffect } from "react";
import * as S from "./AddCartSt";
import { CartContext } from "../../context/CarrinhoContext";
interface props {
  title: string;
  id: number;
}
const AddCart = ({ title, id }: props) => {
  const { AttCart, setAttCart } = useContext(CartContext);

  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      if (typeof localStorage.getItem("carrinho") != typeof "string") {
        console.log("if produto");
        localStorage.setItem(
          "carrinho",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        console.log("else produto");
        const responseString = localStorage.getItem("carrinho");
        console.log(responseString);
        const responseArray = JSON.parse(responseString);
        console.log(responseArray);
        responseArray.push({ title: title, id: id });
        setAttCart(AttCart + 1);
        localStorage.setItem("carrinho", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarCarrinho]);

  return (
    <S.AddCart
      onClick={() => {
        setAdcionarCarrinho(AdiconarCarrinho + 1);
      }}
    >
      Add to Cart
    </S.AddCart>
  );
};

export default AddCart;
