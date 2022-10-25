import React, { useContext } from "react";
import UseCarrinho from "../../hooks/UseCarrinho";
import ItemCart from "../itemCart";
import { ItemCartProps } from "../../types";
import * as S from "./styles";
import ReloadContext from "../../context/ReloadLocalStorageContext";
import { CartCountContext } from "../../context/CartCountContext";
import OrderSummary from "../orderSummary";

const MeusFavortios = () => {
  const { carrinho, reload, setReload } = UseCarrinho();
  const { CountItemCart } = useContext(CartCountContext);
  console.log(carrinho);
  return (
    <S.Main>
      <S.Content>
        <S.ConteinerShopCart>
          <div className="topic">
            <h2>Shopping Cart</h2>
            <p>{CountItemCart} Items</p>
          </div>
          <ReloadContext Reload={reload} setReload={setReload}>
            <S.ListCart>
              {carrinho.length < 1 ? (
                <p>Carrinho vazio</p>
              ) : (
                carrinho.map((item: ItemCartProps) => (
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
          </ReloadContext>
        </S.ConteinerShopCart>
        <OrderSummary />
      </S.Content>
    </S.Main>
  );
};

export default MeusFavortios;
