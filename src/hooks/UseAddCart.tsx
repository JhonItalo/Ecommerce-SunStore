import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

interface props {
  title: string;
  id: number;
  poster_path: string;
}

const UseAddCart = ({ title, id, poster_path }: props) => {
  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);
  const { storage, setAttLocalStorage, attLocalStorage } = useContext(CartContext);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      if (storage === []) {
        localStorage.setItem("carrinho", JSON.stringify([{ title: title, id: id, poster_path: poster_path, countItem: 1 }]));
        setAttLocalStorage(!attLocalStorage);
      } else {
        for (let i = 0; i < storage.length; i++) {
          if (storage[i].id === id) {
            storage[i].countItem = storage[i].countItem + 1;
            localStorage.setItem("carrinho", JSON.stringify(storage));
            setAttLocalStorage(!attLocalStorage);
            return;
          }
        }
        storage.push({ title: title, id: id, poster_path: poster_path, countItem: 1 });
        localStorage.setItem("carrinho", JSON.stringify(storage));
        setAttLocalStorage(!attLocalStorage);
        return;
      }
    }
  }, [AdiconarCarrinho, title, id, poster_path]);

  return { AdiconarCarrinho, setAdcionarCarrinho };
};

export default UseAddCart;
