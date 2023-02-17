import { ChangeEvent, FormEvent, useState } from "react";
import { isIdValid, isPasswordValid } from "../../../function/valid";
import { SIGNUP } from "../../../utils/constant";

interface InputProp {
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  type: "text" | "password";
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

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({ id: "", password: "" });
  const { id, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignup = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("회원가입 로직");
    setInputs({
      id: "",
      password: "",
    });
    setIsLoading(false);
  };

  const InputProps: { id: InputProp; password: InputProp } = {
    id: {
      value: id,
      placeholder: "2자 이상 8자 이하 입력해주세요.",
      onChange,
      name: "id",
      id: "id",
      type: "text",
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

  const LabelProps: { id: LabelProp; password: LabelProp } = {
    id: {
      children: isIdValid(id) ? "ID 😄" : "ID 😡",
      htmlFor: "id",
    },
    password: {
      children: isPasswordValid(password) ? "Password 😄" : "Password 😡",
      htmlFor: "password",
    },
  };

  const ButtonProps: ButtonProp = {
    children: isLoading ? "Loading..." : SIGNUP,
    type: "submit",
  };

  return { InputProps, LabelProps, ButtonProps, onSignup };
};

export default useSignup;
