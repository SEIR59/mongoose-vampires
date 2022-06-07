/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

const vampiresArr = require("./models/vampire.js")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connection;

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

//////////////////////////
// Models ////////////////
/////////////////////////

const {Schema, model } = mongoose;

//Make vampire Schema
const vampireSchema = new Schema({
    name: {
        type: String,
        required: true
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
        type: String,
        min: 1
    }
})


//Make Vampire model
const Vampire = model("Vampire", vampireSchema);

// Vampire.insertMany(vampiresArr)
//     .then((data) =>  {console.log(data)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>{db.close()})

//Creating 4 new Vampires

const newVamps = [{
    name: 'Vampire 1',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 17
  },{
    name: 'Vampire 2',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 10
  },{
    name: 'Vampire 3',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'f',
    victims: 2
  },{
    name: 'Vampire 4',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1776, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'f',
    victims: 38
  }
]
// Vampire.insertMany(newVamps)
//     .then((data) =>  {console.log(data)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>{db.close()})


// Vampire.find({gender: 'f'})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: { $gt: 500}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: { "$lte": 500}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

Vampire.find({victims: {$ne: 210234}})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(data)
})
.finally(() => {
    db.close();
})
