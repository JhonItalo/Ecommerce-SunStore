import Link from "next/link";
import * as S from "./styles";


const bannerSecond = () => {
  console.log("render banner second");
  return (
    <S.ConteinerBannerSecond>
      <S.Item>
        <img src="/assets/bannerSecond-cadeira.webp" alt="Cadeira" width="45%" height="auto" />
        <div className="left">
          <p className="titleFirst">Seating</p>
          <p>New Collection</p>
          <Link href="/shop">
            <S.BannerLink>Shop Now</S.BannerLink>
          </Link>
        </div>
      </S.Item>

      <S.Item>
        <div>
          <p className="titleFirst">Modern</p>
          <p>Sofa Suniture</p>
          <Link href="/shop">
            <S.BannerLink>Shop Now</S.BannerLink>
          </Link>
        </div>
        <img src="/assets/bannerSecond-sofa.webp" alt="sofa" width="44%" />
      </S.Item>
    </S.ConteinerBannerSecond>
  );
};

export default bannerSecond;
