import React, { useEffect, useState } from "react";

interface props {
  title: string;
  id: number;
}

const UseAddCart = ({ title, id }: props) => {
  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<boolean>(false);
  useEffect(() => {
    if (AdiconarCarrinho === true) {
      if (typeof localStorage.getItem("carrinho") != typeof "string") {
        localStorage.setItem(
          "carrinho",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        console.log("else produto");
        const responseString = localStorage.getItem("carrinho");
        const responseArray = JSON.parse(responseString);
        responseArray.push({ title: title, id: id });
        localStorage.setItem("carrinho", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarCarrinho]);
  return { setAdcionarCarrinho };
};

export default UseAddCart;
