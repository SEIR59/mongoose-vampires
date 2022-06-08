/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const vampiresArray = require('./models/vampires')

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
const db = mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make Vampires schema
const vampiresSchema = new Schema(
    {
        name: { type: String, required: true },
        title: String,
        hair_color: { type: String, default: 'blonde' },
        eye_color: String,
        dob: Date,
        loves: [String],
        location: String,
        gender: String,
        victims: { type: Number, min: 0 }
    },
    { timestamps: true },
    { strict: false }
);

// make Vampire model
const Vampire = model("Vampire", vampiresSchema);


const Mark = {
    name: 'Mark',
    hair_color: 'red',
    eye_color: 'blue',
    dob: new Date(1986, 3, 27),
    loves: ['climbing', 'coding', 'snacking'],
    location: 'Boulder, Colorado, US',
    gender: 'm',
    title: "Gerken puttin' work in"
}

const John = {
    name: 'John Johnson',
    hair_color: 'brown',
    eye_color: 'red',
    dob: new Date(1914, 10, 3, 13, 12),
    loves: ['being average', 'not making an impression', 'accounting'],
    location: 'San Francisco, California, US',
    gender: 'm',
    title: 'The Most Forgettable Vampire Ever'
}

const Janet = {
    name: 'Janet Bieber',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1998, 1, 20, 13, 12),
    loves: ['draining the life out of fans', 'being famous'],
    location: 'Quebec, Canada',
    gender: 'f',
    title: 'Pop Icon'
}
const Britney = {
    name: 'Britney Spenser',
    hair_color: 'blonde',
    eye_color: 'green',
    dob: new Date(1980, 6, 10),
    loves: ['getting hit one more time'],
    location: 'New York, New York, US',
    gender: 'f',
    title: 'Queen of Pop'
}

// function to push these new vampires into vampiresArray
const createVampire = (name) => {
    vampiresArray.push(name)
}

// Insert vampires into collection
const seedCollection = () => {
    //push new vampires into array
    createVampire(Mark)
    createVampire(John)
    createVampire(Janet)
    createVampire(Britney)
    Vampire.deleteMany({}).then((data) => {

        Vampire.insertMany(vampiresArray)
            .then((data) => console.log('vampiresArray inserted'))
            .catch((error) => console.log(error))
        // .finally(() => db.close())
    })
}
seedCollection()


// ********* SELECT BY COMPARISON ********

//find vampires with gender F
Vampire.find({ gender: 'f' })
// .then(data => console.log(data))
// .catch(err => console.log(err))


//find vampires with more than 500 victims
Vampire.find({ victims: { $gt: 500 } })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// find vampires with less than 150 victims
Vampire.find({ victims: { $lte: 150 } })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// find vampires with victims not equal to 212340
Vampire.find({ victims: { $ne: 212340 } })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// find vampires with victims greater than 150 and less than 500
Vampire.find({ victims: { $gt: 150, $lt: 500 } })
// .then(data => console.log(data))
// .catch(err => console.log(err))



// ********* SELECT BY EXISTS OR DOES NOT EXIST ********

//find vampires that have a title
Vampire.find({ title: { $exists: true } })
// .then(data => console.log(data))
// .catch(err => console.log(err))

// find vampires that do not have a key of 'victims'
Vampire.find({ victims: { $exists: false } })
// .then(data => console.log(data))
// .catch(err => console.log(err))

// find vampires that have a title AND no victims
Vampire.find({ title: { $exists: true }, victims: { $exists: false } })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// find vampires that have victims and the victims are greater than 1000
Vampire.find({ victims: { exists: true }, victims: { $gt: 1000 } })
// .then(data => console.log(data))


// ********* SELECT WITH OR ********

// select vampires from new york or new orleans
Vampire.find({ $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }] })
// .then(data => console.log(data))
// .catch(error => console.log(error))

// select vampires that love brooding or being tragic
Vampire.find({ $or: [{ loves: /brooding/ }, { loves: /being tragic/ }] })
    // .then(data => console.log(data))

// loves marshmallows or has more than 1000 victims
Vampire.find({ $or: [{loves: /marshmallow/}, {victims: {$gt: 1000}}]})
    // .then(data => console.log(data))

// red hair or green eyes
Vampire.find({ $or: [{hair_color: 'red'}, {eye_color: 'green'}]})
    // .then(data => console.log(data))