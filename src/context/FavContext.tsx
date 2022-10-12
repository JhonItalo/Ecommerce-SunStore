import { createContext, useEffect, useState } from "react";
import React from "react";

interface context {
  Attfav: number;
  setAttfav: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  Attfav: 0,
  setAttfav: () => {
    //nothing
  },
};
export const FavoritoContext = createContext<context>(defaultValue);

interface props {
  children: React.ReactNode;
}
const FavContext = ({ children }: props) => {
  console.log("contexto renderizou fav");

  const [Attfav, setAttfav] = useState<number>(0);

  useEffect(() => {
    if (typeof localStorage.getItem("favorito") != typeof "string") {
      localStorage.setItem("favorito", "[]");
    } else {
      const responseString = localStorage.getItem("favorito");
      const responseArray = JSON.parse(responseString!);
      setAttfav(responseArray.length);
    }
  }, []);

  console.log(Attfav, "contexto");

  return (
    <FavoritoContext.Provider value={{ Attfav, setAttfav }}>{children}</FavoritoContext.Provider>
  );
};

export default FavContext;
