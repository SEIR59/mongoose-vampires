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
    victims:{type: Number, min: 1},
    title: String,
    body: String,
    author: String,
    likes: { type: Number, default: 0 },
    sponsored: { type: Boolean, default: false },
  },
  { strict: false }
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

//2. do not have a key of 'victims'
/*Vampire.find({ victims: {$exists: false}})

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

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
//Select all the vampires that:

//1. are from New York, New York, US or New Orleans, Louisiana, US
/*Vampire.find({ $or: [{location: 'New York, New York, US'}, { location: 'New Orleans, Louisiana, US'}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//2. love brooding or being tragic
/*Vampire.find({ $or: [{loves: 'brooding'}, { loves: 'being tragic'}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//3. have more than 1000 victims or love marshmallows
/*Vampire.find({ $or: [{victims:{$gt: 1000} }, { loves: 'marshmallows'}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//4. have red hair or green eyes
/*Vampire.find({ $or: [{hair_color: 'red'}, { eye_color: 'green'}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//1. love either frilly shirtsleeves or frilly collars
/*Vampire.find({ $or: [{loves: 'frilly shirtsleeves'}, { loves: 'frilly collars'}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//2. love brooding
/*Vampire.find({ loves: 'brooding'})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/



//3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
/*Vampire.find( {$or: [{loves: ' appearing innocent'}, {loves: 'trickery'}, {loves: 'lurking in rotting mansions'} , {loves: 'R&B music'}] })
// if database transaction succeeds
.then((vampire) => {
  console.log(vampire)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})*/

//need to finish 4
//4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find( {$and: {loves: 'fancy cloaks'}, {loves: {$nin:['top hats','virgin blood' ]}}})
// if database transaction succeeds
.then((vampire) => {
  console.log(vampire)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})

//### Negative Selection
////Select all vampires that:

//1. love ribbons but do not have brown eyes
//2. are not from Rome
//3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
//5. have not killed more than 200 people
//





