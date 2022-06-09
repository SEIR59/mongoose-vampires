const mongoose = require("mongoose")

const { Schema, model } = mongoose

const vampireSchema = new Schema({
    name: {type: String, required: true},
    title: String,
    hair_color: {type: String, default: 'Blonde'},
    eye_color: String,
    dob: {type: Date},
    loves: [String],
    location: String,
    gender: String,
    victims: {type: Number, min: 0}
})

const Vampire = model("Vampire", vampireSchema)

module.exports = Vampire