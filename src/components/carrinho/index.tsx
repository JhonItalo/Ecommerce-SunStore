import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import * as S from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Carrinho = () => {
  const { storage } = useContext(CartContext);
  return (
    <Link href="/cart">
      <a>
        <S.Carrinho>
          <AiOutlineShoppingCart />
          {storage.length > 0 ? <span>{storage.length}</span> : ""}
        </S.Carrinho>
      </a>
    </Link>
  );
};

export default Carrinho;
