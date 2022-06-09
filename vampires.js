const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model

// create a new schema
const vampiresSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: String,
        hair_color: {
            type: String,
            default: 'blonde',
        },
        eye_color: String,
        dob: Date,
        loves: [String],
        location: String,
        gender: String,
        victims: {
            type: Number,
            min: 0,
        }
    }
)

const Vampire = model("Vampire", vampiresSchema)
module.exports = Vampire 