import * as S from "./styles";
import CarrinhoBuscaFav from "../../carrinhoBuscaFav";
import AccountPreferenc from "../../accountPreferenc";
import Logo from "../../logo";
import MenuMobile from "../../menuMobile";

const Header = () => {
  console.log("header render");
  return (
    <S.Header>
      <S.Content>
        <MenuMobile />
        <AccountPreferenc />
        <Logo />
        <CarrinhoBuscaFav />
      </S.Content>
    </S.Header>
  );
};

export default Header;
