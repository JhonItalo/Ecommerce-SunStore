import React, { useContext } from "react";
import ItemCart from "../itemCart";
import { LocalStorageProps } from "../../types";
import * as S from "./styles";
import { CartContext } from "../../context/CartContext";
import OrderSummary from "../orderSummary";

const MeusFavortios = () => {
  const { storage } = useContext(CartContext);
  return (
    <S.Main>
      <S.Content>
        <S.ConteinerShopCart>
          <div className="topic">
            <h2>Shopping Cart</h2>
            <p>{storage.length} Items</p>
          </div>
          <S.ListCart>
            {storage.length < 1 ? (
              <p>Carrinho vazio</p>
            ) : (
              storage.map((item: LocalStorageProps) => (
                <ItemCart
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  poster_path={item.poster_path}
                  countItem={item.countItem}
                />
              ))
            )}
          </S.ListCart>
        </S.ConteinerShopCart>
        <OrderSummary />
      </S.Content>
    </S.Main>
  );
};

export default MeusFavortios;
