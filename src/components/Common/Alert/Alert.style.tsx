import styled from "styled-components";

const color = {
  danger: "#842029",
};

const background_color = {
  danger: "#f8d7da",
};

const border_color = {
  danger: "#f5c2c7",
};

export const AlertContainer = styled.div<{ state: "danger" }>`
  min-width: 250px;
  height: 50px;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: ${(props) => color[props.state]};
  background-color: ${(props) => background_color[props.state]};
  border-color: ${(props) => border_color[props.state]};
`;
