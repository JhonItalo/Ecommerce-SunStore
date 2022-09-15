import * as S from "./carrinhoBuscaST";
import { useContext } from "react";
import { CartContext } from "../../context/CarrinhoContext";
import { useState, useEffect } from "react";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const CarrinhoBusca = () => {
  console.log("carrinho busca");
  const [inputOn, setinputOn] = useState<string>("off");
  const { AttCart } = useContext(CartContext);

  return (
    <S.icons>
      <S.busca
        active={inputOn === "on"}
        onDoubleClick={() => setinputOn("off")}
      >
        <input type="text" maxLength={50} />

        <HiOutlineSearch onClick={() => setinputOn("on")} />
      </S.busca>

      <S.favoritos>
        <AiOutlineHeart />
      </S.favoritos>

      <S.carrinho>
        <AiOutlineShoppingCart />
        <span>{AttCart}</span>
      </S.carrinho>
    </S.icons>
  );
};

export default CarrinhoBusca;
