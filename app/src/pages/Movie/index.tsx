import React from "react";
import useAxios from "axios-hooks";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Movie } from "../Homepage";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

import {
  Wrapper,
  Header,
  Title,
  MovieContainer,
  StatHeader,
  Stat,
  Poster,
} from "./index.styles";

interface Params {
  id: string;
}

const MoviePage = () => {
  let { id } = useParams<Params>();

  const location = useLocation();
  console.log(location.pathname);

  const [{ data: movie, loading, error }] = useAxios<Movie>(
    `http://localhost:8080/movies/${id}`
  );

  const [
    {
      data: movieDetails,
      loading: loadingMovieDetails,
      error: movieDetailsError,
    },
  ] = useAxios({
    url: "http://www.omdbapi.com",
    params: {
      apikey: "24a14cb",
      i: "tt0" + movie?.imdb.id,
    },
  });

  const [] = useAxios({
    url: `http://localhost:8080/movies/${id}`,
    method: "PATCH",
    data: {
      id,
    },
  });

  console.log(id);
  console.log(movie);
  console.log(movieDetails);

  if (loading || loadingMovieDetails) return <h1>...</h1>;
  if (error || movieDetailsError || !movie) return <h1>oh no</h1>;

  const toggleFavourite = () => {

  }

  return (
    <Wrapper>
      <Header>
        <Title>hi</Title>
        <Title>{movie.title}</Title>
        <FontAwesomeIcon icon={movie.favourited ? solidStar : outlineStar} size="3x" pull="left" color="gold" onClick={toggleFavourite}/>
      </Header>
      <MovieContainer>
        <StatHeader>Directed by</StatHeader>
        <Stat>{movieDetails.Director}</Stat>
        <Poster
          src={movieDetails.Poster}
          alt="poster of movie"
          gridRowStart={1}
          gridRowEnd={5}
          gridColumnStart={3}
          gridColumnEnd={3}
        />
        <StatHeader>Release Date</StatHeader>
        <Stat>{moment(movie.released).format("dddd Do MMMM YYYY")}</Stat>
        <StatHeader>Rating</StatHeader>
        <Stat>{movie.imdb.rating}</Stat>
        <StatHeader>Awards and Accolades</StatHeader>
        <Stat>{movieDetails.Awards}</Stat>
      </MovieContainer>
    </Wrapper>
  );
};

export default MoviePage;
