/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const VampireArray = require("./model/vampire.js"); //my array


/////////////////////////////////////////////
// Global Configuration
/////////////////////////////////////////////// const mongoURI = "YOUR MONGODB URL"; //this is the url - where you want to go
const mongoURI = "mongodb://127.0.0.1/vampires"; //this is the url - where you want to go
const db = mongoose.connection;


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////

// Establish Connection
// Setup inputs for our connect function
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Connection Error/Success
// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));



/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically


////////////////////////////////////////////////
// Create Document
////////////////////////////////////////////////


  const ogVampire = {
      name: 'Chocula',
      title: 'Count',
      hair_color: 'brown',
      eye_color: 'brown',
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ['cereal','marshmallows'],
      location: 'Minneapolis, Minnesota, US',
      gender: 'm',
      victims: 2,
    }

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make vampire schema
const vampireSchema = new Schema({
  name: {type: String, required: true },
  title: String,
  hair_color: {type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: {type: Number, min: 0}, //no less than 0 victims
},
{strict: false}
);

// make vampire model //new database
const Vampire = model("Vampire", vampireSchema);


// ----------
// Vampire.insertMany(VampireArray)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// ---------------
const newVampires = [
    {
        name: 'Merlin',
        title: 'Viceroy',
        hair_color: 'blonde',
        eye_color: 'blue',
        dob: new Date(1952, 2, 13, 7, 47),
        loves: ['books','cats'],
        location: 'Chicago, Illinois, US',
        gender: 'm',
        victims: 90,
      },
      {
        name: 'Cecilia',
        title: 'Duchess of Aragon',
        hair_color: 'brown',
        eye_color: 'hazel',
        dob: new Date(1967, 2, 14, 7, 47),
        loves: ['corgies','rock climbing'],
        location: 'London, England, UK',
        gender: 'f',
        victims: 52,
      },
      {
        name: 'Thomas',
        title: 'Captain',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1941, 2, 13, 6, 47),
        loves: ['high tea','cricket'],
        location: 'London, England, UK',
        gender: 'm',
        victims: 1100,
      },
      {
        name: 'Eloise',
        title: 'Lady',
        hair_color: 'brown',
        eye_color: 'blue',
        dob: new Date(1991, 3, 26, 7, 47),
        loves: ['music','long walks'],
        location: 'Glendora, California, US',
        gender: 'f',
        victims: 260,
      }
]

// ----------
// Vampire.insertMany(newVampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

////////////////////////////////////////////////
// Queries
////////////////////////////////////////////////

//SELECT BY COMPARISON
// // Find all the vampires that that are females
// Vampire.find({ gender: 'f'}) //just find female vampires
// // if database transaction succeeds
// .then((vampire) => {
//     console.log(vampire)
// })
// // if database transaction fails
// .catch ((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(() => {
//     db.close()
// })

//have greater than 500 victims
// Vampire.find({ victims: { $gte: 500 } })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lt: 150 } })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have greater than 150 AND fewer than 500 victims
// Vampire.find( {$and:  [{victims: {$gte: 150}, victims: {$lt: 500} }] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//Select by exists or does not exist
//have a key of 'title'
// Vampire.find( { title: {$exists: '',} })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//do not have a key of 'victims'
// Vampire.find( {victims: { $exists: false} })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// have a title AND no victims
// Vampire.find( {$and: [{title: {$exists: true}}, {victims: { $exists: false}}] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// have victims AND the victims they have are greater than 1000
// Vampire.find( {$and: [{victims: { $exists: true}}, {victims: {$gt: 1000}}] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


// SELECT WITH OR
//are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find( {$or: [{location: 'New York, New York, US', location: 'New Orleans, Louisiana, US' }] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//love brooding or being tragic
// Vampire.find( {$or: [{loves: 'brooding', loves: 'being tragic' }] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have more than 1000 victims or love marshmallows
// Vampire.find( {$or: [{victims: { $gte: 1000}}, {loves: 'marshmallows'} ] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have red hair or green eyes
// Vampire.find( {$or: [{hair_color: 'red'}, {eye_color: 'green'} ] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// SELECT OBJECTS THAT MATCH ONE OF SEVERAL VALUES
//love either frilly shirtsleeves or frilly collars
// Vampire.find( {$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'} ] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//love brooding
// Vampire.find( {loves: 'brooding'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find( {$or: [{loves: ' appearing innocent'}, {loves: 'trickery'}, {loves: 'lurking in rotting mansions'} , {loves: 'R&B music'}] })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({loves: {$nin: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// NEGATIVE SELECTION
//love ribbons but do not have brown eyes
// Vampire.find({loves: "ribbons", eye_color: {$ne: "brown"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })


// are not from Rome
// Vampire.find( {location: {$not: { $eq: 'Rome, Italy'}} })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find( {loves: {$not: { $eq: 'fancy cloaks'}, { $eq: 'frilly shirtsleeves'}, { $eq: 'appearing innocent'}, { $eq: 'being tragic'}, { $eq: 'brooding'}} })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//have not killed more than 200 people
// Vampire.find( {victims: {$not: { $gt: 200}} })
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


// REPLACE 
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.replaceOne( {name: 'Claudia'}, { name: 'Eve'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// Vampire.updateOne( {name: 'Eve'}, { $set: { portrayed_by: 'Tilda Swinton'}}, {upsert: true} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

// Vampire.replaceOne( {name: 'Count Chocula'}, { name: 'Guy Man'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// Vampire.updateOne( {name: 'Guy Man'}, { $set: { is_actually: 'were-lizard'}}, {upsert: true} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//UPDATE
//Update 'Guy Man' to have a gender of 'f'
// Vampire.updateOne( {name: 'Guy Man'}, { gender: 'f'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//Update 'Eve' to have a gender of 'm'
// Vampire.updateOne( {name: 'Eve'}, { gender: 'm'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.updateOne( {name: 'Guy Man'}, {$push: { hates: ['clothes', 'jobs']}} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.updateOne( {name: 'Guy Man'}, {$push: { hates: ['alarm clocks', 'jackalopes']}} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//Rename 'Eve's' name field to 'moniker'
// Vampire.updateOne( {name: 'Eve'}, { $rename: { name: 'moniker'}}, {upsert: true} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany( {gender: 'f'}, { gender: 'fems'}, {upsert: true} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//REMOVE
//Remove a single document wherein the hair_color is 'brown'
// Vampire.deleteOne( {hair_color: 'brown'} )
// // if database transaction succeeds
// .then((vampire) => {
//   console.log(vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
Vampire.deleteMany( {eye_color: 'blue'} )
// if database transaction succeeds
.then((vampire) => {
  console.log(vampire)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})






