import { Link } from "react-router-dom";
import * as S from "./Game.style";

interface GameProps {
  name: string;
  path: string;
  poster: string;
}

const Game = ({ name, path, poster }: GameProps) => {
  return (
    <Link to={path}>
      <S.Game>
        <S.PosterContainer>
          <S.Poster src={poster} alt={name} />
        </S.PosterContainer>
        <S.Info>
          <S.Name children={name} />
        </S.Info>
      </S.Game>
    </Link>
  );
};

export default Game;
