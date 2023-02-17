import { ChangeEvent, FormEvent, useState } from "react";
import { SIGNIN } from "../../../utils/constant";

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

const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({ id: "", password: "" });
  const { id, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("로그인 로직");
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
      children: "ID",
      htmlFor: "id",
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
