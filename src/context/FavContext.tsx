import { createContext, useEffect, useState } from "react";
import React from "react";

interface context {
  CountItemFav: number;
  setCountItemFav: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  CountItemFav: 0,
  setCountItemFav: () => {
    //nothing
  },
};
export const CountFavoritoContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const FavContext = ({ children }: props) => {
  console.log("contexto renderizou fav");

  const [CountItemFav, setCountItemFav] = useState<number>(0);

  useEffect(() => {
    const localStorageString = localStorage.getItem("favorito");
    if (typeof localStorageString != typeof "string") {
      localStorage.setItem("favorito", "[]");
    } else {
      const localStorageArray = JSON.parse(localStorageString!);
      setCountItemFav(localStorageArray.length);
    }
  }, [CountItemFav]);

  console.log(CountItemFav, "contexto");

  return <CountFavoritoContext.Provider value={{ CountItemFav, setCountItemFav }}>{children}</CountFavoritoContext.Provider>;
};

export default FavContext;
