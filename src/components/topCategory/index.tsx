import Link from "next/link";
import TitleSection from "../titleSection";
import * as S from "./styles";

const TopCategory = () => {
  return (
    <S.Topcategory>
      <TitleSection title="Best Itens" subtitle="Top category" />
      <S.Flex>
        <S.Itens>
          <Link href="/shop">
            <S.CardLink>
              <div className="border">
                <img src="/assets/topCategory-chair.png" alt="chair" width="100%" />
              </div>
            </S.CardLink>
          </Link>
          <span>Chair</span>
        </S.Itens>
        <S.Itens>
          <Link href="/shop">
            <S.CardLink>
              <div>
                <img src="/assets/topCategory-cama.png" alt="" width="100%" />
              </div>
            </S.CardLink>
          </Link>
          <span>Bed</span>
        </S.Itens>
        <S.Itens>
          <Link href="/shop">
            <S.CardLink>
              <div>
                <img src="/assets/topCategory-computer.png" alt="" width="100%" />
              </div>
            </S.CardLink>
          </Link>
          <span>Work Desk</span>
        </S.Itens>
        <S.Itens>
          <Link href="/shop">
            <S.CardLink>
              <div>
                <img src="/assets/topCategory-cadeira.png" alt="" width="100%" />
              </div>
            </S.CardLink>
          </Link>
          <span>Table</span>
        </S.Itens>
        <S.Itens>
          <Link href="/shop">
            <S.CardLink>
              <div>
                <img src="/assets/topCategory-sofaset.png" alt="" width="100%" />
              </div>
            </S.CardLink>
          </Link>
          <span>Sofa-Set</span>
        </S.Itens>
      </S.Flex>
    </S.Topcategory>
  );
};

export default TopCategory;
