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




/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

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
