import React, { useState } from "react";
import * as S from "./styles";
import { BiMenu } from "react-icons/bi";
import Busca from "../busca";
import Nav from "../../Layout/nav";

const MenuMobile = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const handleMenu = (e: React.FormEvent<HTMLButtonElement>) => {
    setActiveModal(!activeModal);
    e.stopPropagation();
  };
  return (
    <S.MenuMobile active={activeModal}>
      <S.Buttons active={activeModal}>
        <button className="menu" onClick={handleMenu}>
          <BiMenu />
        </button>
        <Busca />
      </S.Buttons>
      <S.Opcoes active={activeModal}>
        <Nav mobile={true} />
      </S.Opcoes>
    </S.MenuMobile>
  );
};

export default MenuMobile;
/**   */
