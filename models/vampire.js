const mongoose = require('./connection')
// pull schema and model from mongoose
const { Schema, model } = mongoose
// make vampires schema
const vampiresSchema = new Schema ({
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
// vampires model
const Vampire = model('Vampire', vampiresSchema)

// export model
module.exports = Vampire