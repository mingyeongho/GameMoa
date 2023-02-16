import ChessContainer from "../components/Chess/ChessContainer";
import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const Chess = () => {
  return <ChessContainer />;
};

export default withAuth(withNavs(Chess));
