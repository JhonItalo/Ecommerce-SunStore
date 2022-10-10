import * as S from "./styles";
import CarrinhoBuscaFav from "../../components/carrinhoBuscaFav";
import AccountPreferenc from "../../components/accountPreferenc";
import Logo from "../../components/logo";
import MenuMobile from "../../components/menuMobile";

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
