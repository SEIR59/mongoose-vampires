const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const vampireSchema = new Schema({
  name: { type: String, required: true },
  title: String,
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: { type: Number, min: 1 },
});
