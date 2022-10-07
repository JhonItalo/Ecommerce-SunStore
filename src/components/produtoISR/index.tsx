import * as S from "./styles";
import Image from "next/image";
import ButtonAddCart from "../buttonAddCart";
import ButtonAddFavoritos from "../buttonAddFavoritos";
import { AiOutlineStar } from "react-icons/ai";

interface props {
  produto: any;
}

const ProdutoISR = ({ produto }: props) => {
  return (
    <S.conteinerProduto>
      <S.ConteinerImage>
        <Image
          src={`https://image.tmdb.org/t/p/w400${produto.poster_path}`}
          alt={produto.title}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
      </S.ConteinerImage>

      <S.ConteinerInfos>
        <S.titles>
          <h2 className="title">{produto.title}</h2>
          <p className="subtitle">{produto.tagline}</p>
        </S.titles>

        <S.Descricao>
          <span>Descrição: </span>
          <p>{produto.overview}</p>
        </S.Descricao>

        <S.genero>
          <span className="genre">Genêro:</span>
          {produto.genres.map((item: any) => (
            <p key={item.id}>{`- ${item.name} -`}</p>
          ))}
        </S.genero>

        <S.Producao>
          <span>Produção -</span>
          {produto.production_companies.map((item: any) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </S.Producao>

        <S.buttons>
          <ButtonAddFavoritos title={produto.title} id={produto.id}>
            Add to Favoritos
          </ButtonAddFavoritos>
          <ButtonAddCart title={produto.title} id={produto.id} />
        </S.buttons>
      </S.ConteinerInfos>

      <S.Nota>
        <p>{produto.vote_average.toFixed(1)}</p>
        <AiOutlineStar />
      </S.Nota>
    </S.conteinerProduto>
  );
};

export default ProdutoISR;
