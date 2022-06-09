const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Vampire = require("./vampires");
const vampireSeed = require("./models/vampireSeed");

// Global config
const mongoURI = "mongodb://127.0.0.1/vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

const cedwardMullen = {
  name: "Cedward Mullen",
  hair_color: "brown",
  eye_color: "brown",
  dob: new Date(1992, 3, 6),
  loves: "Sella Bwan",
  location: "Spoon, WA",
  gender: "m",
  title: "sparkly guy",
  victims: 30,
};

const umpireVampire = {
  name: "Umpire Vampire",
  hair_color: "brown",
  eye_color: "green",
  dob: new Date(1983, 4, 7),
  loves: "Baseball",
  location: "A newly mowed field",
  gender: "m",
  title: "Ump",
  victims: 3,
};

const ladyVamps = [
  {
    name: "Sella Bwan",
    hair_color: "brown",
    eye_color: "green",
    dob: new Date(1994, 5, 8),
    loves: "Cedward Mullen",
    location: "Spoon, WA",
    gender: "f",
    title: "Sella",
    victims: 1000000,
  },
  {
    name: "Bat Girl",
    hair_color: "black",
    eye_color: "brown",
    dob: new Date(1995, 6, 9),
    loves: "Mat Ban",
    location: "Gotham City",
    gender: "f",
    title: "Girl Wonder",
    victims: 100,
  },
];

// Vampire.create(cedwardMullen)
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.insertMany(vampireSeed)
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.create(umpireVampire)
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.insertMany(ladyVamps)
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ gender: "f" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ victims: { $gt: 500 } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ victims: { $lte: 150 } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ victims: { $ne: 210234 } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ title: { $exists: true } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ victims: { $exists: false } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $and: [{ title: { $exists: true } }, { victims: { $exists: false } }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $and: [{ victims: { $gt: 1000 } }, { victims: { $exists: true } }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [
//     { location: "New York, New York, US" },
//     { location: "New Orleans, Louisiana, US" },
//   ],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [{ loves: "brooding" }, { loves: "being tragic" }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [{ victims: { $gt: 1000 } }, { loves: "marshmallows" }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [{ hair_color: "red" }, { eye_color: "green" }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [{ loves: "frilly shirtsleeves" }, { loves: "frilly collars" }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ loves: "brooding" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $or: [
//     { loves: "appearing innocent" },
//     { loves: "trickery" },
//     { loves: "lurking in rotting mansions" },
//     { loves: "R&B music" },
//   ],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $and: [
//     { loves: "fancy cloaks" },
//     { loves: { $nin: ["top hats", "virgin blood"] } },
//   ],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   $and: [{ loves: "ribbons" }, { eye_color: { $nin: "brown" } }],
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ location: { $nin: "Rome, Italy" } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({
//   loves: {
//     $nin: [
//       "fancy cloaks",
//       "frilly shirtsleeves",
//       "appearing innocent",
//       "being tragic",
//       "brooding",
//     ],
//   },
// })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.find({ victims: { $lt: 200 } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.findOneAndUpdate(
//   { name: "Claudia" },
//   { name: "Eve" },
//   { portrayed_by: "Tilda Swinton" }
// )
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.findOneAndUpdate({ name: "Eve" }, { portrayed_by: "Tilda Swinton" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.findOneAndUpdate({ name: "Cedward Mullen" }, { name: "Guy Man" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Vampire.findOneAndUpdate({ name: "Guy Man" }, { is_actually: "were-lizard" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });
