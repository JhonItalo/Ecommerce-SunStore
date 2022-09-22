import React, { useContext } from "react";
import * as S from "./styles";
import { CartContext } from "../../context/CarrinhoContext";
import UseAddCart from "../../hooks/UseAddCart";
interface props {
  title: string;
  id: number;
}
const ButtonAddCart = ({ title, id }: props) => {
  const { AttCart, setAttCart } = useContext(CartContext);
  const { setAdcionarCarrinho } = UseAddCart({ title, id });

  return (
    <S.AddCart
      className="cart"
      onClick={() => {
        setAttCart(AttCart + 1);
        setAdcionarCarrinho(true);
      }}
    >
      Add to Cart
    </S.AddCart>
  );
};

export default ButtonAddCart;
