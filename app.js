const mongoose = require('mongoose')
const Vampire = require('./vampires.js')

const mongoURI = 'mongodb://127.0.0.1/vampires'
const db = mongoose.connection

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))