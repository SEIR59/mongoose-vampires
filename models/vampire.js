const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vampireSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: String,
  hairColor: {
    type: String,
    default: 'blonde',
  },
  eyeColor: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: {
    type: String,
    enum: ['m', 'f'],
  },
  victims: {
    type: Number,
    min: 1,
  },
});

modules.exports = model('Vampire', vampireSchema);
