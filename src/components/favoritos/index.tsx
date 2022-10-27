import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { FavoritoContext } from "../../context/FavContext";
import Link from "next/link";

export const Favoritos = () => {
  const { storage } = useContext(FavoritoContext);
  return (
    <Link href="/favoritos">
      <a>
        <S.Favoritos>
          <AiOutlineHeart />
          {storage.length > 0 ? <span>{storage.length}</span> : ""}
        </S.Favoritos>
      </a>
    </Link>
  );
};
