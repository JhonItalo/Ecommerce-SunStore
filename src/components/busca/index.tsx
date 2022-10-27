import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import ItemSearch from "../itemSearch/ItemSearch";
import { RequestFilmesSearch } from "../../request/FilmesSearchInput";
import { FilmesSmall } from "../../types";
import UseFilterFilmes from "../../hooks/UseFilterFilmes";
interface props {
  mobile?: boolean;
}
const Busca = ({ mobile }: props) => {
  const [filmes, setFilmes] = useState<FilmesSmall[]>([]);
  const { search, setSearch, filterFilmes } = UseFilterFilmes({ filmes });
  const resetcomponent = useRouter();
  const [activeInputSearch, setActiveInputSearch] = useState<string>("off");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickBusca = useCallback(() => {
    setActiveInputSearch("on");
    RequestFilmesSearch(filmes, setFilmes);
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

  return (
    <S.ConteinerBusca
      mobile={mobile}
      active={activeInputSearch === "on"}
      className="ConteinerBusca"
      onClick={handleClickBusca}
      onDoubleClick={() => setActiveInputSearch("off")}
      onScroll={(e) => e.stopPropagation()}
    >
      <input ref={inputRef} onChange={ChangeInput} value={search} type="text" maxLength={35} />
      <HiOutlineSearch />
      <ul className="listFilmes">
        {filterFilmes.length > 0 &&
          filterFilmes.map((item: FilmesSmall) => (
            <ItemSearch key={item.id} title={item.title} id={item.id} resetSearch={setSearch} />
          ))}
      </ul>
    </S.ConteinerBusca>
  );
};

export default Busca;
