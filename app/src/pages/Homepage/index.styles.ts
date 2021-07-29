import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { LinkProps } from "@material-ui/core";

interface Props {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
}

interface GridProps {
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;
}

interface CustomLinkProps extends LinkProps {
  path: string;
}

export const FlexBox = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export const Body = styled.div``;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0px;
`;

export const Header = styled.div`
  background-color: #1763af;
  display: flex;
  justify-content: flex-end;
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 2% 10%;
  grid-template-columns: 33% 33% 33%;

  ${media.lessThan("medium")`
    grid-template-columns: 50% 50%;
  `}

  ${media.lessThan("small")`
    grid-template-columns: 100%;
  `}
`;

export const FiltersContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30% 40% 30%;
  width: 50%;
`;

export const Tag = styled.h2<GridProps>`
  margin: 0;
  justify-self: end;
  align-self: center;

  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
`;

export const LinkedPage = styled(Link)<CustomLinkProps>`
  ${(props) =>
    props.path === props.to &&
    css`
      pointer-events: none;
      cursor: default;
      text-decoration: none;
      color: black;
    `}
`;
