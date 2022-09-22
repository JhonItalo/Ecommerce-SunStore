import * as S from "./styles";
import Link from "next/link";
const Banner = () => {
  return (
    <S.conteinerBanner>
      <S.texto>
        <p>Classic</p>
        <p>Design Room</p>
        <span>Get 15% Off On Order above $399</span>
        <Link href="/shop">
          <S.bannerLink>Shop Now</S.bannerLink>
        </Link>
      </S.texto>
    </S.conteinerBanner>
  );
};

export default Banner;
