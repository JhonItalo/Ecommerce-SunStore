import React from "react";
import * as S from "./styles";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { FilmesShort } from "../../types";
import ButtonAddCart from "../buttonAddCart";

interface props {
  filme: FilmesShort;
}

const ItemFav = ({ filme }: props) => {
  console.log(filme);
  return (
    <S.Item>
      <S.conteinerInfoFilme>
        <Link href={`produtos/${filme.id}`}>
          <a>
            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt="" />
          </a>
        </Link>
        <p>{filme.title}</p>
        <span>id: {filme.id}</span>
      </S.conteinerInfoFilme>
      <S.Buttons>
        <ButtonAddCart title={filme.title} id={filme.id} />
        <S.BtnMoreExcluir>
          <button>
            Mais <TiArrowSortedDown />
          </button>
          <button>Excluir</button>
        </S.BtnMoreExcluir>
      </S.Buttons>
    </S.Item>
  );
};

export default ItemFav;
