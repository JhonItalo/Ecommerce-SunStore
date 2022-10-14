import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { FilmesMedian } from "../types";

interface propsContext {
  FilmesFilter: FilmesMedian[];
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
export const ProdutosFilterContex = createContext<propsContext>(defaultValueContext);

export const removeDuplicateFilmes = (array: FilmesMedian[]) => {
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
console.log("context produto");

interface props {
  categorys: {
    chair: FilmesMedian[];
    bed: FilmesMedian[];
    workDesk: FilmesMedian[];
    table: FilmesMedian[];
    sofaSet: FilmesMedian[];
  };
  children: React.ReactNode;
}

const ProdutosFilterContext = ({ categorys, children }: props) => {
  //console.log(categorys);
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
    (s: string, set: React.Dispatch<React.SetStateAction<FilmesMedian[]>>) => {
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
  const [FilmesFilter, setFilmesFilter] = useState<FilmesMedian[]>(allfilmes);

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
