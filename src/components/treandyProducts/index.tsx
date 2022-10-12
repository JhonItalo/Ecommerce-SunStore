import React, { useState } from "react";
import TitleSection from "../titleSection";
import Products from "../products";
import * as S from "./styles";
import { FilmesShort } from "../../types";

interface props {
  newP: FilmesShort[];
  feature: FilmesShort[];
  best: FilmesShort[];
}
const TreandyProducts = ({ newP, feature, best }: props) => {
  console.log("trendly render");
  const [opcListaProdutos, setopcListaProdutos] = useState<string>("new");
  return (
    <>
      <S.TreandyProducts>
        <TitleSection title="Lastest Items" subtitle="Treandy Products" />

        <S.Opcoes>
          <S.Button onClick={() => setopcListaProdutos("new")} active={opcListaProdutos === "new"}>
            New Products
          </S.Button>
          <S.Button
            onClick={() => setopcListaProdutos("feature")}
            active={opcListaProdutos === "feature"}
          >
            Feature Products
          </S.Button>
          <S.Button
            onClick={() => setopcListaProdutos("best")}
            active={opcListaProdutos === "best"}
          >
            Best Seller
          </S.Button>
        </S.Opcoes>

        <S.ListProducts>
          {opcListaProdutos === "new" &&
            newP.map((items) => (
              <Products
                type="s"
                width="22%"
                height="380px"
                key={items.id}
                title={items.title}
                poster_path={items.poster_path}
                id={items.id}
              />
            ))}

          {opcListaProdutos === "feature" &&
            feature.map((items) => (
              <Products
                type="s"
                width="22%"
                height="380px"
                key={items.id}
                title={items.title}
                poster_path={items.poster_path}
                id={items.id}
              />
            ))}

          {opcListaProdutos === "best" &&
            best.map((items) => (
              <Products
                type="s"
                width="22%"
                height="380px"
                key={items.id}
                title={items.title}
                poster_path={items.poster_path}
                id={items.id}
              />
            ))}
        </S.ListProducts>
      </S.TreandyProducts>
    </>
  );
};

export default TreandyProducts;
