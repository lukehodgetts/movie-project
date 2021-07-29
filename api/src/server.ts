import express from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movies"
import castMigration from "./castMigration"
import cors from "cors"
import { config } from "dotenv";
config()

const app = express();
app.use(cors())
mongoose.connect(process.env.MONGODB_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("connected to database"));

app.use(express.json())

app.use("/movies", movieRoutes);

app.use("/migrayshun", castMigration);
app.listen(8080, () => console.log("server started"));
