import React, { ReactNode, useContext } from "react";
//import * as S from "./styles";
import { FavoritoContext } from "../../context/FavContext";
import UseAddFav from "../../hooks/UseAddFav";
//import { AiOutlineHeart } from "react-icons/ai";

interface props {
  title: string;
  id: number;
  children: ReactNode;
}

const ButtonAddFavoritos = ({ title, id, children }: props) => {
  const { Attfav, setAttfav } = useContext(FavoritoContext);
  const { setAdcionarFavorito } = UseAddFav({ title, id });

  const handleClickAddFavoritos = () => {
    setAdcionarFavorito(true);
    setAttfav(Attfav + 1);
  };

  return (
    <div className="fav" onClick={handleClickAddFavoritos}>
      {children}
    </div>
  );
};

export default ButtonAddFavoritos;
