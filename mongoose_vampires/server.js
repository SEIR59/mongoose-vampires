
const express = require("express");
const app = require('liquid-express-views')(express())
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const Vampires = require('./models/vampires')
const vampireSeed = require('./models/vampireSeed');


const mongoURI = 'mongodb://127.0.0.1'
const db = mongoose.connection

mongoose.connect(mongoURI)

db.on("open", () => console.log("Connected to Mongoose"))
db.on("close", () => console.log("Disconnected from Mongoose"))
db.on("error", (error) => console.log(error));

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.listen(3000, () => {
  console.log('port 3000')
})

// const vampy = {
//   name: 'vampy',
//   title: 'king',
//   hair_color: 'blonde',
//   eye_color: 'green',
//   dob: new Date(1995, 12 , 31),
//   loves: ['garlic', 'woodstakes'],
//   location: 'Houston, Texas, US',
//   gender: 'm',
//   victims: 5
// }

//  const vampFamily = [
//    vamperina = {
//     name: 'vampy',
//     title: 'queen',
//     hair_color: 'blonde',
//     eye_color: 'green',
//     dob: new Date(1990, 8 , 4),
//     loves: ['blood', 'puppies'],
//     location: 'Dallas, Texas, US',
//     gender: 'f',
//     victims: 20
//   },

//    vampboy = {
//     name: 'vampboy',
//     title: 'prince',
//     hair_color: 'blonde',
//     eye_color: 'red',
//     dob: new Date(1934, 7 , 11),
//     loves: ['cars', 'flying'],
//     location: 'Austin, Texas, US',
//     gender: 'm',
//     victims: 5
//   },
//    vampgirl = {
//     name: 'vampy',
//     title: 'duchess',
//     hair_color: 'blonde',
//     eye_color: 'green',
//     dob: new Date(1940, 12 , 15),
//     loves: ['garlic', 'woodstakes'],
//     location: 'Houston, Texas, US',
//     gender: 'f',
//     victims: 22
//   }
// ]

// Vampires.create(vampy)
// .then((vampires) =>{
//   console.log(vampires)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//   db.close
// })


// Vampires.insertMany(vampFamily)
// .then((Vampires) =>  {
//   console.log(Vampires)
// })
// .catch((error) =>{
//   console.log(error)
// })
// .finally(() =>{
//   db.close()
// })

// Vampires.find({gender: 'f'})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })


// Vampires.find({victims: {$gt: 500}})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({victims: {$lte: 150}})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({victims: {$ne: 210234}})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({$and: [{victims: {$gt: 150}}, {victims:{$lt: 500}}]})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({},{title:1})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({victims: null})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({victims: null})
// .then((Vampires) =>  {
//     console.log(Vampires)
//   })
//   .catch((error) =>{
//     console.log(error)
//   })
//   .finally(() =>{
//     db.close()
//   })

// Vampires.find({
//   $and: [{ victims: { $exists: false } }, { title: { $exists: true } }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $and: [{ victims: { $exists: true } }, { victims: { $gt: 1000 } }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ location: 'New York, New York, US' }, { location:  'New Orleans, Louisiana, US' }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ loves: 'brooding' }, { loves:  'being tragic' }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ victims: {$gt: 1000} }, { loves:  'marshmallows' }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ hair_color: 'red' }, { eye_color: 'green'}]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ loves: 'frilly shirtsleeves' }, { loves: 'frilly collars'}]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({ loves: 'brooding'})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ loves: 'appearing innocent' }, { loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, {loves: 'R&B music'}]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $or: [{ loves: 'fancy cloaks' }, { loves: { $nin: ['top hats', 'virgin blood'] } }]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({
//   $and: [{ loves: 'ribbons' }, {eye_color: {$nin: 'brown'}}]
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({location: {$nin: 'Rome, Italy'}})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })


// Vampires.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
// })
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.find({ victims: {$lte: 200 }} )
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndReplace({ name: 'Claudia'}, {name: 'Eve', portrayed_by: 'Tilda Swinton'})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndReplace({ gender: 'm'}, {name: 'Guy Man', is_actually: 'were-lizard'})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndUpdate({name: 'Guy Man'}, {gender: 'f'}, {new: true})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndUpdate({name: 'Eve'}, {gender: 'm'}, {new: true})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndUpdate({name: 'Guy Man'}, {hates: ['clothes', 'jobs']}, {new: true})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })

// Vampires.findOneAndUpdate({name: 'Guy Man'}, {$push: {hates: ['alarm clocks','jackalopes']}})
//   .then((Vampires) => {
//     console.log(Vampires)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     db.close()
//   })


// Vampires.findOneAndUpdate({ name: 'Eve'}, { $rename: {'name': 'moniker' }},
//     { new: true }
// )
// .then((Vampires) => {
// console.log(Vampires)
// })
// .catch(error => res.json(error))
// .finally(() => {
//     db.close()
// })

// Vampires.updateMany({ gender: 'f'}, {gender: 'fems'},{new: true})
// .then((Vampires) => {
// console.log(Vampires)
// })
// .catch(error => res.json(error))
// .finally(() => {
//     db.close()
// })


// Vampires.findOneAndRemove({ hair_color: "brown"}, { new: true }
// )
// .then((Vampires) => {
// console.log(Vampires)
// })
// .catch(error => res.json(error))
// .finally(() => {
//     db.close()
// })


// Vampires.deleteMany({ eye_color: "blue"}, { new: true }
// )
// .then((Vampires) => {
// console.log(Vampires)
// })
// .catch(error => res.json(error))
// .finally(() => {
//     db.close()
// })



