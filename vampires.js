const mongoose = require("mongoose");




const { Schema, model } = mongoose

// make vampire schema 
const vampireSchema = new Schema ({
  name:{ type:String,
         default:"",
         require:'name can not be empty'
  },
  title: String,
  hair_color: { type: String, 
     require: 'blonde' },

  eye_color: { type:String},
  dob:Date,
  loves: [String],
  location: String,
  gender: String,

  victims: {
      type: Number },
      min:{ $gt: 0 }
})


const Vampire = model('Vampire', vampireSchema ,'vampires')

module.exports = Vampire;