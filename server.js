const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const Vampire = require('./models/vampires')
const seedData = require('./models/seed')

const mongoURI = 'mongodb://127.0.0.1'
const db = mongoose.connection

mongoose.connect(mongoURI)

db.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (err) => console.log(error))

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log("Route Runner")
    next()
})

app.get('/new', (req,res) => {
    res.render('new')
})

app.listen(3000, () => {
    console.log('Port 3000')
})

// Vampire.insertMany(seedData)
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

const drAcula =
    {
        name: 'Dr Acula',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Sacred Heart, Washington, US',
        gender: 'm',
        victims: 25555,
      }
const mrsAcula = 
      {
        name: 'Mrs Acula',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Sacred Heart, Washington, US',
        gender: 'f',
        victims: 21230
      }
const rotinaj =
      {
        name: 'Dr Rotinaj',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Sacred Heart, Washington, US',
        gender: 'm',
        victims: 8,
      }
const moleButt =
      {
        name: 'Mole Butt',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Sacred Heart, Washington, US',
        gender: 'f',
        victims: 2400,
      }

      // Setup complete above, answers below

// Query - Select by comparison

//Female

// Vampire.find({ gender: 'f'})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victim Greater Than 500
// Vampire.find({victims: {$gt: 500}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims less than or equal to 150
// Vampire.find({victim: {$lte: 150}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims not equal to 210234
// Vampire.find({victim: {$ne: 210234}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// //Victims greater than 150 AND fewer than 500
// Vampire.find({victim: {$gt: 150, $lt: 500}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

//Select by exists or does not exist

// // Has a key of title
// Vampire.find({title: {$exists: true}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Does not have a key of victims
// Vampire.find({victims: {$exists: false}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Has a title AND 0 victims
// Vampire.find({title: {$exists: true},victims: {$exists: false}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Has victims AND victims over 1000
// Vampire.find({victims: {$exists: true},victims: {$gt: 1000}})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// Select with OR

// From NY or LA
// Vampire.find({ $or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Loves Brooding or Being Tragic
// Vampire.find({ $or: [{loves: /brooding/}, {loves: /being tragic/ }]})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Has more than 1000 victims or loves marshmallows
// Vampire.find({ $or: [{victims: {$gt: 1000}, loves: /marshmallows/}]})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// // Has red hair or green eyes
// Vampire.find({ $or: [{hair_color: 'red'}, {eye_color: 'green'}]})
// .then((data) => {console.log(data)})
// .catch((error) => {console.log(error)})
// .finally(() => {db.close()})

// Objects that match one of several values

// Loves frilly  clothes
// Vampire.find({ loves: {$in: ['frilly shirtsleeves', 'frilly collars']}})
// .then((data) => {console.log(data)})

// Loves brooding
// Vampire.find({ loves: 'brooding' })
// .then((data) => {console.log(data)})

// Loves at least one...
// Vampire.find({ loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}})
// .then((data) => {console.log(data)})

// Loves fancy cloaks, but not...
// Vampire.find({ $and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hat', 'virgin blood']} }]})
// .then((data) => {console.log(data)})


// Negative Selection

// Loves ribbons but no brown eyes
// Vampire.find({ $and: [{loves: 'ribbons'}, {eye_color: {$ne: 'brown eyes'}}]})
// .then((data) => {console.log(data)})

// Not from Rome
// Vampire.find({location: {$ne: 'Rome'}})
// .then((data) => {console.log(data)})

// Don't love [array]
// Vampire.find({loves: {$ne: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}})
// .then((data) => {console.log(data)})

// Victims under 201
// Vampire.find({victims: {$lt: 201}})
// .then((data) => {console.log(data)})

// Replace

// Replace Claudia with Eve
// Vampire.findOneAndUpdate({ name: 'Claudia'}, {$set: { name: 'Eve', portrayed_by: 'Tilda Swinton'}}, {new: true, strict: false})
// .then((data) => {console.log(data)})

// Replace Male Vampire and update to F
// Vampire.findOneAndUpdate({ name: 'Guy Man'}, {$set: { is_actually: 'were-lizard', gender: 'f'}}, {new: true, strict: false})
// .then((data) => {console.log(data)})

// Update

// Update Eve to M
// Vampire.findOneAndUpdate({ name: 'Eve'}, {$set: {gender: 'm'}}, {new: true, strict: false})
// .then((data) => {console.log(data)})

// Update Guy Man array
// Vampire.findOneAndUpdate({ name: 'Guy Man'}, {$set: { hates: ['clothes', 'jobs']}}, {new: true, strict: false})
// .then((data) => {console.log(data)})

// Update Guy Man array again
// Vampire.findOneAndUpdate({ name: 'Guy Man'}, {})

// Update f to fems
Vampire.updateMany({ gender: 'f'}, {$set: { gender: 'fems'}})
.then((data) => {console.log(data)})