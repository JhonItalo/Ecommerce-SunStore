import { memo } from "react";
import * as S from "./productsST";

interface props {
  title: string;
  path: string;
  id: number;
  width: string;
}

const Products = ({ title, path, id, width }: props) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300${path}`}
        width={width}
        alt={title}
      />
      <p>{title}</p>
      <S.preco>${id / (0.5 * id)}</S.preco>
    </>
  );
};

export default Products;
