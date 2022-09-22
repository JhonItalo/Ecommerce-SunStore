import React from "react";
import * as S from "./styles";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <S.Footer>
      <p>
        E-commerce
        <span>
          <AiOutlineCopyrightCircle />
        </span>
      </p>
      <p>By: John Ítalo</p>
    </S.Footer>
  );
};

export default Footer;
