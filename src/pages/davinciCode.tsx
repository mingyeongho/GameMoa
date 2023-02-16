import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const DavinciCode = () => {
  return <div>DavinciCode</div>;
};

export default withAuth(withNavs(DavinciCode));
