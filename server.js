/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")



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


  const vampire = {
      name: 'Chocula',
      title: 'Count',
      hair_color: 'brown',
      eye_color: 'brown',
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ['cereal','marshmallows'],
      location: 'Minneapolis, Minnesota, US',
      gender: 'm',
      victims: 2,
    }

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make vampire schema
const vampireSchema = new Schema({
  name: {type: String, required: true },
  title: String,
  readyToEat: Boolean,
  name: String,
  title: String,
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: {type: Number, min: 0}, //no less than 0 victims
});

// make vampire model
const Vampire = model("Vampire", vampireSchema);





/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})






/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
