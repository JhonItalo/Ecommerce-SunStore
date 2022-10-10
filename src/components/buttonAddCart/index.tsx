import React, { useContext } from "react";
import { CartContext } from "../../context/CarrinhoContext";
import UseAddCart from "../../hooks/UseAddCart";
interface props {
  title: string;
  id: number;
}
const ButtonAddCart = ({ title, id }: props) => {
  const { AttCart, setAttCart } = useContext(CartContext);
  const { AdiconarCarrinho, setAdcionarCarrinho } = UseAddCart({ title, id });

  const HandleClickAddCart = () => {
    setAttCart(AttCart + 1);
    setAdcionarCarrinho(AdiconarCarrinho + 1);
  };

  return (
    <button className="cart" onClick={HandleClickAddCart}>
      Add to Cart
    </button>
  );
};

export default ButtonAddCart;
