require("dotenv").config(); 
const express = require("express"); 
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const Vampires = require('./models/vampires')



const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

  const { Schema, model } = mongoose;

  const vampireSchema = new Schema({
      name: {type: String, required:true},
      title: String,
      hair_color: {type: String, default: 'blonde'},
      eye_color: String,
      dob: Date,
      loves: [String],
      location: String,
      gender: String,
      victims: {type: Number, default: 1}

  })

  const Vampires = model('Vampires', vampireSchema)
