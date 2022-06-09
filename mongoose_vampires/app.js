const mongoose = require('mongoose')
const Vampire = require('./vampires')
const mongoURI = 'mongodb://localhost/vampires'
const db = mongoose.connection

mongoose.connect(mongoURI)

//connection error/ success
//Define callback 
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

setTimeout(() => {
    db.close();
}, 5000 );


