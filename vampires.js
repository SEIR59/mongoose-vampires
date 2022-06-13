const mongoose = require('mongoose') // require mongoose

const { Schema, model } = mongoose

// vampires schema
const vampiresSchema = new Schema({
	name: {
		type: String,
		required: [true, 'What is their name?'],
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
		min: [0, 'No vampire will have less than 0 victims!'],
	},
})

// vampire model
const Vampire = model('Vampire', vampiresSchema)

module.exports = Vampire
