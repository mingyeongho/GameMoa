import { Link } from "react-router-dom";
import { SIGNIN } from "../../utils/constant";
import useSignup from "./hooks/useSignup";
import * as S from "./Signup.style";

const Signup = () => {
  const { InputProps, LabelProps, ButtonProps, onSignup } = useSignup();
  return (
    <S.SignupContainer>
      <S.Signup onSubmit={onSignup}>
        <S.InputContainer>
          <S.Label {...LabelProps.email} />
          <S.Input {...InputProps.email} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...LabelProps.password} />
          <S.Input {...InputProps.password} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...LabelProps.nickname} />
          <S.Input {...InputProps.nickname} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...LabelProps.profileColor} />
          <S.Input {...InputProps.profileColor} />
        </S.InputContainer>
        <S.Button {...ButtonProps} />
      </S.Signup>
      <S.SignInLink>
        <Link to="/signin">{SIGNIN}</Link>
      </S.SignInLink>
    </S.SignupContainer>
  );
};

export default Signup;
