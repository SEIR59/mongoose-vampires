// import dependencies
const mongoose = require('./connection')
// define our vampire model
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

// make our fruit model
const Vampire = model("Vampire", vampireSchema)

// Export our Model
module.exports = Vampire