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
  portrayed_by: String,
  is_actually: String,
  hates: [],
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
// Vampire.find({ $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] })
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

// Select all the vampires that:

// have a key of 'title'
// Vampire.find({ title: { $exists: true } })
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

// do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } })
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

// have a title AND no victims
// Vampire.find({
//   $and: [{ title: { $exists: true } }, { victims: { $exists: false } }],
// })
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

// have victims AND the victims they have are greater than 1000
// Vampire.find({
//   $and: [{ victims: { $gt: 1000 } }, { victims: { $exists: true } }],
// })
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

// Select all the vampires that:

// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
//   $or: [
//     { location: "New York, New York, US" },
//     { location: "New Orleans, Louisiana, US" },
//   ],
// })
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

// love brooding or being tragic
// Vampire.find({
//   $or: [{ loves: "brooding" }, { loves: "being tragic" }],
// })
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

// have more than 1000 victims or love marshmallows
// Vampire.find({
//   $or: [{ loves: "marshmallows" }, { victims: { $gt: 1000 } }],
// })
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

// have red hair or green eyes
// Vampire.find({
//   $or: [{ hair_color: "red" }, { eye_color: "green" }],
// })
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

//   Select all the vampires that:

// love either frilly shirtsleeves or frilly collars
// Vampire.find({
//   $or: [{ loves: "frilly shirtsleeves" }, { loves: "frilly collars" }],
// })
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

// love brooding
// Vampire.find({ loves: "brooding" })
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

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({
//   $or: [
//     { loves: "appearing innocent" },
//     { loves: "trickery" },
//     { loves: "lurking in rotting mansions" },
//     { loves: "R&B music" },
//   ],
// })
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

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({
//   $and: [
//     { loves: "fancy cloaks" },
//     { loves: { $nin: ["top hats", "virgin blood"] } },
//   ],
// })
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

//   Select all vampires that:

//   love ribbons but do not have brown eyes
// Vampire.find({
//   $and: [{ loves: "ribbons" }, { eye_color: { $nin: ["brown"] } }],
// })
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

//   are not from Rome
// Vampire.find({ location: { $nin: ["Rome, Italy"] } })
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

//   do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
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

//   have not killed more than 200 people
// Vampire.find({ victims: { $lt: 200 } })
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

//   replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

// Vampire.findOneAndUpdate(
//   { name: "Claudia" },
//   { name: "Eve", portrayed_by: "Tilda Swinton" },
//   { new: true }
// )
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
//   { gender: "m" },
//   { name: "Guy Man", is_actually: "were-lizard" },
//   { new: true }
// )
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

//   Update 'Guy Man' to have a gender of 'f'
// Vampire.updateMany({ name: "Guy Man" }, { $set: { gender: "f" } })
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Update 'Eve' to have a gender of 'm'
// Vampire.updateMany({ name: "Eve" }, { $set: { gender: "m" } })
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.updateMany(
//   { name: "Guy Man" },
//   { $set: { hates: ["clothes", "jobs"] } }
// )
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.updateMany(
//   { name: "Guy Man" },
//   { $push: { hates: { $each: ["alarm clocks", "jackalopes"] } } }
// )
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate({ name: "Eve" }, { $set: { name: "moniker" } })
//   // if database transaction succeeds
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
Vampire.updateMany({ gender: "f" }, { $set: { gender: "fems" } })
  // if database transaction succeeds
  .then((vampire) => {
    console.log(vampire);
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
