export const isEmailValid = (email: string) => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email) ? true : false;
};

export const isPasswordValid = (password: string) => {
  return password.length >= 8 && password.length <= 16 ? true : false;
};

export const isNicknameValid = (nickname: string) => {
  return nickname.length >= 2 && nickname.length <= 8 ? true : false;
};

export const isSignupValid = ({
  email,
  password,
  nickname,
}: {
  email: string;
  password: string;
  nickname: string;
}) => {
  return (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    isNicknameValid(nickname)
  );
};
