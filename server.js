const express = require("express");
const app = require("liquid-express-views")(express());
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const port = 3000;
const rowdy = require("rowdy-logger");
const routesReport = rowdy.begin(app);
const Vampire = require("./models/vampire.js");

// homepage
app.get("/", (req, res) => {
  res.send("Mongoose-Vampires homepage");
});

const newVampires = [
  {
    name: "M1",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2,
  },
  {
    name: "M2",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2,
  },
  {
    name: "FM1",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "f",
    victims: 2,
  },
  {
    name: "FM2",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "f",
    victims: 2,
  },
];
// Vampire.insertMany(newVampires)
// .then((newVampires) => {
//     console.log(newVampires)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// ========find female vampires=======
// Vampire.find({gender: 'f'})
// .then((res) => {
//     console.log(`List of female vampires ${res}`)
// })

// ========find more than 500 victims vampires=======
// Vampire.find({victims: {$gt:500}})
// .then((res) => {
//     console.log(res)
// })

// ========find less or equal 150 victims vampires=======
// Vampire.find({victims: {$lte:500}})
// .then((res) => {
//     console.log(res)
// })

// ========find !== 210234 victims vampires=======
// Vampire.find({victims: {$ne:210234}})
// .then((res) => {
//     console.log(res)
// })

// ========find >150 && <500 victims vampires=======
// Vampire.find({victims: {$gt:150, $lt:500}})
// .then((res) => {
//     console.log(res)
// })

// ========select exist or doesnot exist=======
// key of title vampires exist
// Vampire.find({title: {$exists:true}})

// donot have a key
// Vampire.find({title: {$exists:false}})

// have a title AND no victims
// Vampire.find({title: {$exists:true}, victims:{$exists:false}})

// have victims AND the victims they have are greater than 1000
// Vampire.find({ victims:{$exists:true, $gt:1000}})
// .then((res) => {
//     console.log(res)
// })

// ========select with or=======
// OR IN OBJECT
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
//   $or: [
//     {
//       location: 'New York, New York, US'
//     },
//     {
//       location: 'New Orleans, Louisiana, US'
//     }
//   ]
// })

// OR IN ARRAY
// love brooding or being tragic
// Vampire.find({
//   loves: {
//     $in: [
//       'brooding', 'being tragic'
//     ]
//   }
// })

// have more than 1000 victims or love marshmallows
// Vampire.find({
//   $or: [
//     {victims: {$gt:1000}},
//     {loves: {$in: ['marshmallows']}}
//   ]
// })

// have red hair or green eyes
// Vampire.find({
//   $or: [
//     {hair_color: 'red'},
//     {eye_color: 'green'}
//   ]
// })

// ========Select objects that match one of several values=======
// love either frilly shirtsleeves or frilly collars
// Vampire.find({
//   loves: {
//     $in: [
//       'frilly shirtsleeves ', 'frilly collars'
//     ]
//   }
// })

// loves brooding
// Vampire.find({
//   loves:
//     'brooding'
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({
//   loves: {
//     $in: [
//       'appearing innocent',
//       'trickery',
//       'lurking in rotting mansions',
//       'R&B music'
//     ]
//   }
// })

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find({
  $and: [
    {loves: 'fancy cloaks'},
    {loves: {
      $nin: [
        'top hats', 'virgin blood'
      ]
    }}
  ]
})
.then((res) => {
    console.log(res)
})

app.listen(port, () => {
  console.log("port 3000 listens");
  routesReport.print();
});
