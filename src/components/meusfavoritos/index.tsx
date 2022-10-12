import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FilmesShort } from "../../types";
import ItemFav from "../ItemFav";

export const removeDuplicateFilmes = (array: FilmesShort[]) => {
  for (let h = 0; h < array.length; h++) {
    for (let l = h + 1; l < array.length; l++) {
      if (array[h].title === array[l].title) {
        array.splice(l, 1);
        l = l - 1;
      }
    }
  }
  return array;
};
const MeusFavortios = () => {
  const [fav, setfav] = useState<FilmesShort[]>([]);
  console.log(fav);

  useEffect(() => {
    const n = localStorage.getItem("favorito");
    if (typeof n === typeof "string") {
      console.log(typeof n);
      const h = JSON.parse(n!);
      console.log(h);
      setfav(removeDuplicateFilmes(h));
    }
  }, []);

  return (
    <S.Main>
      <h2>Meus favoritos</h2>
      <S.T>
        {fav.length > 0 && fav.map((item: FilmesShort) => <ItemFav key={"f"} filme={item} />)}
      </S.T>
    </S.Main>
  );
};

export default MeusFavortios;
