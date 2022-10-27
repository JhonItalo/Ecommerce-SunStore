import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
interface props {
  mobile?: boolean;
}

const Nav = ({ mobile }: props) => {
  const rotaAtual = useRouter();

  const borderActive = (opc: string) => {
    return rotaAtual.pathname === opc ? "active" : "";
  };

  return (
    <S.Nav mobile={mobile} className="ConteinerNav">
      <ul>
        <S.Li active={borderActive("/")}>
          <Link href="/">
            <S.Navlink>Home</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/shop")}>
          <Link href="/shop">
            <S.Navlink>Shop</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/decorations")}>
          <Link href="/decorations">
            <S.Navlink>Decorations</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/chair")}>
          <Link href="/chair">
            <S.Navlink>Chair</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/topsale")}>
          <Link href="/topsale">
            <S.Navlink>Top sale</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/brands")}>
          <Link href="/brands">
            <S.Navlink>Brands</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/blog")}>
          <Link href="/blog">
            <S.Navlink>Blog</S.Navlink>
          </Link>
        </S.Li>

        <S.Li active={borderActive("/more")}>
          <Link href="/more">
            <S.Navlink>
              More
              <MdKeyboardArrowDown />
            </S.Navlink>
          </Link>
        </S.Li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
