import { useState, useEffect } from "react";
import { FilmesShort } from "../types";

const UseFavorito = () => {
  const [favoritos, setFavoritos] = useState<FilmesShort[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  console.log(favoritos, "fav");

  useEffect(() => {
    const localStorageString = localStorage.getItem("favorito");
    if (typeof localStorageString === typeof "string") {
      const localStorageArray = JSON.parse(localStorageString!);
      setFavoritos(localStorageArray);
    }
  }, [reload]);
  return { favoritos, reload, setReload };
};

export default UseFavorito;
