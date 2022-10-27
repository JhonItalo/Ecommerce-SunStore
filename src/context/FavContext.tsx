import { createContext, useEffect, useState } from "react";
import React from "react";
import { FilmesShort } from "../types";

interface context {
  storage: FilmesShort[];
  attLocalStorage: boolean;
  setAttLocalStorage: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultValue = {
  storage: [],
  attLocalStorage: false,
  setAttLocalStorage: () => {
    //nothing
  },
};
export const FavoritoContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const FavContext = ({ children }: props) => {
  const [attLocalStorage, setAttLocalStorage] = useState<boolean>(false);
  const [storage, setStorage] = useState<FilmesShort[]>([]);

  useEffect(() => {
    const localStorageString = localStorage.getItem("favorito");
    if (typeof localStorageString != typeof "string") {
      localStorage.setItem("favorito", "[]");
    } else {
      const localStorageArray = JSON.parse(localStorageString!);
      setStorage(localStorageArray);
    }
  }, [attLocalStorage]);

  return <FavoritoContext.Provider value={{ attLocalStorage, setAttLocalStorage, storage }}>{children}</FavoritoContext.Provider>;
};

export default FavContext;
