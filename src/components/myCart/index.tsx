import React from "react";
import UseCarrinho from "../../hooks/UseCarrinho";
import ItemCart from "../itemCart";
import { ItemCartProps } from "../../types";
import * as S from "./styles";

const MeusFavortios = () => {
  const { carrinho, reload, setReload } = UseCarrinho();
  console.log(carrinho);
  return (
    <S.Main>
      <h2>Carrinho</h2>
      <S.ListCart>
        {carrinho.map((item: ItemCartProps) => (
          <ItemCart key={item.id} title={item.title} id={item.id} poster_path={item.poster_path} countItem={item.countItem} />
        ))}
      </S.ListCart>
    </S.Main>
  );
};

export default MeusFavortios;
