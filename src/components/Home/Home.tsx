import { IndexGameContents } from "../../utils/constant";
import GamePoster from "../Common/GamePoster/GamePoster";
import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Home>
      {IndexGameContents.map((game) => (
        <GamePoster key={game.name} {...game} />
      ))}
    </S.Home>
  );
};

export default Home;
