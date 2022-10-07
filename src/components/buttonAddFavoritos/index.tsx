import React, { ReactNode, useContext } from "react";
import { FavoritoContext } from "../../context/FavContext";
import UseAddFav from "../../hooks/UseAddFav";


interface props {
  title: string;
  id: number;
  children: ReactNode;
}

const ButtonAddFavoritos = ({ title, id, children }: props) => {
  const { Attfav, setAttfav } = useContext(FavoritoContext);
  const { AdiconarFavorito, setAdcionarFavorito } = UseAddFav({ title, id });

  const handleClickAddFavoritos = () => {
    setAdcionarFavorito(AdiconarFavorito + 1);
    setAttfav(Attfav + 1);
  };

  return (
    <div className="fav" onClick={handleClickAddFavoritos}>
      {children}
    </div>
  );
};

export default ButtonAddFavoritos;
