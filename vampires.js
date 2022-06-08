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


  const Schema = mongoose.Schema
  const model =mongoose.model

  const vampireSchema = new Schema ({
    name:{ type:String,
           default:"",
           require:'name can not be empty'
    },
    title:String,
    hair_color: {type:String, 
       require: 'blonde' },

    eye_color: { type:String},
    dob:Date,
    loves: [String],
    location: String,
    gender: String,

    victims: {
        type: Number },
        min:{ $gt: 0 }
  })


const Vampire = model('Vampire', vampireSchema )

