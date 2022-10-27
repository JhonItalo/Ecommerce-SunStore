import * as S from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";

const AccountPreferenc = () => {
  return (
    <S.AccPref>
      <S.Icons>
        <span>USD</span>
        <MdKeyboardArrowDown />
      </S.Icons>
      <S.Icons>
        <span>English</span>
        <MdKeyboardArrowDown />
      </S.Icons>
      <S.Icons>
        <span>My Account</span>
        <MdKeyboardArrowDown />
      </S.Icons>
    </S.AccPref>
  );
};

export default AccountPreferenc;
