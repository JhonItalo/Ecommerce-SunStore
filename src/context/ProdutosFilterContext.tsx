import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";

interface response {
  title: string[];
  id: number[];
  poster_path: string[];
}
interface props {
  categorys: {
    chair: response[];
    bed: response[];
    workDesk: response[];
    table: response[];
    sofaSet: response[];
  };
  children: React.ReactNode;
}
interface propsContext {
  FilmesFilter: response[];
  Atualcategory: string;
  setAtualCategory: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValueContext = {
  FilmesFilter: [],
  Atualcategory: "",
  setAtualCategory: () => {
    // do nothing.
  },
};
export const removeDuplicateFilmes = (array: response[]) => {
  for (let h = 0; h < array.length; h++) {
    for (let l = h + 1; l < array.length; l++) {
      if (array[h].title === array[l].title) {
        array.splice(l, 1);
        l = l - 1;
      }
    }
  }
  return array;
};

export const ProdutosFilterContex = createContext<propsContext>(defaultValueContext);
console.log("context produto");

const ProdutosFilterContext = ({ categorys, children }: props) => {
  console.log(categorys);
  const allfilmes = useMemo(
    () =>
      removeDuplicateFilmes(
        categorys.chair.concat(
          categorys.bed,
          categorys.workDesk,
          categorys.table,
          categorys.sofaSet
        )
      ),
    [categorys]
  );

  const VerifyCategory = useCallback(
    (s: string, set: React.Dispatch<React.SetStateAction<response[]>>) => {
      switch (s) {
        case "Chair":
          set(categorys.chair);
          break;
        case "Bed":
          set(categorys.bed);
          break;
        case "Work Desk":
          set(categorys.workDesk);
          break;
        case "Table":
          set(categorys.table);
          break;
        case "Sofa-set":
          set(categorys.sofaSet);
          break;
        case "":
          set(allfilmes);
          break;
      }
    },
    [categorys, allfilmes]
  );
  const [Atualcategory, setAtualCategory] = useState<string>("");
  const [FilmesFilter, setFilmesFilter] = useState<response[]>(allfilmes);

  useEffect(() => {
    VerifyCategory(Atualcategory, setFilmesFilter);
  }, [Atualcategory, categorys, VerifyCategory]);

  return (
    <ProdutosFilterContex.Provider value={{ FilmesFilter, Atualcategory, setAtualCategory }}>
      {children}
    </ProdutosFilterContex.Provider>
  );
};

export default ProdutosFilterContext;
