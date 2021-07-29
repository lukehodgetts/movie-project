import styled from "styled-components";

interface Props {
  rating: number;
}

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #00000f;
  border-radius: 10px;
  padding: 0px 10px;
  margin: 6px;
  /* max-width: 20%; */
  /* width: 350px; */
  height: 160px;

  transition: transform 0.7s ease-in-out;
  :hover {
    transform: rotate(360deg);
    cursor: no-drop;
  }
`;

export const Rating = styled.h2<Props>`
  color: ${(props) =>
    props.rating > 7 ? "green" : props.rating > 4 ? "orange" : "red"};
  -webkit-text-stroke: 0.5px #00000f;
`;

export const Title = styled.h1`
  margin-bottom: 0px;
  font-size: 24px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
