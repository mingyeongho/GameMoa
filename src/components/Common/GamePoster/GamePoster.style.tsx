import styled from "styled-components";

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  overflow: hidden;
`;

export const PosterContainer = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

export const Poster = styled.img`
  transition: scale 0.2s;
  &:hover {
    scale: 1.2;
  }
`;

export const Info = styled.div`
  padding: 6px;
`;

export const Name = styled.span`
  font-size: 0.9rem;
`;
