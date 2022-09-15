import { createContext, useEffect, useState } from "react";
import React from "react";

interface props {
  children: React.ReactNode;
}
interface context {
  Attfav: number;
  setAttfav: React.Dispatch<React.SetStateAction<number>>;
}
const defaultValue = {
  Attfav: 0,
  setAttfav: () => {},
};

export const FavoritoContext = createContext<context>(defaultValue);

function FavContext({ children }: props) {
  console.log("contexto renderizou fav");

  const [Attfav, setAttfav] = useState<number>(0);

  useEffect(() => {
    console.log("effect");
    if (typeof localStorage.getItem("favorito") != typeof "string") {
      localStorage.setItem("favorito", "[]");
      console.log("if");
    } else {
      console.log("else");
      const responseString = localStorage.getItem("favorito");
      const responseArray = JSON.parse(responseString);
      setAttfav(responseArray.length);
    }
  }, []);

  console.log(Attfav, "contexto");

  return (
    <FavoritoContext.Provider value={{ Attfav, setAttfav }}>
      {children}
    </FavoritoContext.Provider>
  );
}

export default FavContext;
