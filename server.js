const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1/vampires"
const db = mongoose.connection
const vampireArray = require('./vampire.js')

mongoose.connect(mongoURI,  {useNewUrlParser: true,
  useUnifiedTopology: true,
})
const { Schema , model } = mongoose
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error))

const vampireSchema = new Schema({
        name: { type: String, require: true},
        title: String,
        hair_color: { type: String, require: 'Blonde'}, 
        eye_color: String,
        dob:  Date,
        loves: Array,
        location: String,
        gender: String,
        victims: { type: Number, min:0 }
})
const Vampire = model("Vampire", vampireSchema)

Vampire.insertMany(vampireArray)
.then((data) =>{
  console.log(data)
})
.catch((error) =>{
  console.log(error)
})
.finally(() =>{db.close()})


