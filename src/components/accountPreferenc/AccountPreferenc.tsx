import * as S from "./AccountPreferencST";

import { MdKeyboardArrowDown } from "react-icons/md";
const AccountPreferenc = () => {
  return (
    <S.AccPref>
      <S.icons>
        <span>USD</span>
        <MdKeyboardArrowDown />
      </S.icons>
      <S.icons>
        <span>English</span>
        <MdKeyboardArrowDown />
      </S.icons>
      <S.icons>
        <span>My Account</span>
        <MdKeyboardArrowDown />
      </S.icons>
    </S.AccPref>
  );
};

export default AccountPreferenc;
