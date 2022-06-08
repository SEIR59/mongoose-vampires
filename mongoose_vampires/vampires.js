const mongoose = require("mongoose")
const { Schema, model } = mongoose


const vampiresSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: String,
    hair_color: {
        type: String,
        default: "Blonde"
    },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: {
        type: String,
        maxLength: 1
    },
    victims: {
        type: Number,
        min: 0
    },
})

const Vampire = model("vampire", vampiresSchema)

module.exports = Vampire