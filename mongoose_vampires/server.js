const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Vampire = require("./vampires");

// Global config
const mongoURI = "mongodb://127.0.0.1/vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));
