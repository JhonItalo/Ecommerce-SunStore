import * as S from "./headerST";
import Link from "next/link";
import InfoUser from "../infoUser/InfoUser";
import CarrinhoBusca from "../carrinhoBusca/CarrinhoBusca";

const Header = () => {
  console.log("header render");
  return (
    <S.header>
      <S.content>
        <InfoUser />
        <Link href="/">
          <a className="logo">
            <h1>SunStore .</h1>
          </a>
        </Link>
        <CarrinhoBusca />
      </S.content>
    </S.header>
  );
};

export default Header;
