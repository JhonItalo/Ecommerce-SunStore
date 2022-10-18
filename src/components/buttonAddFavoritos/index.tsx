import React, { ReactNode} from "react";

import UseAddFav from "../../hooks/UseAddFav";

interface props {
  title: string;
  id: number;
  poster_path: string;
  children?: ReactNode;
}

const ButtonAddFavoritos = ({ title, id, poster_path, children }: props) => {
  const { AdiconarFavorito, setAdcionarFavorito } = UseAddFav({ title, id, poster_path });

  const handleClickAddFavoritos = () => {
    setAdcionarFavorito(AdiconarFavorito + 1);
  };

  return (
    <div className="fav" onClick={handleClickAddFavoritos}>
      {children}
    </div>
  );
};

export default ButtonAddFavoritos;
