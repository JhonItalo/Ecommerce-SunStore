import React from "react";
import * as S from "./styles";
import NavCategory from "../navCategory";
import ListProdutos from "../listProdutos";

const ShopNow = () => {
  return (
    <S.ConteinerShop>
      <h2>Shop Now</h2>
      <S.Content>
        <NavCategory />
        <ListProdutos />
      </S.Content>
    </S.ConteinerShop>
  );
};

export default ShopNow;
