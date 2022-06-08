/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const VampireArray = require("./model/vampire.js"); //my array


/////////////////////////////////////////////
// Global Configuration
/////////////////////////////////////////////// const mongoURI = "YOUR MONGODB URL"; //this is the url - where you want to go
const mongoURI = "mongodb://127.0.0.1/vampires"; //this is the url - where you want to go
const db = mongoose.connection;


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////

// Establish Connection
// Setup inputs for our connect function
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Connection Error/Success
// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));



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


////////////////////////////////////////////////
// Create Document
////////////////////////////////////////////////


  const OGVampire = {
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
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: {type: Number, min: 0}, //no less than 0 victims
});

// make vampire model
const Vampire = model("Vampire", vampireSchema);


// ----------
// Vampire.insertMany(VampireArray)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// ---------------
const newVampires = [
    {
        name: 'Merlin',
        title: 'Viceroy',
        hair_color: 'blonde',
        eye_color: 'blue',
        dob: new Date(1952, 2, 13, 7, 47),
        loves: ['books','cats'],
        location: 'Chicago, Illinois, US',
        gender: 'm',
        victims: 90,
      },
      {
        name: 'Cecilia',
        title: 'Duchess of Aragon',
        hair_color: 'brown',
        eye_color: 'hazel',
        dob: new Date(1967, 2, 14, 7, 47),
        loves: ['corgies','rock climbing'],
        location: 'London, England, UK',
        gender: 'f',
        victims: 52,
      },
      {
        name: 'Thomas',
        title: 'Captain',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1941, 2, 13, 6, 47),
        loves: ['high tea','cricket'],
        location: 'London, England, UK',
        gender: 'm',
        victims: 1100,
      },
      {
        name: 'Eloise',
        title: 'Lady',
        hair_color: 'brown',
        eye_color: 'blue',
        dob: new Date(1991, 3, 26, 7, 47),
        loves: ['music','long walks'],
        location: 'Glendora, California, US',
        gender: 'f',
        victims: 260,
      }
]

// ----------
Vampire.insertMany(newVampires)
.then((data) =>  {console.log(data)})
.catch((error)=>{console.log(error)})
.finally(()=>{db.close()})
