import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const SigninContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 260px;
  padding: 40px;
  border-radius: 20px;
`;

export const Signin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #ddd;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: ${Palette.primary};
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Button = styled.button`
  background-color: ${Palette.primary};
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  color: white;
  font-size: 1.125rem;

  &:hover {
    background-color: ${Palette.primary_light};
    cursor: pointer;
  }
`;

export const SignUpLink = styled.span`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`;
