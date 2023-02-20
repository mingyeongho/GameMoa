import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  background-color: ${Palette.primary};
  color: white;
`;

export const Logo = styled.h1``;

export const Auth = styled.span``;

export const UserContainer = styled.div`
  position: relative;
`;

export const User = styled.button`
  cursor: pointer;
  background-color: inherit;
  color: white;
  border: none;
  outline: none;
  font-size: 1.125rem;
`;

export const Popover = styled.div`
  position: absolute;
  left: -100px;
  top: 30px;
  border-radius: 10px;
  background-color: white;
  width: 140px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Logout = styled.button`
  cursor: pointer;
  background-color: inherit;
  color: black;
  border: none;
  outline: none;
`;
