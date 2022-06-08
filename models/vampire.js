////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
const mongoose = require("mongoose");
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make vampire schema
const vampireSchema = new Schema({
  name: {
      type:String,
      required:true
  },
  title: String,
  hair_color: {
      type:String,
      default:"blonde"
  },
  eye_color: String,
  dob: Date,
  loves:Array,
  location: String,
  gender:String,
  victims:{
      type:Number,
    min:1
    }
});

// make Vampire model
const Vampire = model("Vampire", vampireSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Vampire;
