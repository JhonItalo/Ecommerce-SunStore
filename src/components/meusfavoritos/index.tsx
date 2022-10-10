import React, { useEffect, useState } from "react";
import * as S from "./styles";
/*
interface objectmodel {
  title: string;
  id: number;
}
export const removeDuplicateFilmes = (array: objectmodel[]) => {
  for (let h = 0; h < array.length; h++) {
    for (let l = h + 1; l < array.length; l++) {
      if (array[h].title === array[l].title) {
        array.splice(l, 1);
        l = l - 1;
      }
    }
  }
  return array;
};*/
const MeusFavortios = () => {
  /*
  const [fav, setfav] = useState<objectmodel[]>([]);
  useEffect(() => {
    const n = localStorage.getItem("carrinho");
    if (typeof n === typeof "string") {
      console.log(typeof n);
      const h = JSON.parse(n!);
      console.log(h);
      setfav(removeDuplicateFilmes(h));
    }
  }, []);
*/
  return (
    <div>
      teste
      {/*fav.length > 0 && fav.map((item: objectmodel) => <li key={item.id}>{item.title}</li>)*/}
    </div>
  );
};

export default MeusFavortios;
