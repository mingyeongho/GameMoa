import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const NavsContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  background-color: ${Palette.primary};
  color: white;
`;

export const Logo = styled.h1`
  margin-right: 20px;
`;

export const Navs = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const NavItem = styled.li`
  display: flex;
  padding: 10px;
`;
