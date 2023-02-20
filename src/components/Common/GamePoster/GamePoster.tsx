import { Link } from "react-router-dom";
import * as S from "./GamePoster.style";

interface GameProps {
  name: string;
  path: string;
  poster: string;
}

const GamePoster = ({ name, path, poster }: GameProps) => {
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

export default GamePoster;
