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
    victims: {type: Number, min: 0}
})
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

// Find all the vampires that that are females
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

// have greater than 500 victims
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

// have fewer than or equal to 150 victims
Vampire.find({victims: {$lte: 150}})
.then((vampire) => {
    console.log(vampire)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    db.close()
})

