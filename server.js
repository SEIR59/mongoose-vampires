const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const Vampires = require('./models/vampires')
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
