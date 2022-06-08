require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")


const DATABASE_URL = process.env.DATABASE_URL; //just give it a variable name for using .env
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(DATABASE_URL, CONFIG);
  mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));


  const schema = mongoose.Schema
  const model =mongoose.model