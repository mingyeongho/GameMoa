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
          <S.Label {...LabelProps.id} />
          <S.Input {...InputProps.id} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...LabelProps.password} />
          <S.Input {...InputProps.password} />
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
