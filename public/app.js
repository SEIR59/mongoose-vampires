// Import Dependencies

require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const seedData = require('../seed.js')
const Vampire = require('../vampire.js')

// Database Connection

// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const db = mongoose.connection

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)
// Events for when connection opens/disconnects/errors
db.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected to Mongoose"))
.on("error", () => console.log(error))


Vampire.insertMany(seedData)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        mongoose.connect.close()
    })