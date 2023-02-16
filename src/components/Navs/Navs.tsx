import { Link } from "react-router-dom";
import { LOGO, NavItems } from "../../utils/constant";
import * as S from "./Navs.style";

const Navs = () => {
  return (
    <S.NavsContainer>
      <S.Logo children={<Link to="/">{LOGO}</Link>} />
      <S.Navs>
        {NavItems.map((navItem) => (
          <S.NavItem
            key={navItem.alt}
            children={<Link to={navItem.to}>{navItem.text}</Link>}
          />
        ))}
      </S.Navs>
    </S.NavsContainer>
  );
};

export default Navs;
