import { Link } from "react-router-dom";
import { LOGIN, LOGO } from "../../utils/constant";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link to={"/"}>{LOGO}</Link>
      </S.Logo>
      <S.Auth>
        <Link to="/signin">{LOGIN}</Link>
      </S.Auth>
    </S.Header>
  );
};

export default Header;
