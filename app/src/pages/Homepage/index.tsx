import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import moment from "moment";
import useFilter from "../../hooks/useFilter";

import Search from "../../components/Search";
import Result from "../../components/Result";
import Filter from "../../components/Filter";
import DropDown from "../../components/DropDown";

import { Switch } from "@material-ui/core";
import {
  FlexBox,
  Body,
  Title,
  Header,
  ResultsContainer,
  FiltersContainer,
  Tag,
} from "./index.styles";

export interface Movie {
  _id: string;
  title: string;
  released: string;
  imdb: {
    rating: number;
    id: string;
  };
}

function Homepage() {
  

  const [result, setResult] = useState<Movie | null>(null);
  const [isToggled, setIsToggled] = useState(true);
  const [validation, setValidation] = useState({
    startDate: true,
    endDate: true,
  });
  const {
    title,
    rating,
    ratingFilter,
    startDate,
    endDate,
    sortField,
    sortComparison,
    setFilterField,
  } = useFilter();

  useEffect(() => {
    if (!endDate || !startDate) return;
    setValidation({
      ...validation,
      startDate: startDate.isBefore(endDate),
      endDate: endDate.isAfter(startDate),
    });
  }, [startDate, endDate]);

  const [{ data, loading, error }, refetch] = useAxios<Movie[]>(
    {
      url: "http://localhost:8080/movies",
      params: {
        search: title,
        rating: rating,
        ratingComparison: ratingFilter,
        startDate: startDate?.toISOString(),
        endDate: endDate?.toISOString(),
        sortField: sortField.toLowerCase(),
        sortComparison: sortComparison,
      },
    },
    { manual: true }
  );
  console.log(data);

  if (error) {
    return <div>{error.message}</div>;
  }

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  const filterResults = () => {
    refetch();
  };

  return (
    <Body>
      <Header>
        <Switch onChange={toggleSwitch} checked={isToggled} />
      </Header>
      {!isToggled ? (
        <>
          <Search
            id="searchbox"
            data={data}
            dataLabel={(movie: any) => movie.title}
            style={{ width: 300 }}
            onSelect={(event: any, value: any) => {
              console.log(value);
              setResult(value);
            }}
            value={result}
          />
          {result && (
            <Result
              _id={result._id}
              title={result.title}
              released={moment(result.released).year()}
              rating={result.imdb.rating}
            />
          )}
        </>
      ) : (
        <>
          <FlexBox justifyContent="center">
            <Title>hi</Title>
          </FlexBox>
          <FlexBox justifyContent="center">
            <FiltersContainer>
              <Tag>Title</Tag>
              <Filter
                type={"text"}
                value={title}
                onChange={(input) => setFilterField("title", input)}
                onEnterPress={filterResults}
                gridColumnStart={2}
                gridColumnEnd={4}
                isValid={true}
              />
              <Tag gridColumnStart={1} gridRowStart={2}>
                Rating
              </Tag>
              <Filter
                type={"number"}
                value={rating}
                onChange={(input) => setFilterField("rating", input)}
                onEnterPress={filterResults}
                gridColumnStart={2}
                gridRowStart={2}
                isValid={true}
              />
              <DropDown
                Options={["above", "below"]}
                value={ratingFilter}
                onChange={(option) => setFilterField("ratingFilter", option)}
              />
              <Tag>Date Between</Tag>
              <Filter
                type={"date"}
                value={startDate?.format("YYYY-MM-DD") || ""}
                onChange={(input) => setFilterField("startDate", moment(input))}
                onEnterPress={filterResults}
                gridColumnStart={2}
                isValid={validation.startDate}
              />
              <Filter
                type={"date"}
                value={endDate?.format("YYYY-MM-DD") || ""}
                onChange={(input) => setFilterField("endDate", moment(input))}
                onEnterPress={filterResults}
                isValid={validation.endDate}
              />
              <Tag>Sort by</Tag>
              <DropDown
                Options={["Title", "Released", "Rating"]}
                value={sortField}
                onChange={(option) => setFilterField("sortField", option)}
              />
              <DropDown
                Options={["Ascending", "Descending"]}
                value={sortComparison}
                onChange={(option) => setFilterField("sortComparison", option)}
              />
            </FiltersContainer>
          </FlexBox>
          {/* <Button value={"filter"} onClick={filterResults} /> */}
          {loading && <div>...</div>}
          {!loading && (
            <ResultsContainer>
              {data && data.length > 0 ? (
                data.map((movie) => (
                  <Result
                    _id={movie._id}
                    title={movie.title}
                    released={moment(movie.released).year()}
                    rating={movie.imdb.rating}
                  />
                ))
              ) : (
                <h1>no movies found</h1>
              )}
            </ResultsContainer>
          )}
        </>
      )}
    </Body>
  );
}

export default Homepage;
