/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const vampire = require("./models/vampires.js");
const vampires = require("./models/vampires.js");

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
// mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connect(DATABASE_URL, CONFIG);
const db = mongoose.connection
// Events for when connection opens/disconnects/errors
// mongoose.connection
  db.on("open", () => console.log("Connected to Mongoose"))
  db.on("close", () => console.log("Disconnected from Mongoose"))
  db.on("error", (error) => console.log(error));
  
/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
// app.use(methodOverride("_method")); // override for put and delete requests from forms
// app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
// app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

const vampireSchema = new Schema({
    name: String,
    title: String,
    hair_color: String,
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: Number,
});

const Vampire = model("Vampire", vampireSchema)

// Vampire.insertMany(vampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(() => { db.close() })

const newVampires = [
    {
        name: 'Markos',
        title: 'Leader',
        hair_color: 'white',
        eye_color: 'blue',
        dob: new Date(1968, 7, 10, 8, 42, 33),
        loves: ['killing, relaxing'],
        location: 'New York',
        gender: 'm',
        victims: 12,
    },
    {
        name: 'Artura',
        title: 'Pirate',
        hair_color: 'red',
        eye_color: 'blue',
        dob: new Date(1954, 2, 15, 12, 44, 22),
        loves: ['hiking, swimming'],
        location: 'Miami',
        gender: 'f',
        victims: 15,
    },
    {
        name: 'Carver',
        title: 'Menace',
        hair_color: 'green',
        eye_color: 'yellow',
        dob: new Date(1988, 10, 10, 5, 24, 31),
        loves: ['drinking, crime'],
        location: 'Austin',
        gender: 'f',
        victims: 18,
    },
    {
        name: 'Drako',
        title: 'Savage',
        hair_color: 'purple',
        eye_color: 'orange',
        dob: new Date(1992, 3, 15, 9, 24, 35),
        loves: ['partying, sports'],
        location: 'Chicago',
        gender: 'm',
        victims: 24,
    }
]

// Vampire.insertMany(newVampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// Search by Comparison
// Find female
// Vampire.find({ gender: 'f'})
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
// })
// // if fails
// .catch ((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

// **more then 500**
// Vampire.find({ victims: { $gte: 500 } })
//  // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// **Less than or equal 150**
// Vampire.find({ victims: { $lte: 150 } })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// **Not equal to 210234**
// Vampire.find({ victims: { $ne: 210234 } })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// **Greater than 150 fewer than 500**
// Vampire.find({
//     $and: [{
//         victims: { $gte: 150 },
//         victims: { $lt: 500 }
//     }]
// })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// **Select by exists or no**
// key of title
// Vampire.find( {
//     title: { $exists: true }
// } )
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

//  **Not key of victims**
// Vampire.find( {
//         victims: { $exists: false}
// })
//     // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// Vampire.find({
//         $and: [{
//             title: { $exists: true },
//             victims: { $eq: 0 }
//         }]
//     })
//     // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

//  Vampire.find({
//     $and: [{
//         victims: { $exists: true },
//         victims: { $gt: 1000 }
//     }]
// })
// // if succeeds
// .then((vampire) => {
// console.log(vampire)
// })
//   // if fails
// .catch ((error) => {
// console.log(error)
// })
// // // close db connection either way
// .finally(() => {
//  db.close()
// })

// **Select by OR**

// Vampire.find({
//     $or: [{ location: "New York, New York, US" },
//           { location: "New Orleans, Louisiana, US" }]
// })
   
// // if succeeds
// .then((vampire) => {
// console.log(vampire)
// })
//   // if fails
// .catch ((error) => {
// console.log(error)
// })
// // // close db connection either way
// .finally(() => {
//  db.close()
// })

// Vampire.find({
//     $or: [{ loves: "brooding" },
//           { loves: "being tragic" }]
// })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

//  Vampire.find({
//      $or: [{ victims: { $gt: 1000 } },
//           { loves: "marshmallows" }]
//  })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// Vampire.find({
//          $or: [{ hair_color: "red" },
//               { eye_color: "green" }]
//      })
//     // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })


// **Match one of Several Values**

// Vampire.find({
//              $or: [{ loves: 'frilly shirtsleeves' },
//                   { loves: 'frilly collars' }]
// })
//          // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

// Vampire.find({ loves: 'brooding' })
// // if succeeds
// .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

//  Vampire.find({
//                  $or: [ { loves: 'frilly shirtsleeves' },
//                         { loves: 'fancy cloaks' },
//                         { loves: 'appearing innocent' },
//                         { loves: 'being tragic' },
//                         { loves: 'brooding' },
//      ]
//  })
//     // if succeeds
//  .then((vampire) => {
//     console.log(vampire)
//  })
//       // if fails
// .catch ((error) => {
//    console.log(error)
//  })
// // // close db connection either way
//  .finally(() => {
//      db.close()
//  })

Vampire.find({ victims: { $lte: 200 } })
// if succeeds
.then((vampire) => {
    console.log(vampire)
 })
      // if fails
.catch ((error) => {
   console.log(error)
 })
// // close db connection either way
 .finally(() => {
     db.close()
 })

 













/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})



////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("SERVER CONNECTED YAY!!");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
