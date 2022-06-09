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


// FROM NOW DOWN, PLUG THIS CODE ON AFTER Vampire.find()
// .then((res) => {
//   console.log(res)
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
// Vampire.find({
//   $and: [
//     {loves: 'fancy cloaks'},
//     {loves: {
//       $nin: [
//         'top hats', 'virgin blood'
//       ]
//     }}
//   ]
// })

// ========Negative Selection=======
// love ribbons but do not have brown eyes
// Vampire.find({
//   $and: [
//     {loves: 'ribbons'},
//     {eye_color: {$ne: 'brown'}}
//   ]
// })

// are not from Rome
// Vampire.find({
//   location: {$ne: 'Rome'}
// })

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({
//   loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
// })

// have not killed more than 200 people
// Vampire.find({
//   victims: {$lt: 200}
// })
// .then((res) => {
//   console.log(res)
// })

// ========Replace=======
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Claudia'}, 
//   //Update found data
//   {$set: {
//     name:'Eve',
//     potrayed_by: 'Tilda Switch'
//   }}
// )
// .then((res) => {
//   console.log(res)
// })

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.updateOne(
//   //find Claudia
//   {gender:'m'}, 
//   //Update found data
//   {
//     $set:{name: 'Guy Man'}
//   }
// )
// .then((res) => {
//   console.log(res)
// })
// Vampire.updateOne(
//   //find Claudia
//   {name: 'Guy Man'}, 
//   //Update found data
//   {
//     $set:{is_actually: 'were-lizard'}
//   }
// )
// .then((res) => {
//   Vampire.find({name:'Guy Man'})
//   .then((res) => {
//     console.log(res)
//   })
  
// })

// ========Update=======
// Update 'Guy Man' to have a gender of 'f'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Guy Man'}, 
//   //Update found data
//   {$set: {
//     gender: 'f'
//   }}
// )

// Update 'Eve' to have a gender of 'm'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Eve'}, 
//   //Update found data
//   {$set: {
//     gender: 'm'
//   }}
// )

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Guy Man'}, 
//   //Update found data
//   {$set: {
//     hates: ['clothes', 'jobs']
//   }},
//   {upsert: true}
// )

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Guy Man'}, 
//   //Update found data
//   {$push: 
//     {hates: {$each:['clothes', 'jobs']}}
//   }
// )

// Rename 'Eve's' name field to 'moniker'
// Vampire.updateOne(
//   //find Claudia
//   {name:'Eve'}, 
//   //Update found data
//   {$set: 
//     {name: 'moniker'}
//   }
// )

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany(
//   //find Claudia
//   {gender:'f'}, 
//   //Update found data
//   {$set: 
//     {gender: 'fems'}
//   }
// )

// ========Remove=======
// Remove a single document wherein the hair_color is 'brown'
// Vampire.deleteOne({hair_color:'brown'})
// .then((res) => {
//   console.log(res)
// })

// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
Vampire.deleteMany({eye_color:'blue'})
.then((res) => {
  console.log(res)
})
  // Vampire.find({gender:'fems'})
  // .then((res) => {
  //   console.log(res)
  // })

app.listen(port, () => {
  console.log("port 3000 listens");
  routesReport.print();
});
