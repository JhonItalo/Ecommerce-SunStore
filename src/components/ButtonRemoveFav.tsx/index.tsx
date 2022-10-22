import React, { ReactNode, useContext, useEffect, useState } from "react";
import { CountFavoritoContext } from "../../context/FavContext";
import { ReloadLocalStorageContext } from "../../context/ReloadLocalStorageContext";

interface props {
  id: number;
  children?: ReactNode;
}
const ButtonRemoveFav = ({ id, children }: props) => {
  const { ReloadLocalStorage, setReloadLocalStorage } = useContext(ReloadLocalStorageContext);
  const { CountItemFav, setCountItemFav } = useContext(CountFavoritoContext);
  const [deleteItem, setDeleteItem] = useState<number>(0);

  useEffect(() => {
    if (deleteItem > 0) {
      const localStorageString = localStorage.getItem("favorito");
      const localStorageArray = JSON.parse(localStorageString!);
      for (let i = 0; i < localStorageArray.length; i++) {
        if (localStorageArray[i].id === id) {
          localStorageArray.splice(i, 1);
          localStorage.setItem("favorito", JSON.stringify(localStorageArray));
          setDeleteItem(deleteItem + 1);
          setReloadLocalStorage(!ReloadLocalStorage);
          setCountItemFav(CountItemFav - 1);
          return;
        }
      }
    }
  }, [deleteItem]);

  return (
    <button className="removeFav" onClick={() => setDeleteItem(deleteItem + 1)}>
      {children}
    </button>
  );
};

export default ButtonRemoveFav;
