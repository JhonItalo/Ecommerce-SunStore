import React, { useEffect, useState } from "react";

interface props {
  title: string;
  id: number;
}

const UseAddFav = ({ title, id }: props) => {
  const [AdiconarFavorito, setAdcionarFavorito] = useState<number>(0);

  useEffect(() => {
    if (AdiconarFavorito > 0) {
      if (typeof localStorage.getItem("favorito") != typeof "string") {
        localStorage.setItem("favorito", JSON.stringify([{ title: title, id: id }]));
      } else {
        const responseString = localStorage.getItem("favorito");
        const responseArray = JSON.parse(responseString!);
        responseArray.push({ title: title, id: id });
        localStorage.setItem("favorito", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarFavorito, title, id]);

  return { AdiconarFavorito, setAdcionarFavorito };
};

export default UseAddFav;
