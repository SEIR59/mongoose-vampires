const mongoose = require("mongoose")

const {
    Schema,
    model
} = mongoose

const vapiresSchema = new Schema({
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
        loves: [String],
        location: String,
        gender: String,
        victims: {
            type: Number,
            min: 1
        }
    }
)

const Vampire = model('Vampire', vapiresSchema)
module.exports = Vampire

