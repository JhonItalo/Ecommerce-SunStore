import Link from "next/link";
import * as S from "./styles";
const Banner = () => {
  return (
    <S.ConteinerBanner>
      <S.Text>
        <p>Classic</p>
        <p>Design Room</p>
        <span>Get 15% Off On Order above $399</span>
        <Link href="/shop">
          <S.BannerLink>Shop Now</S.BannerLink>
        </Link>
      </S.Text>
    </S.ConteinerBanner>
  );
};

export default Banner;
