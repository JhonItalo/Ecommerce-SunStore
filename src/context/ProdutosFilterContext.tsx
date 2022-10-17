import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { FilmesMedian } from "../types";
import { removeDuplicateFilmesMedian } from "../utils/Fuctions";

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

const FilmesContext = ({ categorys, children }: props) => {
  const allFilmes: FilmesMedian[] = useMemo(() => {
    const median = categorys.chair.concat(categorys.bed, categorys.workDesk, categorys.table, categorys.sofaSet);
    return removeDuplicateFilmesMedian(median);
  }, [categorys]);

  const verifyCategory = useCallback(
    (categoria: string, setFilterFilmes: React.Dispatch<React.SetStateAction<FilmesMedian[]>>) => {
      switch (categoria) {
        case "Chair":
          setFilterFilmes(categorys.chair);
          break;
        case "Bed":
          setFilterFilmes(categorys.bed);
          break;
        case "Work Desk":
          setFilterFilmes(categorys.workDesk);
          break;
        case "Table":
          setFilterFilmes(categorys.table);
          break;
        case "Sofa-set":
          setFilterFilmes(categorys.sofaSet);
          break;
        case "":
          setFilterFilmes(allFilmes);
          break;
      }
    },
    [categorys, allFilmes]
  );
  const [Atualcategory, setAtualCategory] = useState<string>("");
  const [FilmesFilter, setFilmesFilter] = useState<FilmesMedian[]>(allFilmes);

  useEffect(() => {
    verifyCategory(Atualcategory, setFilmesFilter);
  }, [Atualcategory, categorys, verifyCategory]);

  return (
    <ProdutosFilterContex.Provider value={{ FilmesFilter, Atualcategory, setAtualCategory }}>
      {children}
    </ProdutosFilterContex.Provider>
  );
};

export default FilmesContext;
