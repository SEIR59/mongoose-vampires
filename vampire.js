////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
const mongoose = require("mongoose");
// pull schema and model from mongoose
const { Schema, model } = mongoose;
// build vampires schema
const vampiresSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    default: "blonde",
  },
  eye_color: String,
  dob: Date,
  loves: [],
  location: String,
  gender: {
    type: String,
    enum: ["m", "f"],
  },
  victims: {
    type: Number,
    min: 1,
  },
  title: String,
});
//build model
const Vampire = model("Vampire", vampiresSchema);

module.exports = Vampire;
