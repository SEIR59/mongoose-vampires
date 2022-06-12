const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model



// Building our new Schema that composes a vampire.

const vampireSchema = new Schema({
    name: { type: String, required: true }, 
    title: String,
    hair_color: {
        type: String,
        default: 'blonde',
    },
    eye_color: String,
    dob: Date,
    loves: [ String ],
    location: String,
    gender: String,
    victims: {
        type: Number,
        default: 2
    }
})

// Now building our model from our Schema.
const Vampire = model("Vampire", vampireSchema)

// Exporting this model of Vampire to be accessed by our app.js
module.exports = Vampire