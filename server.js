/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const vampires = require("./models/vampires.js");

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
// mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connect(DATABASE_URL, CONFIG);
const db = mongoose.connection
// Events for when connection opens/disconnects/errors
// mongoose.connection
  db.on("open", () => console.log("Connected to Mongoose"))
  db.on("close", () => console.log("Disconnected from Mongoose"))
  db.on("error", (error) => console.log(error));
  
/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
// app.use(methodOverride("_method")); // override for put and delete requests from forms
// app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
// app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

const vampireSchema = new Schema({
    name: String,
    title: String,
    hair_color: String,
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: Number,
});

const Vampire = model("Vampire", vampireSchema)

// Vampire.insertMany(vampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(() => { db.close() })

const newVampires = [
    {
        name: 'Markos',
        title: 'Leader',
        hair_color: 'white',
        eye_color: 'blue',
        dob: new Date(1968, 7, 10, 8, 42, 33),
        loves: ['killing, relaxing'],
        location: 'New York',
        gender: 'm',
        victims: 12,
    },
    {
        name: 'Artura',
        title: 'Pirate',
        hair_color: 'red',
        eye_color: 'blue',
        dob: new Date(1954, 2, 15, 12, 44, 22),
        loves: ['hiking, swimming'],
        location: 'Miami',
        gender: 'f',
        victims: 15,
    },
    {
        name: 'Carver',
        title: 'Menace',
        hair_color: 'green',
        eye_color: 'yellow',
        dob: new Date(1988, 10, 10, 5, 24, 31),
        loves: ['drinking, crime'],
        location: 'Austin',
        gender: 'f',
        victims: 18,
    },
    {
        name: 'Drako',
        title: 'Savage',
        hair_color: 'purple',
        eye_color: 'orange',
        dob: new Date(1992, 3, 15, 9, 24, 35),
        loves: ['partying, sports'],
        location: 'Chicago',
        gender: 'm',
        victims: 24,
    }
]

Vampire.insertMany(newVampires)
.then((data) =>  {console.log(data)})
.catch((error)=>{console.log(error)})
.finally(()=>{db.close()})










/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})



////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("SERVER CONNECTED YAY!!");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
