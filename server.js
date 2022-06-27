/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const vampiresArray = require("./models/vampires");

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
const db = mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make Vampire schema

const vampiresSchema = new Schema(
  {
    name: { type: String, required: true },
    title: String,
    hair_color: { type: String, default: "blonde" },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: { type: Number, min: 0 },
  },
  { strict: false }
);

// make fruit model
const Vampire = model("Vampire", vampiresSchema);

const CreationA = {
  name: "Jordan",
  hair_color: "black",
  eye_color: "brown",
  dob: new Date(1991, 1, 21),
  loves: ["Coding", "Driving Super Cars", "Interior Design"],
  location: "Cumberland, Maryland, US",
  gender: "f",
  title: "Project Pantomath",
};

const CreationB = {
  name: "Dr. Jordan",
  hair_color: "black",
  eye_color: "brown",
  dob: new Date(1991, 1, 21),
  loves: ["Coding", "Driving Super Cars", "Interior Design"],
  location: "Cumberland, Maryland, US",
  gender: "f",
  title: "Project Pantomath 2",
};

const CreationC = {
  name: "Dr. Jordan II",
  hair_color: "black",
  eye_color: "brown",
  dob: new Date(1991, 1, 21),
  loves: ["Coding", "Driving Super Cars", "Interior Design"],
  location: "Cumberland, Maryland, US",
  gender: "m",
  title: "Project Pantomath 3",
};

const CreationD = {
  name: "Dr. Jordan III",
  hair_color: "black",
  eye_color: "brown",
  dob: new Date(1991, 1, 21),
  loves: ["Coding", "Driving Super Cars", "Interior Design"],
  location: "Cumberland, Maryland, US",
  gender: "m",
  title: "Project Pantomath 4",
};

const createVampire = (name) => {
  vampiresArray.push(name);
  // Vampire.create(name)
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
};

// createVampire(CreationA, CreationB, CreationC, CreationD);
const seedCollection = () => {
  createVampire(CreationA);
  createVampire(CreationB);
  createVampire(CreationC);
  createVampire(CreationD);
  Vampire.deleteMany({}).then((data) => {
    Vampire.insertMany(vampiresArray)
      .then((data) => {
        console.log("Data was seated to vampiresArray Succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

//seedCollection();
// SELECT BY COMPARISON
Vampire.find({ gender: "f" });
Vampire.find({ victims: { $gt: 500 } });
Vampire.find({ victims: { $lte: 150 } });
Vampire.find({ victims: { $ne: 212340 } });
Vampire.find({ victims: { $gt: 150, $lt: 500 } });
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// SELECT BY EXIST OR NOT
Vampire.find({ title: { $exists: true } });
Vampire.find({ victims: { $exists: false } });
Vampire.find({ title: { $exists: true }, victims: { $exists: false } });
Vampire.find({ victims: { $exists: true }, victims: { $gt: 1000 } });
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// SELECT WITH OR
Vampire.find({
  $or: [
    { location: "New York, New York, US" },
    { location: "New Orleans, Louisiana, US" },
  ],
});
Vampire.find({ $or: [{ loves: /brooding/ }, { loves: /being trajic/ }] });
Vampire.find({ $or: [{ loves: /marshmallow/ }, { victims: { $gt: 1000 } }] });
Vampire.find({ $or: [{ hair_color: "red" }, { eye_color: "green" }] });
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// SELECT OBJECTS THAT MATCH 1 OF MANY
Vampire.find({ loves: { $in: ["frilly shirtsleeves", "frilly collars"] } });
Vampire.find({ loves: "brooding" });
Vampire.find({
  loves: {
    $in: [
      "appearing innocent",
      "trickery",
      "lurking in rotting mansions",
      "R&B music",
    ],
  },
});
Vampire.find({
  $and: [
    { loves: "fancy cloaks" },
    { loves: { $nin: "top hats" } },
    { loves: { $nin: "virgin blood" } },
  ],
});
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// NEGATIVE SELECTION
Vampire.find({
  $and: [{ loves: "ribbons" }, { eye_color: { $nin: "brown" } }],
});

Vampire.find({ location: { $nin: /Rome/ } });
Vampire.find({
  loves: {
    $nin: [
      "fancy cloaks",
      "frilly shirtsleeves",
      "appearing innocent",
      "being tragic",
      "brooding",
    ],
  },
});
Vampire.find({ victims: { $not: { $gt: 200 } } });
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// REPLACE
Vampire.updateOne({ name: "Claudia" }, { $set: { name: "Eve" } });
Vampire.updateOne({ name: "Eve" }, { $set: { portrayed_by: "Tilda Swinton" } });
Vampire.findOneAndUpdate(
  { gender: "m" },
  { $set: { name: "Guy Man", is_actually: "were-lizard" } }
);
// .then((data) => console.log(data));
// .catch((err) => console.log(err));

// UPDATE
Vampire.updateOne({ name: "Guy Man" }, { $set: { gender: "f" } });
Vampire.updateOne({ name: "Eve" }, { $set: { gender: "m" } });
Vampire.updateOne(
  { name: "Guy Man" },
  { $set: { hates: ["clothes", "jobs"] } }
);
Vampire.updateOne(
  { name: "Guy Man" },
  { $push: { hates: { $each: ["alram clocks", "jackalopes"] } } }
);
Vampire.updateOne({ name: "Eve" }, { $rename: { name: "moniker" } });
Vampire.updateMany({ gender: "f" }, { $set: { gender: "fems" } });
// .then((data) => console.log(data));
// .catch((err) => console.log(err));

Vampire.deleteOne({ hair_color: "brown" });
Vampire.deleteMany({ eye_color: "blue" });
// .then((data) => console.log(data));
// .catch((err) => console.log(err));
