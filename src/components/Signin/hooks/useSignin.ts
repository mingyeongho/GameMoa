import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { SIGNIN } from "../../../utils/constant";

interface InputProp {
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  type: "text" | "password" | "email";
  autoComplete: "off" | "on";
}

interface LabelProp {
  children: string;
  htmlFor: string;
}

interface ButtonProp {
  children: string;
  type: "submit";
}

const useSignin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => navigate("/"))
      .catch(({ code, message }) => console.log(code, message));

    setInputs({
      email: "",
      password: "",
    });
    setIsLoading(false);
  };

  const InputProps: { email: InputProp; password: InputProp } = {
    email: {
      value: email,
      placeholder: "example@naver.com",
      onChange,
      name: "email",
      id: "email",
      type: "email",
      autoComplete: "off",
    },
    password: {
      value: password,
      placeholder: "8자 이상 16자 이하 입력해주세요.",
      onChange,
      name: "password",
      id: "password",
      type: "password",
      autoComplete: "off",
    },
  };

  const LabelProps: { email: LabelProp; password: LabelProp } = {
    email: {
      children: "E-mail",
      htmlFor: "email",
    },
    password: {
      children: "Password",
      htmlFor: "password",
    },
  };

  const ButtonProps: ButtonProp = {
    children: isLoading ? "Loading..." : SIGNIN,
    type: "submit",
  };

  return { InputProps, LabelProps, ButtonProps, onSignin };
};

export default useSignin;
