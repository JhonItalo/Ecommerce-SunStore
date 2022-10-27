import React, { useContext } from "react";
import * as S from "./styles";
import { FilmesShort } from "../../types";
import ItemFav from "../ItemFav";
import { FavoritoContext } from "../../context/FavContext";

const MeusFavortios = () => {
  const { storage } = useContext(FavoritoContext);
  return (
    <S.Main>
      <S.Content>
        <S.ConteinerFav>
          <div className="topic">
            <h2>Meus favoritos</h2>
            <p>{storage.length} Items</p>
          </div>
          <S.ListFav>
            {storage.length < 1 ? (
              <p>Favoritos vazio</p>
            ) : (
              storage.length > 0 && storage.map((item: FilmesShort) => <ItemFav key={item.id} filme={item} />)
            )}
          </S.ListFav>
        </S.ConteinerFav>
      </S.Content>
    </S.Main>
  );
};

export default MeusFavortios;
