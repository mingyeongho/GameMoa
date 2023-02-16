import { ComponentType } from "react";
import { auth } from "../firebase/firebase";
import Signin from "../pages/signin";

const withAuth = (Component: ComponentType) => (props: any) => {
  const isLoggedIn = auth.currentUser;

  if (!isLoggedIn) {
    return <Signin />;
  }

  return <Component {...props} />;
};

export default withAuth;
