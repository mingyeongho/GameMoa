import { IndexGameContents } from "../../utils/constant";
import Game from "../Game/Game";
import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Home>
      {IndexGameContents.map((game) => (
        <Game key={game.name} {...game} />
      ))}
    </S.Home>
  );
};

export default Home;
