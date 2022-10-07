import React, { useEffect, useState } from "react";

interface props {
  title: string;
  id: number;
}

const UseAddCart = ({ title, id }: props) => {
  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      if (typeof localStorage.getItem("carrinho") != typeof "string") {
        localStorage.setItem("carrinho", JSON.stringify([{ title: title, id: id }]));
      } else {
        const responseString = localStorage.getItem("carrinho");
        const responseArray = JSON.parse(responseString!);
        responseArray.push({ title: title, id: id });
        localStorage.setItem("carrinho", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarCarrinho, title, id]);

  return { AdiconarCarrinho, setAdcionarCarrinho };
};

export default UseAddCart;
