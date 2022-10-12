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

  const handleDisableCategory = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setactiveSubCategory(false);
  };
  const handleActiveCategory = () => {
    setactiveSubCategory(true);
    if (Atualcategory === title) {
      setAtualCategory("");
    } else {
      setAtualCategory(title);
    }
  };
  return (
    <S.CategoryLi active={activeSubCategory} onClick={handleActiveCategory}>
      <S.Topic>
        <p>{title}</p>
        {activeSubCategory ? <CgMathMinus onClick={handleDisableCategory} /> : <CgMathPlus />}
      </S.Topic>
      {children}
    </S.CategoryLi>
  );
};

export default ItemCategory;
