//Dependencies
const VampireArray = require('./model/vampires.js')
const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model // shorthand for model function

//Vampire Schema
const vampireSchema = new Schema({
    name: {type: String, required: true},
    title: String,
    hair_color: {type: String, default: 'blonde'},
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {type: Number, min: 0},
},{
    strict: false 
    });
//make Vampire Model
const Vampire = model('Vampire', vampireSchema);

//Global Configuration
//mongodb://127.0.0.1/my_database
const mongoURI = "mongodb://127.0.0.1/vampires"
const db = mongoose.connection

//Connect to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// Vampire.insertMany(VampireArray)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

const newVamps = [
    {
        name: 'Vamp1',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 1,
    },{
        name: 'Vamp2',
        title: 'Count',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 11,
    },
    {
        name: 'Vamp3',
        title: 'Countess',
        hair_color: 'blonde',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['pizza','blood'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 9,
    },
    {
        name: 'Vamp4',
        title: 'Countess',
        hair_color: 'green',
        eye_color: 'black',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['sushi','hotdogs'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 100,
    }
]
// Vampire.insertMany(newVamps)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// 1.Find all the vampires that that are females
// Vampire.find({gender: 'f'})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// 2.have greater than 500 victims
// Vampire.find({victims: {$gt: 500}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// 3.have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// 4.have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// 5. have greater than 150 AND fewer than 500 victims
// Vampire.find({$and: [{victims:{$gt: 150}},{victims:{$lt: 500}}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

//Exist or Does not Exist
//have a key of 'title'
// Vampire.find({title: {$exists: true}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// do not have a key of 'victims'
// Vampire.find({title: {$exists: false}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// have a title AND no victims
// Vampire.find({$and: [{title: {$exists: true}},{victims: {$exists: false}}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })
// have victims AND the victims they have are greater than 1000
// Vampire.find({$and: [{victims: {$gt: 1000}},{victims: {$exists: true}}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

//SELECT WITH OR
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: 'New York, New York, US'},{location: 'New Orleans, Louisiana, US' }]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// love brooding or being tragic
// Vampire.find({$or: [{loves: 'brooding'},{loves: 'being tragic' }]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{loves:'marshmallows'},{victims: {$gt: 1000}}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// have red hair or green eyes
// Vampire.find({$or: [{eye_color:'green'},{hair_color:'red'}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find({$or: [{loves:'frilly shirtsleeves'},{loves:'frilly collars'}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// love brooding
// Vampire.find({$or: [{loves:'brooding'},{loves:'brooding'}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({$or: [{loves:'appearing innocent'},{loves:'trickery'},{loves:'lurking in rotting mansions'},{loves:'R&B music'}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find({loves: {$nin: ['top hats', 'virgin blood']} })
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Negative Selection
// love ribbons but do not have brown eyes
// Vampire.find({$and: [{loves: 'ribbons'},{eye_color: {$not:{ $eq:'brown'}}}]})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })
// are not from Rome
// Vampire.find({location: {$not:{ $eq:'Rome, Italy'}}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({loves: {$not: {$eq: {$gt: ['fancy cloaks', 'frilly shirtlsleeves', 'appearing innocent', 'being tragic', 'brooding']}}}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// have not killed more than 200 people
// Vampire.find({victims: {$not:{$gt: 200}}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Replace
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.updateOne({name: 'Claudia'},{ $set: {name: 'Eve'}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })
// Vampire.updateOne({name: 'Eve'},{ $set: {portrayed_by: 'Tilda Swinton'}})
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     db.close()
// })

Vampire.find({name: 'Eve'})
.then((vampire) => {
    console.log(vampire)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    db.close()
})

