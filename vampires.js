const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model


const vampSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        title: String,
        
        hair_color: {
            type: String,
            value: "Blonde"
        },

        eye_color: String,
        dob: Date,
        loves: [String],
        location: String,
        gender: String,

        victims: {
            type: Number,
            minimum: 0,
        },
    },


)

const Vampire = model("Vampire", vampSchema)

module.exports = Vampire;
