import * as S from "./styles";
import Link from "next/link";
import CarrinhoBuscaFav from "../../carrinhoBuscaFav";
import AccountPreferenc from "../../accountPreferenc";

const Header = () => {
  console.log("header render");
  return (
    <S.header>
      <S.content>
        <AccountPreferenc />
        <Link href="/">
          <a className="logo">
            <h1>SunStore .</h1>
          </a>
        </Link>
        <CarrinhoBuscaFav />
      </S.content>
    </S.header>
  );
};

export default Header;
