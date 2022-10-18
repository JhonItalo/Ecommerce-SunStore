import React, { useState, useEffect } from "react";
import { FilmesShort } from "../types";

const UseFavorito = () => {
  const [favoritos, setFavoritos] = useState<FilmesShort[]>([]);
  const [reload, setReload] = useState<number>(0);

  console.log(favoritos, "fav");

  useEffect(() => {
    const localStorageString = localStorage.getItem("favorito");
    if (typeof localStorageString === typeof "string") {
      const localStorageArray = JSON.parse(localStorageString!);
      setFavoritos(localStorageArray);
    }
  }, []);

  useEffect(() => {
    if (reload > 0) {
      const localStorageString = localStorage.getItem("favorito");
      if (typeof localStorageString === typeof "string") {
        const localStorageArray = JSON.parse(localStorageString!);
        setFavoritos(localStorageArray);
      }
    }
  }, [reload]);
  return { favoritos, reload, setReload };
};

export default UseFavorito;
