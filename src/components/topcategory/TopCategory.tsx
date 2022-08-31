import TitleSection from "../titleSection/TitleSection";
import * as S from "./topCategoryST";

const TopCategory = () => {
  return (
    <S.topcategory>
      <TitleSection title="Best Itens" subtitle="Top category" />
      <S.Flex>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/teste.png" alt="" width="75%" />
            </div>
          </S.cards>
          <span>Chair</span>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/bege.png" alt="" width="75%" />
            </div>
          </S.cards>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/bege2.png" alt="" width="75%" />
            </div>
          </S.cards>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/teste.png" alt="" width="75%" />
            </div>
          </S.cards>
        </S.itens>
        <S.itens>
          <S.cards>
            <div>
              <img src="/assets/teste.png" alt="" width="75%" />
            </div>
          </S.cards>
        </S.itens>
      </S.Flex>
    </S.topcategory>
  );
};

export default TopCategory;
