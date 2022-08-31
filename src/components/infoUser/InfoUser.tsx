import * as S from "./infoUserST";

import { MdKeyboardArrowDown } from "react-icons/md";
const InfoUser = () => {
  return (
    <S.user>
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
    </S.user>
  );
};

export default InfoUser;
