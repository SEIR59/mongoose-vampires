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
// ========find key of title vampires=======
Vampire.find({victims: {$gt:150, $lt:500}})
.then((res) => {
    console.log(res)
})

app.listen(port, () => {
  console.log("port 3000 listens");
  routesReport.print();
});
