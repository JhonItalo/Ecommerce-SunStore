import Link from "next/link";
import * as S from "./bannerSecondSt";

const bannerSecond = () => {
  return (
    <S.bannerSecond>
      <S.item>
        <img
          src="/assets/bannerSecond-cadeira.png"
          alt="Cadeira"
          width="45%"
          height="auto"
        />
        <div className="left">
          <p className="titleFirst">Seating</p>
          <p>New Collection</p>
          <Link href="/shop">
            <S.bannerLink>Shop Now</S.bannerLink>
          </Link>
        </div>
      </S.item>

      <S.item>
        <div>
          <p className="titleFirst">Modern</p>
          <p>Sofa Suniture</p>
          <Link href="/shop">
            <S.bannerLink>Shop Now</S.bannerLink>
          </Link>
        </div>
        <img src="/assets/bannerSecond-sofa.png" alt="sofa" width="47%" />
      </S.item>
    </S.bannerSecond>
  );
};

export default bannerSecond;
