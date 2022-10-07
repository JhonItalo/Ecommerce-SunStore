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

  const [active, setactive] = useState<boolean>(false);

  const handleDisableCategory = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setactive(false);
  };
  const handleActiveCategory = () => {
    setactive(true);
    if (Atualcategory === title) {
      setAtualCategory("");
    } else {
      setAtualCategory(title);
    }
  };
  return (
    <S.CategoryLi active={active} onClick={handleActiveCategory}>
      <S.Topic>
        <p>{title}</p>
        {active ? <CgMathMinus onClick={handleDisableCategory} /> : <CgMathPlus />}
      </S.Topic>
      {children}
    </S.CategoryLi>
  );
};

export default ItemCategory;
