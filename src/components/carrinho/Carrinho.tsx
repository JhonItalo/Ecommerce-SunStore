import React, { useContext } from "react";
import { CartContext } from "../../context/CarrinhoContext";
import * as S from "./CarrinhoSt";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Carrinho = () => {
  const { AttCart } = useContext(CartContext);
  return (
    <S.Carrinho>
      <AiOutlineShoppingCart />
      <span>{AttCart}</span>
    </S.Carrinho>
  );
};

export default Carrinho;
