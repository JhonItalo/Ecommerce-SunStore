import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";
import ButtonAddFavoritos from "../buttonAddFavoritos";
import ButtonAddCart from "../buttonAddCart";
import { AiOutlineHeart } from "react-icons/ai";

interface props {
  title: string;
  path: string;
  id: number;
}

const Products = ({ title, path, id }: props) => {
  return (
    <S.itens>
      <S.produtoImage>
        <Link href={`produtos/${id}`}>
          <a>
            <Image
              src={`https://image.tmdb.org/t/p/w300${path}`}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </a>
        </Link>

        <ButtonAddFavoritos title={title} id={id}>
          <AiOutlineHeart />
        </ButtonAddFavoritos>
      </S.produtoImage>

      <S.NomeCarrinho>
        <p>{title}</p>
        <ButtonAddCart title={title} id={id} />
      </S.NomeCarrinho>
    </S.itens>
  );
};

export default memo(Products);
