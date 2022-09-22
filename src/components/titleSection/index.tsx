import * as S from "./styles";
interface props {
  title: string;
  subtitle: string;
}
const TitleSection = ({ title, subtitle }: props) => {
  return (
    <>
      <S.title>
        <S.bestItens>
          <div></div>
          <span> {title}</span>
          <div></div>
        </S.bestItens>
        <h2>{subtitle}</h2>
      </S.title>
    </>
  );
};

export default TitleSection;
