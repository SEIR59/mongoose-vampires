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
  {strict: false }
  
);
const Vampire = model("Vampire", vampireSchema);

//make this exportable to be accessed in `app.js`

/*Vampire.insertMany(vampireArr)

// if database transaction succeeds
.then((vampire) => {
  console.log('Hello')
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})*/


//### Add some new vampire data
/*Vampire.insertMany([{ name: 'Anna', victims: 15466, hair_color: 'blonde',
eye_color: 'brown',
dob: new Date(1999, 4, 21, 16, 15),
loves: ['marshmallows', 'ribbons', 'being tragic'],
location: 'LA',
gender: 'f'}])

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})

Vampire.insertMany([{ name: 'moon', victims: 156, hair_color: 'blonde',
eye_color: 'blue',
dob: new Date(2567, 4, 21, 16, 15),
loves: ['marshmallows', 'ribbons', 'being tragic'],
location: 'LA',
gender: 'f'}])

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})
Vampire.insertMany([{ name: 'Tom', victims: 15466, hair_color: 'blonde',
eye_color: 'brown',
dob: new Date(1944, 4, 21, 16, 15),
loves: ['marshmallows', 'ribbons', 'being tragic'],
location: 'NY',
gender: 'm'}])

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})
Vampire.insertMany([{ name: 'Jimmy', victims: 466, hair_color: 'blonde',
eye_color: 'brown',
dob: new Date(1999, 4, 21, 16, 15),
loves: ['marshmallows', 'being tragic'],
location: 'LA',
gender: 'm'}])

.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//1. Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.

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
/*Vampire.find( {$and: [{loves: 'fancy cloaks'}, {loves: {$nin:['top hats','virgin blood' ]}}]})
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

//### Negative Selection
////Select all vampires that:

//1. love ribbons but do not have brown eyes
/*Vampire.find({$and:[{ loves: 'ribbons'}, {eye_color: {$not:{$eq:'brown'} }}]})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//2. are not from Rome
/*Vampire.find({location:{$not: {$eq: 'Rome, Italy'}}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/


///*still not working//3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
/*Vampire.find({loves:{$not: {$eq: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/


//5. have not killed more than 200 people
/*Vampire.find({victims:{$not: {$gt: '200'}}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//




//## Replace (this one may require some additional google foo. Hint: fields may need to be updated in schema)

//1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
/*Vampire.findOneAndReplace({name:'Claudia'}, {name:'Eve', portrayed_by: 'Tilda Swinton'}, {returnDocument: 'after', strict: false})
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



//2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
/*Vampire.findOneAndReplace({gender: 'm'},{name:'Guy Man', is_actually: 'were-lizard'}, {returnDocument: 'after', strict: false})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

//## Update

//1. Update 'Guy Man' to have a gender of 'f'
/*Vampire.updateOne({name:'Guy Man'},{$set:{gender: 'f'}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//2. Update 'Eve' to have a gender of 'm'

/*Vampire.updateOne({name:'Eve'},{$set:{gender: 'm'}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
/*Vampire.updateOne({name:'Guy Man'},{$set:{hates: ['clothes', 'jobs']}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
/*Vampire.updateOne({name:'Guy Man'},{$push: {hates: ['alarm clocks', 'jackalopes']}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//5. Rename 'Eve's' name field to 'moniker'
/*Vampire.updateOne({name:'Eve'},{$rename:{ moniker: 'Eve'}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 //db.close()
})*/

//6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".
/*Vampire.updateMany({gender: 'f',},{$set:{ gender: 'fems'}})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 //db.close()
})*/

// if database transaction succeeds

//## Remove

//1. Remove a single document wherein the hair_color is 'brown'
/*Vampire.deleteOne({hair_color: 'brown'})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/
//2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
/*Vampire.deleteMany({eye_color: 'blue'})
.then((vampire) => {
  console.log(vampire)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})*/

