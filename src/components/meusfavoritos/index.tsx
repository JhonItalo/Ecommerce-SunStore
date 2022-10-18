import React from "react";
import * as S from "./styles";
import { FilmesShort } from "../../types";
import ItemFav from "../ItemFav";
import ReloadContext from "../../context/ReloadLocalStorageContext";
import UseFavorito from "../../hooks/UseFavorito";

const MeusFavortios = () => {
  const { favoritos, reload, setReload } = UseFavorito();
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
