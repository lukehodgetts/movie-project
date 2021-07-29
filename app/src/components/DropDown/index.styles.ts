import styled from "styled-components";

interface Props {
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;
}

export const Menu = styled.select<Props>`
  border-radius: 6px;
  border: 2px solid #00000f;
  font-size: 26px;
  text-indent: 8px;
  margin: 0px 0px 2px;

  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;