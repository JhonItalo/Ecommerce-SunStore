import React from "react";
import * as S from "./styles";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { FilmesShort } from "../../types";
import ButtonAddCart from "../buttonAddCart";
import ButtonRemoveFav from "../ButtonRemoveFav.tsx";

interface props {
  filme: FilmesShort;
}

const ItemFav = ({ filme }: props) => {
  return (
    <S.Item>
      <S.conteinerInfoFilme>
        <Link href={`produtos/${filme.id}`}>
          <a>
            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt="" />
          </a>
        </Link>
        <div>
          <p>{filme.title}</p>
          <span>ID: {filme.id}</span>
        </div>
      </S.conteinerInfoFilme>
      <S.Buttons>
        <ButtonAddCart title={filme.title} id={filme.id} poster_path={filme.poster_path} />
        <S.BtnMoreExcluir>
          <ButtonRemoveFav id={filme.id}>Excluir</ButtonRemoveFav>
          <button>
            Mais <TiArrowSortedDown />
          </button>
        </S.BtnMoreExcluir>
      </S.Buttons>
    </S.Item>
  );
};

export default ItemFav;
