export const isIdValid = (id: string) => {
  return id.length >= 2 && id.length <= 8 ? true : false;
};

export const isPasswordValid = (password: string) => {
  return password.length >= 8 && password.length <= 16 ? true : false;
};

export const isSignupValid = ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  return isIdValid(id) && isPasswordValid(password);
};
