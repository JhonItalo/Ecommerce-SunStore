import * as S from "./carrinhoBuscaST";
import { useEffect, useRef, useState } from "react";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const CarrinhoBusca = () => {
  useEffect(() => {
    localStorage.setItem("carrinho", "teste");
  });

  const [inputOn, setinputOn] = useState<string>("off");

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
      </S.carrinho>
    </S.icons>
  );
};

export default CarrinhoBusca;
