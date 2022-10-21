import { useEffect, useState, useContext } from "react";
import { CartCountContext } from "../context/CartCountContext";

interface props {
  title: string;
  id: number;
  poster_path: string;
}

const UseAddCart = ({ title, id, poster_path }: props) => {
  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);
  const { CountItemCart, setCountItemCart } = useContext(CartCountContext);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      const localStorageString = localStorage.getItem("carrinho");
      if (typeof localStorageString != typeof "string") {
        localStorage.setItem("carrinho", JSON.stringify([{ title: title, id: id, poster_path: poster_path, countItem: 1 }]));
      } else {
        const localStorageArray = JSON.parse(localStorageString!);
        for (let i = 0; i < localStorageArray.length; i++) {
          if (localStorageArray[i].id === id) {
            localStorageArray[i].countItem = localStorageArray[i].countItem + 1;
            localStorage.setItem("carrinho", JSON.stringify(localStorageArray));
            return;
          }
        }
        setCountItemCart(CountItemCart + 1);
        localStorageArray.push({ title: title, id: id, poster_path: poster_path, countItem: 1 });
        localStorage.setItem("carrinho", JSON.stringify(localStorageArray));
        return;
      }
    }
  }, [AdiconarCarrinho, title, id, poster_path]);

  return { AdiconarCarrinho, setAdcionarCarrinho };
};

export default UseAddCart;
