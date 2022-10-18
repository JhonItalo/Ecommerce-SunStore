import React, { useContext } from "react";
import { CartCountContext } from "../../context/CartCountContext";
import UseAddCart from "../../hooks/UseAddCart";
interface props {
  title: string;
  id: number;
}
const ButtonAddCart = ({ title, id }: props) => {
  const { CountItemCart, setCountItemCart } = useContext(CartCountContext);
  const { AdiconarCarrinho, setAdcionarCarrinho } = UseAddCart({ title, id });

  const HandleClickAddCart = () => {
    setCountItemCart(CountItemCart + 1);
    setAdcionarCarrinho(AdiconarCarrinho + 1);
  };

  return (
    <button className="cart" onClick={HandleClickAddCart}>
      Add to Cart
    </button>
  );
};

export default ButtonAddCart;
