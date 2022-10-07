import * as S from "./styles";
interface props {
  title: string;
  subtitle: string;
}
const TitleSection = ({ title, subtitle }: props) => {
  return (
    <>
      <S.title>
        <S.Itens>
          <div></div>
          <span> {title}</span>
          <div></div>
        </S.Itens>
        <h2>{subtitle}</h2>
      </S.title>
    </>
  );
};

export default TitleSection;
