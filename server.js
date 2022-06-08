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
}, {strict: false})

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
// Vampire.find({gender: 'f'})
// .then((data) => {
//   console.log('-----1-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires with victims greater than 500
// Vampire.find({victims: {$gt: 500}})
// .then((data) => {
//   console.log('-----2-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires with fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}})
// .then((data) => {
//   console.log('-----3-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires whose victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}})
// .then((data) => {
//   console.log('-----4-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires greater than 150 victims and fewer than 500 victims
// Vampire.find({$and: [
//   {victims: {$gt: 150}}, 
//   {victims: {$lt: 500}}
// ]})
// .then((data) => {
//   console.log('-----5-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find all the vampires that have the key of 'title'
// Vampire.find({title: {$exists: true}})
// .then((data) => {
//   console.log('-----6-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find all the vampires who do not have the key of victims
// Vampire.find({victims: {$exists: false}})
// .then((data) => {
//   console.log('-----7-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires with a title and no victims
// Vampire.find({$and: [
//   {title: {$exists: true}}, 
//   {victims: {$exists: false}}
// ]})
// .then((data) => {
//   console.log('-----8-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires with victims and have victims greater than 1000
// Vampire.find({$and: [
//   {victims: {$exists: true}},
//   {victims: {$gt: 1000}}
// ]})
// .then((data) => {
//   console.log('-----9-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that are from new york or new orleans
// Vampire.find({$or: [
//   {location: 'New York, New York, US'},
//   {location: 'New Orleans, Louisiana, US'}
// ]})
// .then((data) => {
//   console.log('-----10-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that love brooding or being tragic
// Vampire.find({$or: [
//   {loves: 'brooding'},
//   {loves: 'being tragic'}
// ]})
// .then((data) => {
//   console.log('-----11-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that love marshmallows and has more than 1000 victims
// Vampire.find({$or: [
//   {loves: 'marshmallows'},
//   {victims: {$gt: 1000}}
// ]})
// .then((data) => {
//   console.log('-----12-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires with red hair or green eyes
// Vampire.find({$or: [
//   {hair_color: 'red'},
//   {eye_color: 'green'}
// ]})
// .then((data) => {
//   console.log('-----13-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that love frilly shirtsleeves or frilly collars
// Vampire.find(
//   {$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}
// )
// .then((data) => {
//   console.log('-----14-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that loves brooding
// Vampire.find(
//   {loves: 'brooding'}
// )
// .then((data) => {
//   console.log('-----15-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires if they love one of the following (shown below)
// Vampire.find(
//   {loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}
// )
// .then((data) => {
//   console.log('-----16-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find love fancy cloaks but not if they also love either top hats or virgin blood
// Vampire.find(
//   {$and: [
//     {loves: 'fancy cloaks'}, 
//     {loves: {$nin: 'top hats'}},
//     {loves: {$nin: 'virgin blood'}}]}
//   )
// .then((data) => {
//   console.log('-----17-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that love ribbons but do not have brown eyes
// Vampire.find(
//   {$and: [
//     {loves: 'ribbons'}, 
//     {eye_color: {$nin: 'brown'}}]}
//   )
// .then((data) => {
//   console.log('-----18-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that are not from Rome
// Vampire.find(
//   {location: {$nin: 'Rome, Italy'}})
// .then((data) => {
//   console.log('-----19-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// query to find vampires that don't love some things
// Vampire.find(
//   {loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']
//   }}
// )
// .then((data) => {
//   console.log('-----20-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// vampire that have not killed more than 200 people
// Vampire.find({victims: {$not: {$gt: 200}}}
// )
// .then((data) => {
//   console.log('-----21-----')
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// replace vampire called 'Claudia' with vampire called 'Eve'
// Vampire.updateOne({name: 'Claudia'}, {$set: {name: 'Eve'}})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.updateOne({name: 'Eve'}, {$set: {portrayed_by: 'Tilda Swinton'}})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// replace the first male vampire with vampire called 'Guy Man'
// Vampire.updateOne({gender: 'm'}, {$set: {name: 'Guy Man'}})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// Guy Man has a key of is_actually with the value of were-lizard
// Vampire.updateOne({name: 'Guy Man'}, {$set: {is_actually: 'were-lizard'}}, {upsert: true})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// update Guy Man to have a gender of 'f'
// Vampire.updateOne({name: 'Guy Man'}, {$set: {gender: 'f'}})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

// update Eve has a gender of 'm'
// Vampire.updateOne({name: 'Eve'}, {$set: {gender: 'm'}})
// .then((data) => {
//   console.log(data)
// })
// .catch((error) => {
//   console.log(error)
// })

Vampire.find({name: 'Eve'})
.then((data) => {
  console.log(data)
})

//////////////
// listener //
//////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
