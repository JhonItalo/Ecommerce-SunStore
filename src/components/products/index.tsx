import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";
import ButtonAddFavoritos from "../buttonAddFavoritos";
import ButtonAddCart from "../buttonAddCart";
import { AiOutlineHeart } from "react-icons/ai";

interface props {
  title: string;
  poster_path: string;
  id: number;
  width: string;
  height: string;
  type: "s" | "l";
}

const Products = ({ title, poster_path, id, width, height, type }: props) => {
  console.log("render produto");
  return (
    <S.Itens width={width} height={height} type={type} className="mediaQueryControlParentProduct">
      <div className="ConteinerImage">
        <Link href={`produtos/${id}`}>
          <a>
            <Image
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={title}
            />
          </a>
        </Link>

        <ButtonAddFavoritos title={title} id={id} poster_path={poster_path}>
          <AiOutlineHeart />
        </ButtonAddFavoritos>
      </div>

      <S.TitleButtonCart>
        <p>{title}</p>
        <ButtonAddCart title={title} id={id} poster_path={poster_path} />
      </S.TitleButtonCart>
    </S.Itens>
  );
};

export default memo(Products);
