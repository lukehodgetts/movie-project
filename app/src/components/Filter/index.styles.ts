import styled from "styled-components";

interface Props {
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;
  isValid?: boolean;
}

export const Input = styled.input<Props>`
  height: 40px;
  width: 100%;
  border-radius: 6px;
  border: 2px solid ${(props) => props.isValid ? 'black' : 'red'};
  font-size: 26px;
  text-indent: 8px;
  margin: 0px 0px 2px;

  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};

  :focus {
    outline: none;
  }
`;
