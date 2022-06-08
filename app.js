// Dependencies
const mongoose = require("mongoose");
const vampireArr = require("./model/vampire.js");
// Global configuration
const mongoURI = "mongodb://127.0.0.1/vampire";
const db = mongoose.connection;
// Connect to Mongo


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model // shorthand for model function

//
const vampireSchema = new Schema(
  {
    name: {type: String, default: true},
    title: String,
    hair_color: {type:String, default: "Blonde"},
    eye_color: String,
    dob:  Date,
    loves: Array,
    location: String,
    gender: String,
    victims: Number,
    title: String,
    body: String,
    author: String,
    likes: { type: Number, default: 0 },
    sponsored: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Vampire = model("Vampire", vampireSchema);

//make this exportable to be accessed in `app.js`

/*Vampire.insertMany(vampireArr)

// if database transaction succeeds
.then((vampire) => {
  console.log()
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})*/

//Find all the vampires that that are females

/*Vampire.find({ gender: 'f'})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

// have greater than 500 victims

/*Vampire.find({ victims: {$gt: 500}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//have fewer than or equal to 150 victims

/*Vampire.find({ victims: {$lte: 150}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/


//have a victim count is not equal to 210234


/*Vampire.find({ victims: {$ne: 210234}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//have greater than 150 AND fewer than 500 victims

/*Vampire.find({ $and: [{victims: {$gt: 150}}, {victims: {$lt: 500}}]})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//1. have a key of 'title'
/*Vampire.find({ title: {$exists: true}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//2. do not have a key of 'victims'(still not working)
Vampire.find({ victims: {$exists: false}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})

//3. have a title AND no victims

/*Vampire.find({ $and: [{victims: {$eq: 0}}, {title: {$exists: true}}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/


//4. have victims AND the victims they have are greater than 1000
/*Vampire.find({ $and: [{victims: {$gt: 1000}}, {victims: {$exists: true}}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/




