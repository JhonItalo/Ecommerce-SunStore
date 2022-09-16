import React, { useContext } from "react";
import * as S from "./FavoritosSt";
import { AiOutlineHeart } from "react-icons/ai";
import { FavoritoContext } from "../../context/FavContext";

export const Favoritos = () => {
  const { Attfav } = useContext(FavoritoContext);
  return (
    <S.Favoritos>
      <AiOutlineHeart />
      <span>{Attfav}</span>
    </S.Favoritos>
  );
};
