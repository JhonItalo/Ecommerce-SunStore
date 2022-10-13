import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { BiMenu } from "react-icons/bi";
import Busca from "../busca";
import Nav from "../../Layout/nav";
import { useRouter } from "next/router";

const MenuMobile = () => {
  const rotaAtual = useRouter();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const handleMenu = (e: React.FormEvent<HTMLButtonElement>) => {
    setActiveModal(!activeModal);
    e.stopPropagation();
  };
  useEffect(() => {
    setActiveModal(false);
  }, [rotaAtual]);

  return (
    <S.MenuMobile active={activeModal}>
      <S.Buttons active={activeModal}>
        <button className="menu" onClick={handleMenu}>
          <BiMenu />
        </button>
        <Busca mobile />
      </S.Buttons>
      <S.Opcoes active={activeModal}>
        <Nav mobile />
      </S.Opcoes>
    </S.MenuMobile>
  );
};

export default MenuMobile;
/**   */
