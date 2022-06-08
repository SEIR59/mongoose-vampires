/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const vampires = require('./models/vampires')

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), { root: [path.resolve(__dirname, 'views/')] })

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
const vampiresSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: String,
    hair_color: {
        type: String,
        default: 'Blonde'
    },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: {
        type: Number,
        min: 0
    }
});

// make fruit model
const Vampire = model("Vampire", vampiresSchema);

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
    //   console.log(vampires)
});

// // seed database
// app.get("/vampires/seed", (req, res) => {
//     // delete all vampires
//     Vampire.deleteMany({}).then((data) => {
//         // seed starter vampires
//         Vampire.create(vampires).then((data) => {
//             // send created vampires as response to confirm creation
//             // res.json(data)
//         })
//     })
//     Vampire.insertMany(vampires)
//         .then((data) => {
//             console.log(data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })

//     const customVampires = [
//         {
//             name: 'Kenny A',
//             dob: new Date(1834, 9, 23, 1, 0),
//             hair_color: 'brown',
//             eye_color: 'hazel',
//             loves: ['apples', 'ardvarks', 'express applications'],
//             location: 'Turku, Finland',
//             gender: 'm',
//             victims: 122
//         },
//         {
//             name: 'Kenny B',
//             dob: new Date(1901, 2, 12, 3, 0),
//             hair_color: 'blonde',
//             eye_color: 'blue',
//             loves: ['Super Smash Brothers', 'top hats', 'Baltimore Ravens'],
//             location: 'Baltimore, Maryland, USA',
//             gender: 'm',
//             victims: 3728
//         }, {
//             name: 'Kendra C',
//             dob: new Date(666, 8, 24, 13, 0),
//             hair_color: 'bald',
//             eye_color: 'green',
//             loves: ['Harry Potter', 'Lord of the Rings'],
//             location: 'Transylvania, Romania',
//             gender: 'f',
//             victims: 10
//         },
//         {
//             name: 'Kendra D',
//             dob: new Date(1896, 7, 24, 4, 0),
//             hair_color: 'silver',
//             eye_color: 'hazel',
//             loves: ['Nothing at all'],
//             location: 'Stockholm, Sweden,',
//             gender: 'f',
//             victims: 1235678
//         }
//     ]
//     Vampire.create(customVampires)
//         .then((data) => {
//             // send created customVampires as response to confirm creation
//             res.json(data)
//         })
//     Vampire.insertMany(customVampires)
//         .then((data) => {
//             console.log(data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
