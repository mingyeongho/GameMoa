import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import {
  isEmailValid,
  isNicknameValid,
  isPasswordValid,
  isSignupValid,
} from "../../../function/valid";
import { SIGNUP } from "../../../utils/constant";

interface InputProp {
  value: string;
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  type: "text" | "password" | "email" | "color";
  autoComplete: "off" | "on";
}

interface LabelProp {
  children: string;
  htmlFor: string;
}

interface ButtonProp {
  children: string;
  type: "submit";
  disabled: boolean;
}

const useSignup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    profileColor: "#000000",
  });
  const { email, password, nickname, profileColor } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignup = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: nickname });

        const userRef = doc(db, "Users", user.uid);
        const payload = {
          email,
          password,
          nickname,
          profileColor,
        };
        setDoc(userRef, payload);
        navigate("/signin");
      })
      .catch(({ code, message }) => {
        console.log(code, message);
      });

    setInputs({
      email: "",
      password: "",
      nickname: "",
      profileColor: "#000000",
    });
    setIsLoading(false);
  };

  const InputProps: {
    email: InputProp;
    password: InputProp;
    nickname: InputProp;
    profileColor: InputProp;
  } = {
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
      placeholder: "8~16자리",
      onChange,
      name: "password",
      id: "password",
      type: "password",
      autoComplete: "off",
    },
    nickname: {
      value: nickname,
      placeholder: "2~8자리",
      onChange,
      name: "nickname",
      id: "nickname",
      type: "text",
      autoComplete: "off",
    },
    profileColor: {
      value: profileColor,
      placeholder: "",
      onChange,
      name: "profileColor",
      id: "profileColor",
      type: "color",
      autoComplete: "off",
    },
  };

  const LabelProps: {
    email: LabelProp;
    password: LabelProp;
    nickname: LabelProp;
    profileColor: LabelProp;
  } = {
    email: {
      children: isEmailValid(email) ? "E-mail 😄" : "E-mail 😡",
      htmlFor: "email",
    },
    password: {
      children: isPasswordValid(password) ? "Password 😄" : "Password 😡",
      htmlFor: "password",
    },
    nickname: {
      children: isNicknameValid(nickname) ? "Nickname 😄" : "Nickname 😡",
      htmlFor: "nickname",
    },
    profileColor: {
      children: `Profile Color: ${profileColor}`,
      htmlFor: "profileColor",
    },
  };

  const ButtonProps: ButtonProp = {
    children: isLoading ? "Loading..." : SIGNUP,
    type: "submit",
    disabled: !isSignupValid({ email, password, nickname }),
  };

  return { InputProps, LabelProps, ButtonProps, onSignup };
};

export default useSignup;
