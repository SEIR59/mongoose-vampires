const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1/vampires"
const db = mongoose.connection
const vampireArray = require('./vampire.js')

mongoose.connect(mongoURI,  {useNewUrlParser: true,
  useUnifiedTopology: true,
})
const { Schema , model } = mongoose
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

const vampireSchema = new Schema({
        name: { type: String, require: true},
        title: String,
        hair_color: { type: String, require: 'Blonde'}, 
        eye_color: String,
        dob:  Date,
        loves: Array,
        location: String,
        gender: String,
        victims: { type: Number, min:0 }
})
const Vampire = model("Vampire", vampireSchema)

/*Vampire.insertMany(vampireArray)
.then((data) =>{
  console.log(data)
})
.catch((error) =>{
  console.log(error)
})
.finally(() =>{db.close()})*/

const newVamp = [
  {
    name: 'Vamp One',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 3
  } ,{
    name: 'Vamp Two',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'M',
    victims: 5
  }, {
    name: 'Vamp Three',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'F',
    victims: 4
  }, {
    name: 'Vamp Four',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'F',
    victims: 1
  }
]
// Vampire.insertMany(newVamp)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// Vampire.find({gender: 'f'})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $gt :500 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $lte :150 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $ne :210234 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find( { $and:[ {victims: { $gt :150 }, victims: {$lt : 500 }}]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ title: {$exists: true}})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ title: {$exists: false}})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $and: [{ title: {$exists: true}, victims: {$exists: false} }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $and: [{ vicitms: {$exists: true}, victims: {$gt: 1000} }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $or: [{ location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })


