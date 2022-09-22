import * as S from "./styles";

import Busca from "../busca";
import { Favoritos } from "../favoritos";
import Carrinho from "../carrinho";

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
