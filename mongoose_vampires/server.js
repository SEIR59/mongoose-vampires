/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const startVampires = require("./models/vampires");

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
const db = mongoose.connection;

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose

const { Schema, model } = mongoose;

// make fruits schema
const vampiresSchema = new Schema({
  name: { type: String, required: true },
  title: String,
  hair_color: { type: String, default: "blonde" },
  eye_color: String,
  dob: Date,
  loves: [],
  location: String,
  gender: String,
  victims: { type: Number, min: 0 },
});

// make fruit model
const Vampire = model("Vampire", vampiresSchema);

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {
  root: [path.resolve(__dirname, "views/")],
});

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

// Seed Starter Fruits
// Vampire.create(startVampires)
//   .then((vampires) => {
//     // send created fruits as response to confirm creation
//     console.log(vampires);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// insert new vampires
// const newVampires = [
//   {
//     name: "Tom",
//     hair_color: "black",
//     eye_color: "brown",
//     dob: new Date(1989, 2, 13, 7, 47),
//     loves: ["chocolate", "candy"],
//     location: "Boston, MA, US",
//     gender: "m",
//     victims: 2,
//   },
//   {
//     name: "Jerry",
//     dob: new Date(1990, 0, 24, 13, 0),
//     hair_color: "brown",
//     eye_color: "blue",
//     loves: ["video games"],
//     location: "Newton, MA, US",
//     gender: "m",
//     victims: 1234,
//   },
//   {
//     name: "Apple",
//     dob: new Date(1991, 8, 7, 22, 10),
//     hair_color: "brown",
//     eye_color: "brown",
//     loves: ["cheese"],
//     location: "Waltham, MA, US",
//     gender: "f",
//     victims: 980,
//   },
//   {
//     name: "Orange",
//     dob: new Date(1988, 11, 9, 18, 44),
//     hair_color: "blonde",
//     eye_color: "blue",
//     loves: ["udon", "sushi"],
//     location: "Needham, MA, US",
//     gender: "f",
//     victims: 324,
//   },
// ];

// Vampire.insertMany(newVampires)
//   .then((vampires) => {
//     console.log(vampires);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Find all the vampires that that are females
// Vampire.find({ gender: "f" })
//   // if database transaction succeeds
//   .then((vampires) => {
//     console.log(vampires);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } })
//   // if database transaction succeeds
//   .then((vampires) => {
//     console.log(vampires);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lt: 150 } })
//   // if database transaction succeeds
//   .then((vampires) => {
//     console.log(vampires);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } })
//   // if database transaction succeeds
//   .then((vampires) => {
//     console.log(vampires);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// have greater than 150 AND fewer than 500 victims
Vampire.find({ $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] })
  // if database transaction succeeds
  .then((vampires) => {
    console.log(vampires);
  })
  // if database transaction fails
  .catch((error) => {
    console.log(error);
  })
  // close db connection either way
  .finally(() => {
    db.close();
  });

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
