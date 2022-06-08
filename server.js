const mongoose = require("mongoose");

// Global configuration
const mongoURI = "mongodb://localhost/vampires";
const db = mongoose.connection;
mongoose.connect(mongoURI)
const express = require('express')
const app = require('liquid-express-views')(express())





app.listen(3000,()=>{
    console.log('now listining on')
})  