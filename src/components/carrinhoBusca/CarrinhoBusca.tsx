import * as S from "./carrinhoBuscaST";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const CarrinhoBusca = () => {
  return (
    <S.icons>
      <S.busca>
        <input type="text" maxLength={20} />
        <HiOutlineSearch />
      </S.busca>
      <AiOutlineHeart />
      <AiOutlineShoppingCart />
    </S.icons>
  );
};

export default CarrinhoBusca;
