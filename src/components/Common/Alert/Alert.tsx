import * as S from "./Alert.style";

interface Props {
  state: "danger";
}

const Alert = ({ state }: Props) => {
  return <S.AlertContainer state={state}></S.AlertContainer>;
};

export default Alert;
