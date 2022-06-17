const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model // shorthand for model function


const vampireSchema = new Schema(
    {
        name: String, 
      title: String,
      hair_color: String,
      eye_color: String,
      dob: Date,  
      loves: Array,
      location: String,
      gender: String,
      victims: Number,
    }
  );

const Vampire = model('Vampire', vampireSchema)

//make this exportable to be accessed in 'app.js'
module.exports = Vampire
