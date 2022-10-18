import { useEffect, useState, useContext } from "react";
import { CountFavoritoContext } from "../context/FavContext";

interface props {
  title: string;
  id: number;
  poster_path: string;
}

const UseAddFav = ({ title, id, poster_path }: props) => {
  const { CountItemFav, setCountItemFav } = useContext(CountFavoritoContext);
  const [AdiconarFavorito, setAdcionarFavorito] = useState<number>(0);

  const removefav = (array: props[], id: number): boolean => {
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
    if (AdiconarFavorito > 0) {
      const localStorageString = localStorage.getItem("favorito");
      const responseArray = JSON.parse(localStorageString!);
      if (removefav(responseArray, id)) {
        console.log("entrou no remove item");
        localStorage.setItem("favorito", JSON.stringify(responseArray));
        setCountItemFav(CountItemFav - 1);
        return;
      } else {
        console.log("entrou no add item item");
        responseArray.push({ title: title, id: id, poster_path: poster_path });
        localStorage.setItem("favorito", JSON.stringify(responseArray));
        setCountItemFav(CountItemFav + 1);
      }
    }
  }, [AdiconarFavorito, title, id, poster_path]);

  return { AdiconarFavorito, setAdcionarFavorito };
};

export default UseAddFav;
