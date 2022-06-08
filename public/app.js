/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const seedData = require("../seed.js");
const Vampire = require("../vampire.js");
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
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

// Vampire.insertMany(seedData)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     mongoose.connect.close();
//   });

// // add some vampire data - NOT WORK
// createVampire("Kyle", "black", "New York, US", "m", 450);
// createVampire("Bujidao", "black", "DC, US", "m", 250);
// createVampire("Mona", "black", "Hong Kong, China", "f", 250);
// createVampire("Shankela", "black", "Wellington, New Zealand", "f", 450);

// async function createVampire(name, eye_color, location, gender, victims) {
//   try {
//     const v1 = await Vampire.create({
//       name: this.name,
//       eye_color: this.eye_color,
//       dob: new Date(1984, 6, 3, 13, 12),
//       location: this.location,
//       gender: this.gender,
//       victims: this.victims,
//     });
//   } catch (e) {
//     console.log(e.message);
//   }
// }
create4Vampire();
async function create4Vampire() {
  try {
    const v1 = await Vampire.create({
      name: "Jyle",
      eye_color: "black",
      dob: new Date(1984, 6, 3, 13, 12),
      location: "New York",
      gender: "m",
      victims: 450,
    });
  } catch (e) {
    console.log(e.message);
  }
  try {
    const v2 = await Vampire.create({
      name: "Bujidao",
      eye_color: "black",
      dob: new Date(1984, 6, 4, 13, 12),
      location: "DC",
      gender: "m",
      victims: 200,
    });
  } catch (e) {
    console.log(e.message);
  }
  try {
    const v3 = await Vampire.create({
      name: "Mona",
      eye_color: "black",
      dob: new Date(1984, 6, 9, 13, 12),
      location: "Hong Kong",
      gender: "f",
      victims: 300,
    });
  } catch (e) {
    console.log(e.message);
  }
  try {
    const v4 = await Vampire.create({
      name: "Shankala",
      eye_color: "black",
      dob: new Date(1984, 6, 11, 13, 12),
      location: "Wellington",
      gender: "f",
      victims: 1000,
    });
  } catch (e) {
    console.log(e.message);
  }
}
