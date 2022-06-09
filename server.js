// Import Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = 3000
const rowdy = require('rowdy-logger')
const path = require('path')
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})
const routesReport = rowdy.begin(app)
const Vampire = require('./models/vampire.js')
// const db = mongoose.connection

//Database Connection
// Setup inputs for our connect function

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error));

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically


////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });
app.get('/', (req,res) => {
    res.send("Mongoose-Vampires Homepage")
})

// Seed connection
const seedData = require("./models/seed.js")

const newVampires = [
    {
        name: 'FirstMan',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
      },
      {
        name: 'SecondMan',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
      },
      {
        name: 'FirstWoman',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 2,
      },
      {
        name: 'SecondWoman',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 2,
      }
]

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => {
    routesReport.print()
    console.log(`Now Listening on port ${port}`
)});

// Setup complete above, answers below

// Query - Select by comparison

//Female

// Vampire.find({ gender: 'f'})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victim Greater Than 500
// Vampire.find({victims: {$gt: 500}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims less than or equal to 150
// Vampire.find({victim: {$lte: 150}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims not equal to 210234
// Vampire.find({victim: {$ne: 210234}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims greater than 150 AND fewer than 500
// Vampire.find({victim: {$gt: 150, $lt: 500}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

//Select by exists or does not exist

// Has a key of title
Vampire.find({title: {$exists: true}})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})
.finally(() => {db.close()})

// Does not have a key of victims
Vampire.find({victims: {$exists: false}})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})
.finally(() => {db.close()})

// Has a title AND 0 victims
Vampire.find({title: {$exists: true},victims: {$exists: false}})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})
.finally(() => {db.close()})

// Has victims AND victims over 1000
Vampire.find({victims: {$exists: true},victims: {$gt: 1000}})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)})
.finally(() => {db.close()})
