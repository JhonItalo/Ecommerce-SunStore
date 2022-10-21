import React from "react";
import { ItemCartProps } from "../../types";
import { URL_IMG } from "../../utils/Constants";
import * as S from "./styles";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

const ItemCart = ({ title, id, poster_path, countItem }: ItemCartProps) => {
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
              <button>-</button>
              <p>{countItem}</p>
              <button>+</button>
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
