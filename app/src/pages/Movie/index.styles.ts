import styled from "styled-components";

interface GridProps {
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;
}

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 85%;
`;

export const Header = styled.div`
  min-height: 80px;
  background-color: #ffffff;
  border: 2px solid #00000f;
  border-radius: 12px;
  justify-content: center;
  display: flex;
  margin: 0 auto;
`;

export const Title = styled.h1``;

export const MovieContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% 50% 30%;
  margin: 10px 0px 0px 0px;
`;

export const StatHeader = styled.h2<GridProps>`
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;

export const Stat = styled.h2<GridProps>`
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;

export const Poster = styled.img<GridProps>`
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;
