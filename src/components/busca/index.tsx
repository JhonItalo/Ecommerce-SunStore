import React, { useState, useRef, useEffect } from "react";
import Router, { useRouter } from "next/router";
import * as S from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import { RequestFilmesSearch } from "../../request/FilmesSearchInput";
import ItemSearch from "../itemSearch/ItemSearch";
interface responsemodel {
  title: string;
  id: number;
}

const Busca = () => {
  const resetcomponent = useRouter();
  console.log("busca render");
  const [active, setactive] = useState<string>("off");
  const [filmes, setfilmes] = useState<any | null>(null);
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (active === "on") {
      inputRef.current!.focus();
    }
  }, [active, filmes]);

  useEffect(() => {
    setactive("off");
    setSearch("");
  }, [resetcomponent]);

  const handleClickBusca = async () => {
    setactive("on");
    RequestFilmesSearch(filmes, setfilmes);
  };

  const ChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  let filterFilmes: responsemodel[] = [];
  if (search.length > 0 && filmes != null) {
    filterFilmes = filmes.filter((filmes: any) => filmes.title.toLowerCase().includes(search));
  }

  return (
    <S.ConteinerBusca
      onScroll={(e) => e.stopPropagation()}
      onClick={handleClickBusca}
      active={active === "on"}
      onDoubleClick={() => setactive("off")}
    >
      <input ref={inputRef} onChange={ChangeInput} value={search} type="text" maxLength={35} />
      <HiOutlineSearch />
      {search.length > 0 && (
        <ul className="listFilmes">
          {filterFilmes.length > 0 &&
            filterFilmes.map((item: any) => (
              <ItemSearch key={item.id} title={item.title} id={item.id} resetSearch={setSearch} />
            ))}
        </ul>
      )}
    </S.ConteinerBusca>
  );
};

export default Busca;
