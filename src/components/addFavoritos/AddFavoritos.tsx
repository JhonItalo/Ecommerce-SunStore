import React, { useState, useContext, useEffect } from "react";
import * as S from "./AddFavoritosST";
import { FavoritoContext } from "../../context/FavContext";
import { AiOutlineHeart } from "react-icons/ai";

interface props {
  title: string;
  id: number;
}

const AddFavoritos = ({ title, id }: props) => {
  const [AdiconarFavorito, setAdcionarFavorito] = useState<number>(0);
  const [spanColor, setSpanColor] = useState<boolean>(false);

  const { Attfav, setAttfav } = useContext(FavoritoContext);

  useEffect(() => {
    if (AdiconarFavorito > 0) {
      if (typeof localStorage.getItem("favorito") != typeof "string") {
        localStorage.setItem(
          "favorito",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        const responseString = localStorage.getItem("favorito");
        console.log(responseString);
        const responseArray = JSON.parse(responseString);
        responseArray.push({ title: title, id: id });
        setAttfav(Attfav + 1);
        localStorage.setItem("favorito", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarFavorito]);
  return (
    <S.favorito
      onClick={() => setAdcionarFavorito(AdiconarFavorito + 1)}
      active={spanColor}
      onMouseOver={() => setSpanColor(true)}
      onMouseOut={() => setSpanColor(false)}
    >
      <AiOutlineHeart />
    </S.favorito>
  );
};

export default AddFavoritos;
