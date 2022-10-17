import React from "react";
import * as S from "./styles";
import ItemCategory from "../itemCategory";

const NavCategory = () => {
  return (
    <S.Category>
      <p className="fp">filtrado por:</p>
      <p className="filtros">Filtros</p>
      <ItemCategory title="Chair">
        <S.SubCategory className="subcategory">
          <li>
            <label>
              Metal:
              <input type="checkbox" name="metal" />
            </label>
          </li>
        </S.SubCategory>
      </ItemCategory>
      <ItemCategory title="Bed">
        <S.SubCategory className="subcategory">
          <li>
            <label>
              Box:
              <input type="checkbox" name="box" />
            </label>
          </li>
          <li>
            <label>
              Ortopédica:
              <input type="checkbox" name="orto" />
            </label>
          </li>
          <li>
            <label>
              Queen:
              <input type="checkbox" name="queen" />
            </label>
          </li>
        </S.SubCategory>
      </ItemCategory>
      <ItemCategory title="Work Desk">
        <S.SubCategory className="subcategory">
          <li>
            <label>
              Madeira:
              <input type="checkbox" name="madeira" />
            </label>
          </li>
          <li>
            <label>
              Granito:
              <input type="checkbox" name="granito" />
            </label>
          </li>
        </S.SubCategory>
      </ItemCategory>
      <ItemCategory title="Table" />
      <ItemCategory title="Sofa-set" />
    </S.Category>
  );
};

export default NavCategory;
