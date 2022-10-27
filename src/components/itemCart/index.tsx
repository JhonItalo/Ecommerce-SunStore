import React, { useContext } from "react";
import { LocalStorageProps } from "../../types";
import { URL_IMG } from "../../utils/Constants";
import * as S from "./styles";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ title, id, poster_path, countItem }: LocalStorageProps) => {
  const { storage, setAttLocalStorage, attLocalStorage } = useContext(CartContext);

  const remove = () => {
    for (let i = 0; i < storage.length; i++) {
      console.log("popsition verify");
      if (storage[i].id === id) {
        if (storage[i].countItem >= 2) {
          storage[i].countItem = storage[i].countItem - 1;
          localStorage.setItem("carrinho", JSON.stringify(storage));
          setAttLocalStorage(!attLocalStorage);
          return;
        } else if (storage[i].countItem === 1) {
          storage.splice(i, 1);
          localStorage.setItem("carrinho", JSON.stringify(storage));
          setAttLocalStorage(!attLocalStorage);
          return;
        } else {
          return;
        }
      }
    }
  };
  const addItem = () => {
    for (let i = 0; i < storage.length; i++) {
      console.log("popsition verify");
      if (storage[i].id === id) {
        storage[i].countItem = storage[i].countItem + 1;
        localStorage.setItem("carrinho", JSON.stringify(storage));
        setAttLocalStorage(!attLocalStorage);
        return;
      }
    }
  };

  return (
    <div>
      <S.Item>
        <S.ConteinerFilme>
          <img src={`${URL_IMG}${poster_path}`} alt={title} />
          <p className="p">x</p>
          <S.Informacoes>
            <div className="text">
              <p className="title">{title}</p>
              <p className="id">ID:{id}</p>
            </div>
          </S.Informacoes>
        </S.ConteinerFilme>
        <S.CountPrice>
          <S.Count>
            <button onClick={remove}>-</button>
            <p>{countItem}</p>
            <button onClick={addItem}>+</button>
          </S.Count>
          <S.Price>
            <p>$$$</p>
          </S.Price>
        </S.CountPrice>
      </S.Item>
    </div>
  );
};

export default ItemCart;
