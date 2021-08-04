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
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0 auto;
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% 60% 25%;
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
  /* margin-left: auto; */
  /* float: right; */

  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;
