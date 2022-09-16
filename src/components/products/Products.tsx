import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import * as S from "./productsST";
import AddFavoritos from "../addFavoritos/AddFavoritos";
import AddCart from "../addCart/AddCart";

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
              //width="100%"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </a>
        </Link>

        <AddFavoritos title={title} id={id} />
      </S.produtoImage>
      <p className="produtoName">{title}</p>
      <AddCart title={title} id={id} />
    </S.itens>
  );
};

export default memo(Products);
