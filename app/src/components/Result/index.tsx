import React from "react";
import { useHistory } from "react-router-dom";
import { Body, Rating, Title, Details } from "./index.styles";
import { FlexBox } from "../../pages/Homepage/index.styles";
import Movie from "../../pages/Movie";

interface Props {
  _id: string;
  title: string;
  released: number;
  rating: number;
}

const Result: React.FC<Props> = ({ title, released, rating, _id }) => {
  let history = useHistory();

  return (
    <Body onClick={() => history.push(`/movie/${_id}`)}>
      <Title>{title}</Title>
      <Details>
        <h2>{"released: " + released}</h2>
        <Rating rating={rating}>{rating}</Rating>
      </Details>
    </Body>
  );
};

export default Result;
