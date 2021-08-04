import mongoose, { Document } from "mongoose";

export interface IMovie extends Document {
  plot: String;
  genre: Array<String>;
  runtime: Number;
  cast: Array<String>;
  title: string;
  fullPlot: string;
  countries: Array<String>;
  released: Date;
  directors: Array<String>;
  rating: string;
  awards: Object;
  imdb: Object;
  type: String;
  tomatoes: Object;
  favourited: Boolean
}

const movieSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  fullPlot: {
    type: String,
    required: true,
  },
  countries: {
    type: Array,
    required: true,
  },
  released: {
    type: Date,
    required: true,
  },
  directors: {
    type: Array,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  awards: {
    type: Object,
    required: true,
  },
  imdb: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tomatoes: {
    type: Object,
    required: true,
  },
  favourited: {
    type: Boolean,
    required: false,
  },
});

export default mongoose.model<IMovie>("Movie", movieSchema, "movies");
