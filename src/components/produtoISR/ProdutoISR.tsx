import * as S from "./produtosISRST";
import { AiOutlineHeart } from "react-icons/ai";

interface props {
  produto: any;
}

const ProdutoISR = ({ produto }: props) => {
  return (
    <S.conteinerProduto>
      <S.sectionVenda>
        <img
          src={`https://image.tmdb.org/t/p/w400${produto.poster_path}`}
          alt=""
        />
        <S.favoritoCompra>
          <div className="fav">
            <AiOutlineHeart />
          </div>
          <S.compra>
            <p>Date: {produto.release_date}</p>
            <h3>{produto.title}</h3>
          </S.compra>
        </S.favoritoCompra>
      </S.sectionVenda>
    </S.conteinerProduto>
  );
};

export default ProdutoISR;
