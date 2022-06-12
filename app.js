const mongoose = require('mongoose')
const Vampire = require('./vampires.js')

const mongoURI = "mongodb://localhost:3000/vampires"
const db = mongoose.connection

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

console.log("If you see this, everything is working.")

