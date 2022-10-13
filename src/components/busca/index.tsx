import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import { RequestFilmesSearch } from "../../request/FilmesSearchInput";
import ItemSearch from "../itemSearch/ItemSearch";
import { FilmesSmall } from "../../types";
interface props {
  mobile?: boolean;
}
const Busca = ({ mobile }: props) => {
  console.log("busca render");
  const resetcomponent = useRouter();
  const [activeInputsearch, setactiveInputsearch] = useState<string>("off");
  const [filmes, setfilmes] = useState<any | null>(null);
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickBusca = async () => {
    setactiveInputsearch("on");
    RequestFilmesSearch(filmes, setfilmes);
  };

  useEffect(() => {
    if (activeInputsearch === "on") {
      inputRef.current!.focus();
    }
  }, [activeInputsearch, filmes]);

  useEffect(() => {
    setactiveInputsearch("off");
    setSearch("");
  }, [resetcomponent]);

  const ChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  let filterFilmes: FilmesSmall[] = [];
  if (search.length > 0 && filmes != null) {
    filterFilmes = filmes.filter((filmes: any) => filmes.title.toLowerCase().includes(search));
  }

  return (
    <S.ConteinerBusca
      mobile={mobile}
      className="ConteinerBusca"
      onScroll={(e) => e.stopPropagation()}
      onClick={handleClickBusca}
      active={activeInputsearch === "on"}
      onDoubleClick={() => setactiveInputsearch("off")}
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
