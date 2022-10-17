import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import ItemSearch from "../itemSearch/ItemSearch";
import { RequestFilmesSearch } from "../../request/FilmesSearchInput";
import { FilmesSmall } from "../../types";
interface props {
  mobile?: boolean;
}
const Busca = ({ mobile }: props) => {
  console.log("busca render");
  const resetcomponent = useRouter();
  const [activeInputSearch, setActiveInputSearch] = useState<string>("off");
  const [filmes, setFilmes] = useState<FilmesSmall[]>([]);
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickBusca = useCallback(() => {
    RequestFilmesSearch(filmes, setFilmes);
    setActiveInputSearch("on");
  }, [filmes]);

  useEffect(() => {
    if (activeInputSearch === "on") {
      inputRef.current!.focus();
    }
  }, [activeInputSearch, filmes]);

  useEffect(() => {
    setActiveInputSearch("off");
    setSearch("");
  }, [resetcomponent]);

  const ChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  let filterFilmes: FilmesSmall[] = [];
  if (search.length > 0 && filmes != null) {
    filterFilmes = filmes.filter((filmes: FilmesSmall) => filmes.title.toLowerCase().includes(search));
  }

  return (
    <S.ConteinerBusca
      mobile={mobile}
      className="ConteinerBusca"
      onScroll={(e) => e.stopPropagation()}
      onClick={handleClickBusca}
      active={activeInputSearch === "on"}
      onDoubleClick={() => setActiveInputSearch("off")}
    >
      <input ref={inputRef} onChange={ChangeInput} value={search} type="text" maxLength={35} />
      <HiOutlineSearch />
      {search.length > 0 && (
        <ul className="listFilmes">
          {filterFilmes.length > 0 &&
            filterFilmes.map((item: FilmesSmall) => (
              <ItemSearch key={item.id} title={item.title} id={item.id} resetSearch={setSearch} />
            ))}
        </ul>
      )}
    </S.ConteinerBusca>
  );
};

export default Busca;
