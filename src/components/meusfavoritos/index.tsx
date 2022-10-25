import React from "react";
import * as S from "./styles";
import { FilmesShort } from "../../types";
import ItemFav from "../ItemFav";
import ReloadContext from "../../context/ReloadLocalStorageContext";
import UseFavorito from "../../hooks/UseFavorito";
import { Favoritos } from "../favoritos";

const MeusFavortios = () => {
  const { favoritos, reload, setReload } = UseFavorito();
  return (
    <ReloadContext Reload={reload} setReload={setReload}>
      <S.Main>
        <S.Content>
          <S.ConteinerFav>
            <div className="topic">
              <h2>Meus favoritos</h2>
              <p>{favoritos.length} Items</p>
            </div>
            <S.ListFav>
              {favoritos.length < 1 ? (
                <p>Favoritos vazio</p>
              ) : (
                favoritos.length > 0 && favoritos.map((item: FilmesShort) => <ItemFav key={item.id} filme={item} />)
              )}
            </S.ListFav>
          </S.ConteinerFav>
        </S.Content>
      </S.Main>
    </ReloadContext>
  );
};

export default MeusFavortios;
