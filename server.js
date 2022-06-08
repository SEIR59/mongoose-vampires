// importing dependencies
require("dotenv").config() // loading env variables
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const path = require("path")

// connecting with a database
// input set up
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// establishing connection with input
mongoose.connect(DATABASE_URL, CONFIG)

// feedback on database connection
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

// pulling schemas and models from mongoose
const Schema = mongoose.Schema
const model = mongoose.model

// making a vampire schema
const vampireSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name!']
  },
  title: String,
  hair_color: {
    type: String,
    default: "blonde"
  },
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: {
    type: Number,
    min: [0, 'Not a valid number of victims']
  }
})

// make vampire model
const Vampire = model("Vampire", vampireSchema)

// creating an express application object
const app = require("liquid-express-views")(express(), { root: [path.resolve(__dirname, 'views/')] })

// middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

//////////////
// vampires //
//////////////
const seedData = [
  {
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  }, {
    name: 'Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  }, {
    name: 'Elizabeth Bathory ',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks', 'frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  }, {
    name: 'Lestat',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
  }, {
    name: 'Louis de Pointe du Lac',
    dob: new Date(1766, 6, 4, 2, 1),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['brooding', 'Claudia', 'staring longingly into the   distance'],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150
  }, {
    name: 'Claudia',
    dob: new Date(1793, 2, 7, 8, 30),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290
  }, {
    name: 'Armand',
    dob: new Date(1481, 6, 1, 10, 42),
    hair_color: 'red',
    eye_color: 'brown',
    loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045
  }, {
    name: 'Santino',
    dob: new Date(1465, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103
  }, {
    name: 'Akasha',
    dob: new Date(-8000, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    title: 'Queen of the Damned'
  }, {
    name: 'Edward Cullen',
    dob: new Date(1901, 6, 20, 0, 57),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
    location: 'Chicago, Illinois, US',
    gender: 'm',
  }, {
    name: 'Persephone Bourignon',
    dob: new Date(1801, 5, 17, 14, 53),
    hair_color: 'red',
    eye_color: 'green',
    loves: ['wine', 'fancy cloaks', 'appearing innocent'],
    location: 'Paris, France',
    gender: 'f',
    victims: 450
  }, {
    name: 'René Tremblay',
    dob: new Date(1922, 2, 8, 5, 3),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['frilly shirtsleeves', 'trickery', 'card games'],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134
  }, {
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ['marshmallows', 'ribbons', 'being tragic'],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567
  }, {
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['brooding', 'frilly shirtsleeves'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112
  }, {
    name: 'Barnabas Spenser',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1984, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'New York, New York, US',
    gender: 'm',
    title: 'Osiris of Sewer Rats'
  }
]

const myVampires = [
  {
    name: 'Alex Kang',
    hair_color: 'black',
    eye_color: 'dark brown',
    dob: new Date(2001, 2, 18, 8, 50),
    loves: ['reading', 'causing trouble'],
    location: 'Boston, Massachusetts, US',
    gender: 'm',
    victims: 20
  }, {
    name: 'Door Strawberry',
    dob: new Date(1999, 6, 10, 12, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['anime', 'strawberry ice cream'],
    location: 'Montreal, Canada',
    gender: 'm',
    victims: 9
  }, {
    name: 'Tinga',
    dob: new Date(2002, 5, 7, 14, 9),
    hair_color: 'brown',
    eye_color: 'dark brown',
    loves: ['nurse', 'being short', 'flimsy glasses'],
    location: 'Hotel Vampiringa',
    gender: 'f',
    victims: 69
  }, {
    name: 'Tringi',
    dob: new Date(2040, 10, 8, 20, 34),
    hair_color: 'black',
    eye_color: 'green',
    loves: ['wings', 'drawing'],
    location: 'Hotel Vampiringa',
    gender: 'f',
    victims: 0
  }
]

////////////
// routes //
////////////
// default route
app.get("/", (request, response) => {
  response.send("Server is running")
})

// seed route
app.get("/vampires/seed", (request, response) => {
  Vampire.deleteMany({}).then((data) => {
    Vampire.create(seedData).then((data) => {
      response.json(data)
    })
  })
})

// inserting own vampires
// Vampire.insertMany(myVampires)
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

//////////////////////////
// select by comparison //
//////////////////////////
// query to find all female vampires
Vampire.find({gender: 'f'})
.then((data) => {
  console.log(data)
  console.log('----------')
})
.catch((error) => {
  console.log(error)
})

// query to find vampires with victims greater than 500
Vampire.find({victims: {$gt: 500}})
.then((data) => {
  console.log(data)
  console.log('----------')
})
.catch((error) => {
  console.log(error)
})

// query to find vampires with fewer than or equal to 150 victims
Vampire.find({victims: {$lte: 150}})
.then((data) => {
  console.log(data)
  console.log('----------')
})
.catch((error) => {
  console.log(error)
})

// query to find vampires whose victim count is not equal to 210234
Vampire.find({victims: {$ne: 210234}})
.then((data) => {
  console.log(data)
  console.log('----------')
})
.catch((error) => {
  console.log(error)
})

// query to find vampires greater than 150 victims and fewer than 500 victims
Vampire.find({victims: {$and: [
  {victims: {$gt: 150}}, 
  {victims: {$lt: 500}}
]}})
.then((data) => {
  console.log(data)
  console.log('----------')
})
.catch((error) => {
  console.log(error)
})


//////////////
// listener //
//////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
