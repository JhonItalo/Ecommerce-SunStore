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
const renderCategory = (category: string, { newP, feature, best }: props) => {
  if (category === "new") {
    return opcaoAtual(newP);
  } else if (category === "feature") {
    return opcaoAtual(feature);
  } else if (category === "best") {
    return opcaoAtual(best);
  } else {
    return;
  }
};
const opcaoAtual = (array: FilmesShort[]) => {
  return array.map((item: FilmesShort) => (
    <Products type="s" width="22%" height="380px" key={item.id} title={item.title} poster_path={item.poster_path} id={item.id} />
  ));
};

const TreandyProducts = ({ newP, feature, best }: props) => {
  const [category, setCategory] = useState<string>("new");
  return (
    <>
      <S.TreandyProducts>
        <TitleSection title="Lastest Items" subtitle="Treandy Products" />
        <S.Opcoes>
          <S.Button onClick={() => setCategory("new")} active={category === "new"}>
            New Products
          </S.Button>
          <S.Button onClick={() => setCategory("feature")} active={category === "feature"}>
            Feature Products
          </S.Button>
          <S.Button onClick={() => setCategory("best")} active={category === "best"}>
            Best Seller
          </S.Button>
        </S.Opcoes>

        <S.ListProducts>{renderCategory(category, { newP, feature, best })}</S.ListProducts>
      </S.TreandyProducts>
    </>
  );
};

export default TreandyProducts;
