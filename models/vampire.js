const mongoose = require('mongoose')
// pull schema and model from mongoose
const { Schema, model } = mongoose
// make vampire schema
const vampireSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    title: String,
    hair_color: {
        type: String,
        default: 'blonde'
    },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {
        type: Number,
        min: 1
    }
})

// vampire model

const Vampire = model(' Vampire', vampireSchema)

// export model
module.exports = Vampire