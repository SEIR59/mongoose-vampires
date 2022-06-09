require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const app = require('liquid-express-views')(express(), {root: [path.resolve(__dirname, 'views/')]})
const PORT = process.env.PORT
const seedData = require('./seed.js')
const db = mongoose.connection;
const Vampire = require('./vampire.js')


const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error))

//MiddleWare
app.use(morgan("tiny")); 
app.use(methodOverride("_method")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.send("Here");
  });
  
  const newVampires = [
    {
        name: 'Michael',
        title: 'Duke',
        hair_color: 'blonde',
        eye_color: 'blue',
        dob: new Date(1998, 3, 13, 7, 47),
        loves: ['sucking blood','stakes'],
        location: 'New York, New York, US',
        gender: 'm',
        victims: 902,
      },
      {
        name: 'Rob',
        hair_color: 'black',
        eye_color: 'black',
        dob: new Date(1937, 2, 14, 7, 47),
        loves: ['cats','baseball'],
        location: 'San Fran, California, US',
        gender: 'm',
        victims: 523,
      },
      {
        name: 'Fiona',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1995, 2, 13, 6, 47),
        loves: ['horse riding','cars'],
        location: 'Guangzhou, China',
        gender: 'f',
        victims: 110,
      },
      {
        name: 'Sam',
        hair_color: 'brown',
        eye_color: 'blue',
        dob: new Date(1891, 3, 26, 7, 47),
        loves: ['books'],
        location: 'LA, California, US',
        gender: 'f',
        victims: 260,
      }
]


app.listen(PORT, () => console.log("Listening on Port 3000"));

// Vampire.insertMany(seedData)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})