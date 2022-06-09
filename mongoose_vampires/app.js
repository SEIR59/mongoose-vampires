
//Dependencies imported
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const Vampire = require('./models/vampire')
const seedData = require('./models/vampire')

/*
Vampire.insertMany(seedData)
    .then((data) => console.log(data))
    .catch((error)=> console.log(error))
    .finally(()=>(db.close()))
*/
function myVampires(){
    const theVampires = 

    Vampire.create([ 
        {
        name: 'New1',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
        },
        {
            name: 'New2',
            title: 'Count',
            hair_color: 'brown',
            eye_color: 'brown',
            dob: new Date(1971, 2, 13, 7, 47),
            loves: ['cereal','marshmallows'],
            location: 'Minneapolis, Minnesota, US',
            gender: 'm',
            victims: 2,
            },
            {
                name: 'New3',
                title: 'Count',
                hair_color: 'brown',
                eye_color: 'brown',
                dob: new Date(1971, 2, 13, 7, 47),
                loves: ['cereal','marshmallows'],
                location: 'Minneapolis, Minnesota, US',
                gender: 'm',
                victims: 2,
                },
                {
                    name: 'New 4',
                    title: 'Count',
                    hair_color: 'brown',
                    eye_color: 'brown',
                    dob: new Date(1971, 2, 13, 7, 47),
                    loves: ['cereal','marshmallows'],
                    location: 'Minneapolis, Minnesota, US',
                    gender: 'm',
                    victims: 2,
                    }
    
    ])
}

//myVampires()

//Listen on port set in .env
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})