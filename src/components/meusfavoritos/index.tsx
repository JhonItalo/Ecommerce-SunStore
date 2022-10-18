import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FilmesShort } from "../../types";
import ItemFav from "../ItemFav";
import ReloadContext from "../../context/ReloadLocalStorageContext";

const MeusFavortios = () => {
  const [favoritos, setFavoritos] = useState<FilmesShort[]>([]);
  const [reload, setReload] = useState<number>(0);

  console.log(favoritos, "fav");

  useEffect(() => {
    const localStorageString = localStorage.getItem("favorito");
    if (typeof localStorageString === typeof "string") {
      const localStorageArray = JSON.parse(localStorageString!);
      setFavoritos(localStorageArray);
    }
  }, []);

  useEffect(() => {
    if (reload > 0) {
      const localStorageString = localStorage.getItem("favorito");
      if (typeof localStorageString === typeof "string") {
        const localStorageArray = JSON.parse(localStorageString!);
        setFavoritos(localStorageArray);
      }
    }
  }, [reload]);

  return (
    <ReloadContext Reload={reload} setReload={setReload}>
      <S.Main>
        <h2>Meus favoritos</h2>
        <S.ListFav>
          {favoritos.length > 0 && favoritos.map((item: FilmesShort) => <ItemFav key={item.id} filme={item} />)}
        </S.ListFav>
      </S.Main>
    </ReloadContext>
  );
};

export default MeusFavortios;
