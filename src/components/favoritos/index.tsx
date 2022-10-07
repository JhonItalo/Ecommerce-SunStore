import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { FavoritoContext } from "../../context/FavContext";
import Link from "next/link";

export const Favoritos = () => {
  console.log("render fav");
  const { Attfav } = useContext(FavoritoContext);
  return (
    <Link href="/favoritos">
      <a>
        <S.Favoritos>
          <AiOutlineHeart />
          <span>{Attfav}</span>
        </S.Favoritos>
      </a>
    </Link>
  );
};
