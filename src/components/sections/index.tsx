import * as S from "./styles";

interface propsk {
  children: React.ReactNode;
}
const Sections = ({ children }: propsk) => {
  return <S.sections>{children}</S.sections>;
};

export default Sections;
