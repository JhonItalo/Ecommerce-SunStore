import React from "react";

import UseAddCart from "../../hooks/UseAddCart";
interface props {
  title: string;
  id: number;
  poster_path: string;
}
const ButtonAddCart = ({ title, id, poster_path }: props) => {
  const { AdiconarCarrinho, setAdcionarCarrinho } = UseAddCart({ title, id, poster_path });

  const HandleClickAddCart = () => {
    setAdcionarCarrinho(AdiconarCarrinho + 1);
  };

  return (
    <button className="cart" onClick={HandleClickAddCart}>
      Add to Cart
    </button>
  );
};

export default ButtonAddCart;
