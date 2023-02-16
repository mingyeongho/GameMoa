import { ComponentType } from "react";
import Navs from "../components/Navs/Navs";

const withNavs = (Component: ComponentType) => (props: any) => {
  return (
    <>
      <Navs />
      <Component {...props} />
    </>
  );
};

export default withNavs;
