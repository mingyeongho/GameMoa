import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const Index = () => {
  return <div>Index</div>;
};

export default withAuth(withNavs(Index));
