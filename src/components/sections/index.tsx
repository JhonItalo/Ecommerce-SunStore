import * as S from "./styles";

interface propsk {
  children: React.ReactNode;
}
const Sections = ({ children }: propsk) => {
  return <S.Sections>{children}</S.Sections>;
};

export default Sections;
