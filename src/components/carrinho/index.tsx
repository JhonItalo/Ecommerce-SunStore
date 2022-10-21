import React, { useContext } from "react";
import { CartCountContext } from "../../context/CartCountContext";
import * as S from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Carrinho = () => {
  console.log("render carrinho");
  const { CountItemCart } = useContext(CartCountContext);
  return (
    <Link href="/cart">
      <a>
        <S.Carrinho>
          <AiOutlineShoppingCart />
          <span>{CountItemCart}</span>
        </S.Carrinho>
      </a>
    </Link>
  );
};

export default Carrinho;
