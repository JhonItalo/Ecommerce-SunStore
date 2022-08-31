import * as S from "./carrinhoBuscaST";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const CarrinhoBusca = () => {
  return (
    <S.icons>
      <HiOutlineSearch />
      <AiOutlineHeart />
      <AiOutlineShoppingCart />
    </S.icons>
  );
};

export default CarrinhoBusca;
