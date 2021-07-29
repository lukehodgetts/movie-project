import express from "express";
import { MongoClient } from "mongodb";
const router = express.Router();

// const setPerson = (people: object, person: string, type: string) => {
//   if (people[person] && !people[person].includes(type)) {
//     people[person] = [...people[person], type];
//   }

//   if (!people[person]) {
//     people[person] = [type];
//   }
// };

//get all
// router.get("/", async (req, res) => {
//   const client = new MongoClient(process.env.MONGODB_URL!);
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db("sample_mflix");
//   const moviesCollection = db.collection("movies");
//   const peopleCollection = db.collection("people");

//   const people: any = {};

//   const movieResult = await moviesCollection
//     .aggregate([
//       {
//         $project: {
//           cast: 1,
//           directors: 1,
//         },
//       },
//     ])
//     .toArray();

//   for (const movie of movieResult) {
//     for (const person of movie?.cast || []) {
//       setPerson(people, person, "cast");
//     }

//     for (const person of movie?.directors || []) {
//       setPerson(people, person, "director");
//     }
//   }

//   var batch = peopleCollection.initializeUnorderedBulkOp();
//   Object.entries(people).forEach(([key, value]) => {
//     batch.insert({
//       name: key,
//       types: value,
//     });
//   });

//   await batch.execute();

//   await client.close();
// });

// router.get("/import", async (req, res) => {
//   const client = new MongoClient(process.env.MONGODB_URL!);
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db("sample_mflix");
//   const moviesCollection = db.collection("movies");
//   const peopleCollection = db.collection("people");

//   const people = await peopleCollection.find().toArray();

//   for (const person of people) {
//     const foundMovies = await moviesCollection
//       .find({ $or: [{ cast: person.name }, { directors: person.name }] })
//       .toArray();
//     for (const movie of foundMovies) {
//       if (movie.cast?.includes(person.name)) {
//         movie.cast = movie.cast.filter((cast: any) => cast !== person.name);
//         movie.cast.push(person._id);
//       }
//       if (movie.directors?.includes(person.name)) {
//         movie.directors = movie.directors.filter(
//           (director: any) => director !== person.name
//         );
//         movie.directors.push(person._id);
//       }

//       await moviesCollection.updateOne(
//         { _id: movie._id },
//         {
//           $set: {
//             cast: movie.cast,
//             directors: movie.directors,
//           },
//         }
//       );
//     }
//   }

//   await client.close();
// });

export default router;
