import { useState, useEffect } from "react";
import { ItemCartProps } from "../types";

const UseFavorito = () => {
  const [carrinho, setCarrinho] = useState<ItemCartProps[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    const localStorageString = localStorage.getItem("carrinho");
    if (typeof localStorageString === typeof "string") {
      const localStorageArray = JSON.parse(localStorageString!);
      setCarrinho(localStorageArray);
    }
  }, [reload]);
  return { carrinho, reload, setReload };
};

export default UseFavorito;
