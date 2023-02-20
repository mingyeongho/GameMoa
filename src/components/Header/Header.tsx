import { Link } from "react-router-dom";
import { SIGNIN, LOGO, LOGOUT } from "../../utils/constant";
import * as S from "./Header.style";
import useHeader from "./hooks/useHeader";

const Header = () => {
  const { currentUser, isOpen, onOpenPopover, onLogout } = useHeader();

  return (
    <S.Header>
      <S.Logo>
        <Link to={"/"}>{LOGO}</Link>
      </S.Logo>
      {currentUser ? (
        <S.UserContainer>
          <S.User children={currentUser.displayName} onClick={onOpenPopover} />
          {isOpen && (
            <S.Popover
              children={<S.Logout children={LOGOUT} onClick={onLogout} />}
            />
          )}
        </S.UserContainer>
      ) : (
        <S.Auth>
          <Link to="/signin">{SIGNIN}</Link>
        </S.Auth>
      )}
    </S.Header>
  );
};

export default Header;
