import { useEffect, useState } from "react";

interface props {
  title: string;
  id: number;
}

const UseAddCart = ({ title, id }: props) => {
  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      const localStorageString = localStorage.getItem("carrinho");
      if (typeof localStorageString != typeof "string") {
        localStorage.setItem("carrinho", JSON.stringify([{ title: title, id: id }]));
      } else {
        const localStorageArray = JSON.parse(localStorageString!);
        localStorageArray.push({ title: title, id: id });
        localStorage.setItem("carrinho", JSON.stringify(localStorageArray));
      }
    }
  }, [AdiconarCarrinho, title, id]);

  return { AdiconarCarrinho, setAdcionarCarrinho };
};

export default UseAddCart;
