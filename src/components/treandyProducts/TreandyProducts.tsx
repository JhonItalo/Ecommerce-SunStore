import React, { useState } from "react";

import TitleSection from "../titleSection/TitleSection";
import Products from "../products/Products";
import * as S from "./treandyProductsST";

interface objectmodel {
  title: string;
  id: number;
  poster_path: string;
}
interface props {
  newP: objectmodel[];
  feature: objectmodel[];
  best: objectmodel[];
}
const TreandyProducts = ({ newP, feature, best }: props) => {
  console.log("trendly render");
  const [opcListaProdutos, setopcListaProdutos] = useState<string>("new");
  console.log("renderizou");
  return (
    <>
      <S.treandyProducts>
        <TitleSection title="Lastest Items" subtitle="Treandy Products" />

        <S.opcoes>
          <S.button
            onClick={() => setopcListaProdutos("new")}
            active={opcListaProdutos === "new"}
          >
            New Products
          </S.button>
          <S.button
            onClick={() => setopcListaProdutos("feature")}
            active={opcListaProdutos === "feature"}
          >
            Feature Products
          </S.button>
          <S.button
            onClick={() => setopcListaProdutos("best")}
            active={opcListaProdutos === "best"}
          >
            Best Seller
          </S.button>
        </S.opcoes>

        <S.listProducts>
          {opcListaProdutos === "new" &&
            newP.map((items) => (
              <Products
                key={items.id}
                title={items.title}
                path={items.poster_path}
                id={items.id}
              />
            ))}

          {opcListaProdutos === "feature" &&
            feature.map((items) => (
              <Products
                key={items.id}
                title={items.title}
                path={items.poster_path}
                id={items.id}
              />
            ))}

          {opcListaProdutos === "best" &&
            best.map((items) => (
              <Products
                key={items.id}
                title={items.title}
                path={items.poster_path}
                id={items.id}
              />
            ))}
        </S.listProducts>
      </S.treandyProducts>
    </>
  );
};

export default TreandyProducts;
