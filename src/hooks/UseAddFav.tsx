import React, { useEffect, useState } from "react";

interface props {
  title: string;
  id: number;
}

const UseAddFav = ({ title, id }: props) => {
  const [AdiconarFavorito, setAdcionarFavorito] = useState<boolean>(false);

  useEffect(() => {
    if (AdiconarFavorito === true) {
      if (typeof localStorage.getItem("favorito") != typeof "string") {
        localStorage.setItem(
          "favorito",
          JSON.stringify([{ title: title, id: id }])
        );
      } else {
        const responseString = localStorage.getItem("favorito");
        console.log(responseString);
        const responseArray = JSON.parse(responseString);
        responseArray.push({ title: title, id: id });
        localStorage.setItem("favorito", JSON.stringify(responseArray));
      }
    }
  }, [AdiconarFavorito]);

  return { setAdcionarFavorito };
};

export default UseAddFav;
