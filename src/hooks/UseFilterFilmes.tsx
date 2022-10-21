import { useState } from "react";
import { FilmesSmall } from "../types";

interface props {
  filmes: FilmesSmall[];
}

const UseFilterFilmes = ({ filmes }: props) => {
  const [search, setSearch] = useState<string>("");
  let filterFilmes: FilmesSmall[] = [];
  if (search.length > 0 && filmes.length > 0) {
    filterFilmes = filmes.filter((filmes: FilmesSmall) => filmes.title.toLowerCase().includes(search));
  }
  return { search, setSearch, filterFilmes };
};

export default UseFilterFilmes;
