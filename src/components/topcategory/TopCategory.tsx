import TitleSection from "../titleSection/TitleSection";
import * as S from "./topCategoryST";

const TopCategory = () => {
  console.log("top category");
  return (
    <S.topcategory>
      <TitleSection title="Best Itens" subtitle="Top category" />
      <S.Flex>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/topCategory-chair.png" alt="" width="100%" />
            </div>
          </S.cards>
          <span>Chair</span>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/topCategory-cama.png" alt="" width="100%" />
            </div>
          </S.cards>
          <span>Bed</span>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/topCategory-computer.png" alt="" width="100%" />
            </div>
          </S.cards>
          <span>Work Desk</span>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/topCategory-cadeira.png" alt="" width="100%" />
            </div>
          </S.cards>
          <span>Table</span>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/topCategory-sofaset.png" alt="" width="100%" />
            </div>
          </S.cards>
          <span>Sofa-Set</span>
        </S.itens>
      </S.Flex>
    </S.topcategory>
  );
};

export default TopCategory;
