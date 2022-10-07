import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <S.Logo>SunStore .</S.Logo>
      </a>
    </Link>
  );
};

export default Logo;
