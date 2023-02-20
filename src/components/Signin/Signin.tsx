import { Link } from "react-router-dom";
import { SIGNUP } from "../../utils/constant";
import useSignin from "./hooks/useSignin";
import * as S from "./Signin.style";

const Signin = () => {
  const { InputProps, LabelProps, ButtonProps, onSignin } = useSignin();

  return (
    <S.SigninContainer>
      <S.Signin onSubmit={onSignin}>
        <S.InputContainer>
          <S.Label {...LabelProps.email} />
          <S.Input {...InputProps.email} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...LabelProps.password} />
          <S.Input {...InputProps.password} />
        </S.InputContainer>
        <S.Button {...ButtonProps} />
      </S.Signin>
      <S.SignUpLink>
        <Link to="/signup">{SIGNUP}</Link>
      </S.SignUpLink>
    </S.SigninContainer>
  );
};

export default Signin;
