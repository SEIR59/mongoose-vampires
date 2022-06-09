require("dotenv").config() // loading env variables
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")

// connecting with a database
const mongoURI = "mongodb://127.0.0.1/vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// feedback on database connection

db.on("open", () => console.log("Connected to Mongoose"))
db.on("close", () => console.log("Disconnected from Mongoose"))
db.on("error", (error) => console.log(error))






