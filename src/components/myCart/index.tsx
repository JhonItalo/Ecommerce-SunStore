import React from "react";
import UseCarrinho from "../../hooks/UseCarrinho";
import ItemCart from "../itemCart";
import { ItemCartProps } from "../../types";
import * as S from "./styles";
import ReloadContext from "../../context/ReloadLocalStorageContext";

const MeusFavortios = () => {
  const { carrinho, reload, setReload } = UseCarrinho();
  console.log(carrinho);
  return (
    <S.Main>
      <h2>Carrinho</h2>
      <S.Compra>
        <ReloadContext Reload={reload} setReload={setReload}>
          <S.ListCart>
            {carrinho.map((item: ItemCartProps) => (
              <ItemCart key={item.id} title={item.title} id={item.id} poster_path={item.poster_path} countItem={item.countItem} />
            ))}
          </S.ListCart>
        </ReloadContext>
        <button className="btnComprar">Comprar</button>
      </S.Compra>
    </S.Main>
  );
};

export default MeusFavortios;
