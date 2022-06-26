/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

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

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make fruits schema
const sSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
});

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
  { timestamps: true }
);

// make fruit model
const Vampire = model("Vampire", vampiresSchema);
