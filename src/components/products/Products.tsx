import * as S from "./productsST";
import { useContext, useEffect, memo, useState, useRef } from "react";
import { CartContext } from "../../context/CarrinhoContext";
import { AiOutlineHeart } from "react-icons/ai";
import { FavoritoContext } from "../../context/FavContext";
import Link from "next/link";

interface props {
  title: string;
  path: string;
  id: number;
}

const Products = ({ title, path, id }: props) => {
  const [spanColor, setSpanColor] = useState<boolean>(false);

  const { AttCart, setAttCart } = useContext(CartContext);
  const { Attfav, setAttfav } = useContext(FavoritoContext);

  const [AdiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);
  const [AdiconarFavorito, setAdcionarFavorito] = useState<number>(0);

  useEffect(() => {
    if (AdiconarCarrinho > 0) {
      if (typeof localStorage.getItem("carrinho") != typeof "string") {
        console.log("if produto");
        localStorage.setItem(
          "carrinho",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        console.log("else produto");
        const responseString = localStorage.getItem("carrinho");
        console.log(responseString);
        const responseArray = JSON.parse(responseString);
        console.log(responseArray);
        responseArray.push({ title: title, id: id });
        setAttCart(AttCart + 1);
        localStorage.setItem("carrinho", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarCarrinho, title, id]);

  useEffect(() => {
    if (AdiconarFavorito > 0) {
      if (typeof localStorage.getItem("favorito") != typeof "string") {
        console.log("if produto");
        localStorage.setItem(
          "favorito",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        console.log("else produto");
        const responseString = localStorage.getItem("favorito");
        console.log(responseString);
        const responseArray = JSON.parse(responseString);
        console.log(responseArray);
        responseArray.push({ title: title, id: id });
        setAttfav(Attfav + 1);
        localStorage.setItem("favorito", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarFavorito]);

  return (
    <S.itens>
      <S.produtoImage>
        <Link href={`produtos/${id}`}>
          <a>
            <img
              src={`https://image.tmdb.org/t/p/w300${path}`}
              width="100%"
              alt={title}
            />
          </a>
        </Link>
        <S.favorito
          onClick={() => setAdcionarFavorito(AdiconarFavorito + 1)}
          active={spanColor}
          onMouseOver={() => setSpanColor(true)}
          onMouseOut={() => setSpanColor(false)}
        >
          <AiOutlineHeart />
        </S.favorito>
      </S.produtoImage>
      <p>{title}</p>
      <button
        onClick={() => {
          setAdcionarCarrinho(AdiconarCarrinho + 1);
        }}
      >
        Add to Cart
      </button>
    </S.itens>
  );
};

export default memo(Products);
