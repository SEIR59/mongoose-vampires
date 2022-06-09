const mongoose = require('mongoose')

const { Schema, model} = mongoose

const vampireSchema = new Schema({
    name: {type: String, required: true},
    title: String,
    hair_color: {type: String, default: 'blonde'
    },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: {type: Number, min: 1}

})

const Vampires = model('Vampires', vampireSchema)

module.exports = Vampires