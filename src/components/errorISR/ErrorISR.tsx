import * as S from "./errorISRST";
import { MdErrorOutline } from "react-icons/md";

const ErrorISR = () => {
  return (
    <S.conteinerError>
      <MdErrorOutline />
      <p>Este produto não existe.</p>
    </S.conteinerError>
  );
};

export default ErrorISR;
