import React, { useContext } from "react";
import { CartContext } from "../../context/CarrinhoContext";
import * as S from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Carrinho = () => {
  console.log("render carrinho");
  const { AttCart } = useContext(CartContext);
  return (
    <Link href="/checkout">
      <a>
        <S.Carrinho>
          <AiOutlineShoppingCart />
          <span>{AttCart}</span>
        </S.Carrinho>
      </a>
    </Link>
  );
};

export default Carrinho;
