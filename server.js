// importing dependencies
require("dotenv").config() // loading env variables
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")

// connecting with a database
// input set up
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establishing connection with input
mongoose.connect(DATABASE_URL, CONFIG)

// feedback on database connection
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

// pulling schemas and models from mongoose
const Schema = mongoose.Schema
const model = mongoose.model

// making a vampire schema
const vampireSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name!']
  },
  title: String,
  hair_color: {
    type: String,
    default: "blonde"
  },
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: [0, 'Not a valid number of victims']
  }
})

// make vampire model
const Vampire = model("Vampire", vampireSchema)