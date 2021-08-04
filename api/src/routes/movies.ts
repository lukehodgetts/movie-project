import express from "express";
import { FilterQuery } from "mongoose";
import moment, { Moment } from "moment";
const router = express.Router();
import Movie, { IMovie } from "../models/movie";

interface MovieFilters {
  title?: RegExp;
  // rating?: number;
}

const getString = (value: any) => {
  if (value && typeof value === "string") {
    return value;
  }
};

//get one
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      return res.json(movie);
    }
  } catch (error) {}
  return res.status(404).send();
});

//get all
router.get("/", async (req, res) => {
  const search = getString(req.query.search);
  const rating = getString(req.query.rating);
  const ratingComparison = getString(req.query.ratingComparison);
  const startDate = getString(req.query.startDate);
  const endDate = getString(req.query.endDate);
  const sortField = getString(req.query.sortField);
  const sortComparison = getString(req.query.sortComparison);

  console.log(req.query);

  const filter: FilterQuery<IMovie> = { released: { $ne: undefined } };
  let sortFilter: any = { title: 1 };

  if (search) {
    filter.title = new RegExp(search, "i");
  }

  if (rating && ratingComparison) {
    const ratingNumber = parseInt(rating as string);
    const comparison = ratingComparison === "above" ? "$gte" : "$lte";
    filter["imdb.rating"] = { [comparison]: ratingNumber };
  }

  if (startDate && endDate) {
    console.log(moment(startDate).toDate());
    filter.released = {
      $gte: moment(startDate).toDate(),
      $lte: moment(endDate).toDate(),
    };
  }

  if (sortField && sortComparison) {
    sortFilter = { [sortField]: sortComparison === "Ascending" ? 1 : -1 };
  }

  console.log({ filter, sortFilter });

  const movies = await Movie.find(filter).sort(sortFilter).limit(100);
  res.json(movies);
});

//update one
router.patch("/:id", async (req, res) => {
  const foundMovie = await Movie.findById(req.params.id);
  if (!foundMovie) {
    return res.status(404).send();
  }
  foundMovie.favourited = !foundMovie.favourited;
});

export default router;
