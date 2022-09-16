import React, { useState } from "react";
import * as S from "./BuscaSt";
import { HiOutlineSearch } from "react-icons/hi";

const Busca = () => {
  const [inputOn, setinputOn] = useState<string>("off");
  return (
    <S.busca active={inputOn === "on"} onDoubleClick={() => setinputOn("off")}>
      <input type="text" maxLength={50} />

      <HiOutlineSearch onClick={() => setinputOn("on")} />
    </S.busca>
  );
};

export default Busca;
