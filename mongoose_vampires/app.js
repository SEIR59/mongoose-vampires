
//Dependencies imported
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const Vampires = require('./models/vampire')


const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establish connection
mongoose.connect(DATABASE_URL, CONFIG)

// events for when our connection opens/closes/errors
const db = mongoose.connection
	.on('open', () => console.log('Connected to Mongoose'))
	.on('close', () => console.log('Disconnected from Mongoose'))
	.on('error', (error) => console.log(error))



const { Schema, model } = mongoose

// make our fruits schema
const vampireSchema = new Schema({
    name: { type: String, required: true},
    title: { type: String },
    hair_color: { type: String, default: 'Blonde' },
    eye_color: { type: String },
    dob: { type: Date, default: Date.now },
    loves: { type: [String] },
    location: { type: String },
    gender: {type: String},
    victims: {type: Number, min: 0}

}, { timestamps: true })

// make our vampire model
const Vampire = model("Vampire", vampireSchema)


/*Vampire.insertMany(Vampires)
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

async function findFemale(){
    const findingF = await Vampire.find({gender: 'f'})
    console.log(findingF);
}
//findFemale();


//Listen on port set in .env
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})