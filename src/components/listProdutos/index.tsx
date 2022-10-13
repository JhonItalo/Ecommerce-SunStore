import React, { useContext } from "react";
import * as S from "./styles";
import Products from "../products";
import { ProdutosFilterContex } from "../../context/ProdutosFilterContext";

const ListProdutos = () => {
  const { FilmesFilter, Atualcategory } = useContext(ProdutosFilterContex);
  return (
    <S.ConteinerListProduts>
      <h3>{Atualcategory != "" ? Atualcategory : ""}</h3>
      <div className="infosAdicionais">
        <p>
          <span>{FilmesFilter.length}</span> produtos encontrados
        </p>
        <select defaultValue="relevãncia">
          <option value="relevância">relevância</option>
          <option value="mais vendidos">mais vendidos</option>
          <option value="maior preço">maior preço</option>
          <option value="menor preço">menor preço</option>
        </select>
      </div>
      <S.ListProducts>
        {FilmesFilter.map((item: any) => (
          <Products
            key={item.id}
            type="l"
            width="28%"
            height="400px"
            title={item.title}
            id={item.id}
            poster_path={item.poster_path}
          />
        ))}
      </S.ListProducts>
    </S.ConteinerListProduts>
  );
};

export default ListProdutos;
