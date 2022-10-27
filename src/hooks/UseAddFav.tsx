import { useEffect, useState, useContext } from "react";
import { FavoritoContext } from "../context/FavContext";
import { FilmesShort } from "../types";

const UseAddFav = ({ title, id, poster_path }: FilmesShort) => {
  const { attLocalStorage, setAttLocalStorage, storage } = useContext(FavoritoContext);
  const [AdiconarFavorito, setAdcionarFavorito] = useState<number>(0);

  const removeItem = (array: FilmesShort[], id: number): boolean => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array.splice(i, 1);
        i--;
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const localStorageCopy = storage;
    if (AdiconarFavorito > 0) {
      if (removeItem(localStorageCopy, id)) {
        localStorage.setItem("favorito", JSON.stringify(localStorageCopy));
        setAttLocalStorage(!attLocalStorage);
        return;
      } else {
        localStorageCopy.push({ title: title, id: id, poster_path: poster_path });
        localStorage.setItem("favorito", JSON.stringify(localStorageCopy));
        setAttLocalStorage(!attLocalStorage);
      }
    }
  }, [AdiconarFavorito, title, id, poster_path]);

  return { AdiconarFavorito, setAdcionarFavorito };
};

export default UseAddFav;
