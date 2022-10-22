import React, { useContext } from "react";
import { ItemCartProps } from "../../types";
import { URL_IMG } from "../../utils/Constants";
import * as S from "./styles";
import { ReloadLocalStorageContext } from "../../context/ReloadLocalStorageContext";
import { CartCountContext } from "../../context/CartCountContext";
//import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const ItemCart = ({ title, id, poster_path, countItem }: ItemCartProps) => {
  //const {}
  const { ReloadLocalStorage, setReloadLocalStorage } = useContext(ReloadLocalStorageContext);
  const { CountItemCart, setCountItemCart } = useContext(CartCountContext);

  const remove = () => {
    console.log("entrou");
    const n = localStorage.getItem("carrinho");
    console.log("strring", n);
    const h = JSON.parse(n!);
    console.log("array", h);
    for (let i = 0; i < h.length; i++) {
      console.log("popsition verify");
      if (h[i].id === id) {
        console.log("entrou no if");
        if (h[i].countItem >= 2) {
          console.log("maior que 2");
          h[i].countItem = h[i].countItem - 1;
          localStorage.setItem("carrinho", JSON.stringify(h));
          setReloadLocalStorage(!ReloadLocalStorage);
          return;
        } else if (h[i].countItem === 1) {
          console.log("igual a um");
          h.splice(i, 1);
          setCountItemCart(CountItemCart - 1);
          localStorage.setItem("carrinho", JSON.stringify(h));
          setReloadLocalStorage(!ReloadLocalStorage);
          return;
        } else {
          return;
        }
      }
    }
  };
  const addItem = () => {
    console.log("entrou");
    const n = localStorage.getItem("carrinho");
    console.log("strring", n);
    const h = JSON.parse(n!);
    console.log("array", h);
    for (let i = 0; i < h.length; i++) {
      console.log("popsition verify");
      if (h[i].id === id) {
        console.log("entrou no if");
        h[i].countItem = h[i].countItem + 1;
        localStorage.setItem("carrinho", JSON.stringify(h));
        setReloadLocalStorage(!ReloadLocalStorage);
        return;
      }
    }
  };

  return (
    <div>
      <S.FilmePrice>
        <S.ConteinerFilme>
          <img src={`${URL_IMG}${poster_path}`} alt={title} />
          <p className="p">x</p>
          <div className="infos">
            <div className="text">
              <p className="title">{title}</p>
              <p className="id">ID:{id}</p>
            </div>
            <div className="count">
              <button onClick={remove}>-</button>
              <p>{countItem}</p>
              <button onClick={addItem}>+</button>
            </div>
          </div>
        </S.ConteinerFilme>
        <S.Price>
          <p>Price</p>
          <p>$</p>
        </S.Price>
      </S.FilmePrice>
    </div>
  );
};

export default ItemCart;
