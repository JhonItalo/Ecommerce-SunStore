import * as S from "./navST";
import { useRouter } from "next/router";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  console.log("nav render");
  const rotaAtual = useRouter();
  const borderActive = (opc: string) => {
    return rotaAtual.pathname === opc ? "active" : "";
  };
  //

  return (
    <S.nav>
      <ul>
        <S.li active={borderActive("/")}>
          <Link href="/">
            <S.navlink>Home</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/shop")}>
          <Link href="/shop">
            <S.navlink>
              Shop
              <MdKeyboardArrowDown />
            </S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/decorations")}>
          <Link href="/decorations">
            <S.navlink>Decorations</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/chair")}>
          <Link href="/chair">
            <S.navlink>Chair</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/topsale")}>
          <Link href="/topsale">
            <S.navlink>Top sale</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/brands")}>
          <Link href="/brands">
            <S.navlink>Brands</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/blog")}>
          <Link href="/blog">
            <S.navlink>Blog</S.navlink>
          </Link>
        </S.li>

        <S.li active={borderActive("/more")}>
          <Link href="/more">
            <S.navlink>
              More
              <MdKeyboardArrowDown />
            </S.navlink>
          </Link>
        </S.li>
      </ul>
    </S.nav>
  );
};

export default Nav;
