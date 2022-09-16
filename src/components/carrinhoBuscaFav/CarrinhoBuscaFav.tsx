import * as S from "./carrinhoBuscaST";

import Busca from "../busca/Busca";
import { Favoritos } from "../favoritos/Favoritos";
import Carrinho from "../carrinho/Carrinho";

const CarrinhoBuscaFav = () => {
  return (
    <S.icons>
      <Busca />
      <Favoritos />
      <Carrinho />
    </S.icons>
  );
};

export default CarrinhoBuscaFav;
