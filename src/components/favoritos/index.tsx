import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { CountFavoritoContext } from "../../context/FavContext";
import Link from "next/link";

export const Favoritos = () => {
  console.log("render fav");
  const { CountItemFav } = useContext(CountFavoritoContext);
  return (
    <Link href="/favoritos">
      <a>
        <S.Favoritos>
          <AiOutlineHeart />
          {CountItemFav > 0 ? <span>{CountItemFav}</span> : ""}
        </S.Favoritos>
      </a>
    </Link>
  );
};
