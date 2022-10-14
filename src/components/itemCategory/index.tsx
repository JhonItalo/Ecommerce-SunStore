import React, { useState, useContext } from "react";
import * as S from "./styles";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { ProdutosFilterContex } from "../../context/ProdutosFilterContext";

interface props {
  title: string;
  children?: React.ReactNode;
}

const ItemCategory = ({ title, children }: props) => {
  const { Atualcategory, setAtualCategory } = useContext(ProdutosFilterContex);

  const [activeSubCategory, setactiveSubCategory] = useState<boolean>(false);

  const handleActiveCategory = () => {
    if (Atualcategory === title) {
      setAtualCategory("");
      setactiveSubCategory(false);
    } else {
      setAtualCategory(title);
      setactiveSubCategory(true);
    }
  };
  return (
    <S.CategoryLi active={activeSubCategory}>
      <S.Topic onClick={handleActiveCategory}>
        <p>{title}</p>
        {activeSubCategory ? (
          <CgMathMinus onClick={handleActiveCategory} />
        ) : (
          <CgMathPlus onClick={handleActiveCategory} />
        )}
      </S.Topic>
      {children}
    </S.CategoryLi>
  );
};

export default ItemCategory;
