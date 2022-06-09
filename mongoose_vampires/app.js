
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

async function findVictimsGT500(){
    const findingVGT500 = await Vampire.find({victims: {$gt: 500}})
    console.log(findingVGT500);
}
//findVictimsGT500();

async function findVictimsLTE150(){
    const findingVictimsLTE150 = await Vampire.find({victims: {$lte: 150}})
    console.log(findingVictimsLTE150);
}
//findVictimsLTE150();

async function notEqual210234(){
    const notEquals210234 = await Vampire.find({victims: {$ne: 210234}})
    console.log(notEquals210234);
}
//notEqual210234();

async function gt150ft500(){
    const thegt150ft500 = await Vampire.find({victims: {$gt: 150, $lt: 500}})
    console.log(thegt150ft500);
}
//gt150ft500();


async function title(){
    const theTitle = await Vampire.find({title: {$exists: true}})
    console.log(theTitle);
}
//title();

async function victims(){
    const theVictims = await Vampire.find({victims: {$exists: false}})
    console.log(theVictims);
}
//victims();

async function vicAndTitle(){
    const thevicAndTitle = await Vampire.find({victims: {$exists: false}}, {title: {$exists: true}})
    console.log(thevicAndTitle);
}
//vicAndTitle();

async function vicAndGT1000(){
    const thevicAndGT1000= await Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}})
    console.log(thevicAndGT1000);
}
//vicAndGT1000();

Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]})

Vampire.find({$or: [{loves:/brooding/}, {loves: /being tragic/}]})

Vampire.find({$or: [{loves:/marshmallow/}, {victims: {$gt: 100}}]})

Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]})


Vampire.find({loves: {$in: ['frilly shirtsleeves', 'frilly collars']}})

Vampire.find({loves: 'brooding'})

Vampire.find({loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}})

Vampire.find({loves: 'fancy cloaks', $nor: [{loves: 'top hats'}, {loves: 'virgin blood'}]})

Vampire.find({loves: 'ribbons', eye_color: {$ne: 'brown'}})

Vampire.find({location: {$ne: 'Rome, Italy'}})

Vampire.find({$not: [{loves: 'fancy cloaks'}, {loves: 'frilly shirtsleeves'}, 
{loves: 'appearing innocent'},
{loves: 'being tragic'},
{loves: 'brooding'}]})

Vampire.find({victims: {$lte: 200}})

//Listen on port set in .env
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})