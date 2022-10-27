import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FavoritoContext } from "../../context/FavContext";

interface props {
  id: number;
  children?: ReactNode;
}
const ButtonRemoveFav = ({ id, children }: props) => {
  const { storage, attLocalStorage, setAttLocalStorage } = useContext(FavoritoContext);
  const [deleteItem, setDeleteItem] = useState<number>(0);

  useEffect(() => {
    const localStorageCopy = storage;
    if (deleteItem > 0) {
      for (let i = 0; i < localStorageCopy.length; i++) {
        if (localStorageCopy[i].id === id) {
          localStorageCopy.splice(i, 1);
          localStorage.setItem("favorito", JSON.stringify(localStorageCopy));
          setAttLocalStorage(!attLocalStorage);
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
