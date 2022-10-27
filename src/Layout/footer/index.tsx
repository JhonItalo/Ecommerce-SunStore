import React from "react";
import * as S from "./styles";
import {
  AiOutlineCopyrightCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
 
  return (
    <S.Footer>
      <p>
        E-commerce
        <span>
          <AiOutlineCopyrightCircle />
        </span>
      </p>
      <S.Redes>
        <Link href="https://www.linkedin.com/in/johnitalodev/">
          <a>
            <AiFillLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/JhonItalo">
          <a>
            <AiFillGithub />
          </a>
        </Link>
      </S.Redes>
    </S.Footer>
  );
};

export default Footer;
