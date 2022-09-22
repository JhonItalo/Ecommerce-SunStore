import Link from "next/link";
import TitleSection from "../titleSection";
import * as S from "./styles";

const TopCategory = () => {
  console.log("top category");
  return (
    <S.topcategory>
      <TitleSection title="Best Itens" subtitle="Top category" />
      
      <S.Flex>
        <S.itens>
          <Link href="/shop">
            <S.cards>
              <div>
                <img src="/assets/topCategory-chair.png" alt="" width="100%" />
              </div>
            </S.cards>
          </Link>
          <span>Chair</span>
        </S.itens>
        <S.itens>
          <Link href="/shop">
            <S.cards>
              <div>
                <img src="/assets/topCategory-cama.png" alt="" width="100%" />
              </div>
            </S.cards>
          </Link>
          <span>Bed</span>
        </S.itens>
        <S.itens>
          <Link href="/shop">
            <S.cards>
              <div>
                <img
                  src="/assets/topCategory-computer.png"
                  alt=""
                  width="100%"
                />
              </div>
            </S.cards>
          </Link>
          <span>Work Desk</span>
        </S.itens>
        <S.itens>
          <Link href="/shop">
            <S.cards>
              <div>
                <img
                  src="/assets/topCategory-cadeira.png"
                  alt=""
                  width="100%"
                />
              </div>
            </S.cards>
          </Link>
          <span>Table</span>
        </S.itens>
        <S.itens>
          <Link href="/shop">
            <S.cards>
              <div>
                <img
                  src="/assets/topCategory-sofaset.png"
                  alt=""
                  width="100%"
                />
              </div>
            </S.cards>
          </Link>
          <span>Sofa-Set</span>
        </S.itens>
      </S.Flex>
    </S.topcategory>
  );
};

export default TopCategory;
