/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const startVampires = require("./models/seed.js");
const db = mongoose.connection;
const Vampire = require("./models/vampire.js");

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
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));




/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));



////////////////////////////////////////////
// Seed
////////////////////////////////////////////
app.get("/vampires/seed", (req, res) => {
   
    // Delete all vampires
    Vampire.deleteMany({}).then((data) => {
      // Seed Starter Vampiress
      Vampire.create(startVampires).then((data) => {
        
        res.json(data);
      });
    });
  });
////////////////////////////////////////////
// 4 vampire
////////////////////////////////////////////
const newVampires = [
{
    name: 'Con Chocolate',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },{
    name: 'Dracula Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  },{
    name: 'Eli eli ',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks','frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  },{
    name: 'lebron lebron',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'f',
    victims: 324
  }
]

//Add some new vampire data
// Vampire.insertMany(newVampires)
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



//1.Find all the vampires that that are females
// Vampire.find({gender:'f'})
// // if database transaction succeeds
// .then((Vampire) => {
//   console.log(Vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//2.have greater than 500 victims

// Vampire.find({victims:{$gt:500}})
// // if database transaction succeeds
// .then((Vampire) => {
//   console.log(Vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })


//3.have fewer than or equal to 150 victims

// Vampire.find({victims:{$lte:150}})
// // if database transaction succeeds
// .then((Vampire) => {
//   console.log(Vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//4.have a victim count is not equal to 210234
// Vampire.find({victims: {$ne:210234}})
// // if database transaction succeeds
// .then((Vampire) => {
//   console.log(Vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//5.have greater than 150 AND fewer than 500 victims
// Vampire.find({$and: [{victims: {$gt:150}},{victims:{$lt:500}}]})
// // if database transaction succeeds
// .then((Vampire) => {
//   console.log(Vampire)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//6.have a key of 'title'
// Vampire.find({title:{$exists:true}})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//7.do not have a key of 'victims'
// Vampire.find({victims:{$exists:false}})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//8.have a title AND no victims
// Vampire.find({$and:[{title:{$exists:true}},{victims:{$exists:false}}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })


//9.have a title AND no victims
// Vampire.find({$and:[{victims:{$gt:1000}},{victims:{$exists:true}}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

////////////////////////////////////////////
// Add the vampire data that we gave you
////////////////////////////////////////////
// Vampire.insertMany(startVampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

/////////////////////////////////
//Select with OR
/////////////////////////////////

//1.are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//2.love brooding or being tragic
// Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//3.have more than 1000 victims or love marshmallows
// Vampire.find({$or:[{victims:{$gt:1000}},{loves:'marshmallows'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//4.have red hair or green eyes
// Vampire.find({$or:[{hair_color:'red'},{eye_color:'green'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//////////////////////////////////////////////////
//Select objects that match one of several values
//////////////////////////////////////////////////

//1.have red hair or green eyes
// Vampire.find({$or:[{loves:'frilly shirtsleeves'},{loves:'frilly collars'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//2.love brooding
// Vampire.find({loves:'brooding'})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

//3.love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// Vampire.find({$or:[
//     {loves:'appearing innocent'},
//     {loves:'trickery'},
//     {loves:'lurking in rotting mansions'},
//     {loves:'R&B music'}
// ]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })


//4.love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({$and:[{loves:{$nin:['top hats','virgin blood']}},{loves:'fancy cloaks'}]})
// .then((Vampire) => {
//   console.log(Vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })