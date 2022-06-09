require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")
const app = require("liquid-express-views")(express(), {
  root: [path.resolve(__dirname, "views/")],
})
const PORT = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

const { Schema, model } = mongoose

const vampireSchema = new Schema({
  name: { type: String, required: true },
  title: String,
  hair_color: { type: String, default: "Blonde" },
  eye_color: String,
  dob: { type: Date, default: Date.now },
  loves: [String],
  location: String,
  gender: String,
  victims: { type: Number, min: 0 },
  portrayed_by: String,
  is_actually: String,
  hates: [String],
  moniker: String,
})

const Vampire = model("Vampire", vampireSchema)

async function runVamps() {
  const vampires = await Vampire.create([
    {
      name: "Count Chocula",
      hair_color: "brown",
      eye_color: "brown",
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ["cereal", "marshmallows"],
      location: "Minneapolis, Minnesota, US",
      gender: "m",
      victims: 2,
    },
    {
      name: "Dracula",
      dob: new Date(937, 0, 24, 13, 0),
      hair_color: "brown",
      eye_color: "blue",
      loves: [
        "Winona Ryder",
        "top hats",
        "fancy cloaks",
        "handlebar   mustaches",
      ],
      location: "Transylvania, Romania",
      gender: "m",
      victims: 1238,
    },
    {
      name: "Elizabeth Bathory ",
      dob: new Date(1560, 8, 7, 22, 10),
      hair_color: "brown",
      eye_color: "brown",
      loves: ["virgin blood", "fancy cloaks", "frilly collars"],
      location: "Nyírbátor, Hungary",
      gender: "f",
      victims: 980,
    },
    {
      name: "Lestat",
      dob: new Date(1760, 11, 9, 18, 44),
      hair_color: "blonde",
      eye_color: "blue",
      loves: [
        "frilly shirtsleeves",
        "frilly collars",
        "lurking in   rotting mansions",
        "Louis",
      ],
      location: "Auvergne, France",
      gender: "m",
      victims: 324,
    },
    {
      name: "Louis de Pointe du Lac",
      dob: new Date(1766, 6, 4, 2, 1),
      hair_color: "brown",
      eye_color: "blue",
      loves: ["brooding", "Claudia", "staring longingly into the   distance"],
      location: "New Orleans, Louisiana, US",
      gender: "m",
      victims: 150,
    },
    {
      name: "Claudia",
      dob: new Date(1793, 2, 7, 8, 30),
      hair_color: "blonde",
      eye_color: "blue",
      loves: ["doll babies", "ribbons", "appearing innocent", "  trickery"],
      location: "New Orleans, Louisiana, US",
      gender: "f",
      victims: 290,
    },
    {
      name: "Armand",
      dob: new Date(1481, 6, 1, 10, 42),
      hair_color: "red",
      eye_color: "brown",
      loves: ["theatre", "painting", "velvet robes", "being tragic"],
      location: "Kiev, Russia",
      gender: "m",
      victims: 1045,
    },
    {
      name: "Santino",
      dob: new Date(1465, 6, 1, 10, 42),
      hair_color: "brown",
      eye_color: "brown",
      loves: ["trickery", "vampiric cults", "fancy cloaks"],
      location: "Rome, Italy",
      gender: "m",
      victims: 1103,
    },
    {
      name: "Akasha",
      dob: new Date(-8000, 6, 1, 10, 42),
      hair_color: "brown",
      eye_color: "green",
      loves: [
        "eating hearts",
        "bathing in roses",
        "elaborate   headdresses",
        "R&B music",
      ],
      location: "Kemet, Egypt",
      gender: "f",
      victims: 210234,
      title: "Queen of the Damned",
    },
    {
      name: "Edward Cullen",
      dob: new Date(1901, 6, 20, 0, 57),
      hair_color: "brown",
      eye_color: "brown",
      loves: ["brooding", "diamond skin", "calling people spider   monkeys"],
      location: "Chicago, Illinois, US",
      gender: "m",
    },
    {
      name: "Persephone Bourignon",
      dob: new Date(1801, 5, 17, 14, 53),
      hair_color: "red",
      eye_color: "green",
      loves: ["wine", "fancy cloaks", "appearing innocent"],
      location: "Paris, France",
      gender: "f",
      victims: 450,
    },
    {
      name: "René Tremblay",
      dob: new Date(1922, 2, 8, 5, 3),
      hair_color: "brown",
      eye_color: "green",
      loves: ["frilly shirtsleeves", "trickery", "card games"],
      location: "Bucharest, Romania",
      gender: "m",
      victims: 134,
    },
    {
      name: "Caroline Belmont",
      hair_color: "blonde",
      eye_color: "brown",
      dob: new Date(1799, 4, 21, 16, 15),
      loves: ["marshmallows", "ribbons", "being tragic"],
      location: "Ljubljana, Slovenia",
      gender: "f",
      victims: 567,
    },
    {
      name: "Francis Frost",
      hair_color: "black",
      eye_color: "blue",
      dob: new Date(1976, 6, 18, 18, 18),
      loves: ["brooding", "frilly shirtsleeves"],
      location: "New York, New York, US",
      gender: "m",
      victims: 112,
    },
    {
      name: "Barnabas Spenser",
      hair_color: "brown",
      eye_color: "brown",
      dob: new Date(1984, 6, 3, 13, 12),
      loves: ["being merry", "being insane", "card games"],
      location: "New York, New York, US",
      gender: "m",
      title: "Osiris of Sewer Rats",
    },
  ])
}

let newVamps = [
  {
    name: "Nick Cage",
    hair_color: "Barely has hair",
    eye_color: "brown",
    dob: new Date(1965, 4, 3, 2, 1),
    loves: ["Aquaman!!!!!!!!!"],
    location: "London, England, UK",
    gender: "m",
    title: "Amber heard did what?",
  },
  {
    name: "Morbius",
    hair_color: "Black",
    eye_color: "Black",
    dob: new Date(1200, 5, 4, 3, 2),
    loves: ["morbin"],
    location: "Haverfordwest, England, UK",
    gender: "m",
    title: "It's Morbin Time",
    victims: 1000000,
  },
  {
    name: "Jacob",
    hair_color: "Brown",
    eye_color: "brown",
    dob: new Date(2000, 5, 4, 3, 2),
    love: ["emma?"],
    location: "twilight zone",
    gender: "f",
    title: "wolf?",
    victims: 11,
  },
  {
    name: "Rascal",
    hair_color: "orange",
    eye_color: "green",
    dob: new Date(2019, 8, 5, 4, 3),
    loves: ["knocking shit off my desk"],
    location: "saint joe mi",
    gender: "f",
    title: "Chubby bear",
    victims: 7000000000,
  },
]

// Vampire.insertMany(newVamps, function (error) {
//   if (error) console.log(error)
//   console.log("Documents inserted into Vampire collection")
// })

// find female
async function findDocs() {
  const find = await Vampire.find({ gender: "f" })
  console.log(find)
}

// findDocs()
// find kill count
async function find500() {
  const findOver = await Vampire.find({ victims: { $gt: 500 } })
  console.log(findOver)
}
// find500()
// find kill count lte 150
async function findFew() {
  const find150 = await Vampire.find({ victims: { $lte: 150 } })
  console.log(find150)
}
// findFew()
async function findNotEqual() {
  const notNumber = await Vampire.find({ victims: { $ne: 210234 } })
  console.log(notNumber)
}
//findNotEqual()

async function fewerAndGreater() {
  const gtlt = await Vampire.find({ victims: { $gt: 150, $lt: 500 } })
  console.log(gtlt)
}
// fewerAndGreater()

async function hasTitle() {
  const hasATitle = await Vampire.find({ title: { $exists: true } })
  console.log(hasATitle)
}
// hasTitle()

async function noVictims() {
  const ifNoVictims = await Vampire.find({ victims: { $exists: false } })
  console.log(ifNoVictims)
}
// noVictims()

async function victimsAndTitles() {
  const ifNoVictimsAndTitles = await Vampire.find({
    $and: [{ victims: { $exists: false } }, { title: { $exists: true } }],
  })
  console.log(ifNoVictimsAndTitles)
}
// victimsAndTitles()

async function largeVictims() {
  const aLotOfVictims = await Vampire.find({ victims: { $gte: 1000 } })
  console.log(aLotOfVictims)
}
// largeVictims()

async function frilly() {
  const frillyStuff = await Vampire.find({
    $or: [{ loves: "frilly collars" }, { loves: "frilly shirtsleeves" }],
  })
  console.log(frillyStuff)
}
// frilly()

async function brooding() {
  const lovesBrooding = await Vampire.find({ loves: "brooding" })
  console.log(lovesBrooding)
}
// brooding()

async function loveAtLeast() {
  const lovesOne = await Vampire.find({
    loves: {
      $in: [
        "appearing innocent",
        "trickery",
        "lurking in rotting mansions",
        "R&B music",
      ],
    },
  })
  console.log(lovesOne)
}
// loveAtLeast()

async function fancyCloaks() {
  const notIf = await Vampire.find({
    $and: [
      { loves: "fancy cloaks" },
      { loves: { $nin: ["top hats", "virgin blood"] } },
    ],
  })
  console.log(notIf)
}
// fancyCloaks()

async function loveRibbons() {
  const ribbonsBut = await Vampire.find({
    $and: [{ loves: "ribbons" }, { eye_color: { $ne: "brown" } }],
  })
  console.log(ribbonsBut)
}
// loveRibbons()

async function notRoman() {
  const notFromRome = await Vampire.find({ location: { $not: /rome/ } })
  console.log(notFromRome)
}
// notRoman()

async function doesntLove() {
  const nonLover = await Vampire.find({
    loves: {
      $nin: [
        "fancy cloaks",
        "frilly shirtsleeves",
        "appearing innocents",
        "being tragic",
        "brooding",
      ],
    },
  })
  console.log(nonLover)
}
// doesntLove()

async function smallTimeKilla() {
  const fewVictims = await Vampire.find({ victims: { $lt: 200 } })
  console.log(fewVictims)
}
// smallTimeKilla()

async function claudiaDies() {
  await Vampire.updateOne({ name: "Claudia" }, { $set: { name: "Eve" } })
}
// claudiaDies()

async function evePortrayed() {
  let update = await Vampire.findOneAndUpdate(
    { name: "Eve" },
    { $set: { portrayed_by: "Tilda Swinton" } }
  )
  console.log(update)
}
// evePortrayed()

async function maleLizard() {
  let newGuy = await Vampire.findOneAndUpdate(
    { gender: "m" },
    { name: "Guy Man", is_actually: "were-lizard" },
    { new: true }
  )
  console.log(newGuy)
}
// maleLizard()

async function changeGender() {
  let newGenderF = await Vampire.updateOne(
    { name: "Guy Man" },
    { $set: { gender: "f" } }
  )
  console.log(newGenderF)
  let newGenderM = await Vampire.updateOne(
    { name: "Eve" },
    { $set: { gender: "m" } }
  )
  console.log(newGenderM)
}
// changeGender()

async function hatesStuff() {
  let hatingThings = await Vampire.updateOne(
    { name: "Guy Man" },
    { $set: { hates: ["clothes", "jobs", "alarm clocks", "jackalopes"] } }
  )
  console.log(hatingThings)
}
// hatesStuff()

async function newName() {
  let newMoniker = await Vampire.updateOne(
    { name: "Eve" },
    { $rename: { name: "moniker" } }
  )
  console.log(newMoniker)
}
// newName()

async function femaleUpdate() {
  let newFems = await Vampire.updateMany(
    { gender: "f" },
    { $set: { gender: "fems" } }
  )
  console.log(newFems)
}
// femaleUpdate()

async function removeBrown() {
  let deleteBrown = await Vampire.deleteOne({ hair_color: "brown" })
  console.log(deleteBrown)
}
// removeBrown()

async function blueEyedFakes() {
  let deleteBlues = await Vampire.deleteMany({ eye_color: "blue" })
  console.log(deleteBlues)
}
// blueEyedFakes()
