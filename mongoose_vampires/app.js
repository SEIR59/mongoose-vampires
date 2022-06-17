const mongoose = require('mongoose')
const Vampire = require('./models/vampires')
const mongoURI = 'mongodb://127.0.0.1/app'
const db = mongoose.connection
const seedVamp = require('./models/seed')
mongoose.connect(mongoURI)

require("dotenv").config()
//database connection//
//setup inputs for out connect function

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  //establish connection

  mongoose.connect(DATABASE_URL, CONFIG)

//connection error/ success
//Define callback 
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// setTimeout(() => {
//     db.close();
// }, 5000 );

// Vampire.insertMany(seedVamp)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})
