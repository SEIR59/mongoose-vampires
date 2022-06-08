/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

const vampiresArr = require("./models/vampire.js")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connection;

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

//////////////////////////
// Models ////////////////
/////////////////////////

const {Schema, model } = mongoose;

//Make vampire Schema
const vampireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: String,
    hair_color: {
        type: String,
        default: "blonde"
    },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {
        type: Number,
        min: 1
    }
}, {strict:false})


//Make Vampire model
const Vampire = model("Vampire", vampireSchema);

// Vampire.insertMany(vampiresArr)
//     .then((data) =>  {console.log(data)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>{db.close()})

//Creating 4 new Vampires

const newVamps = [{
    name: 'Vampire 1',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 17
  },{
    name: 'Vampire 2',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 10
  },{
    name: 'Vampire 3',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1901, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'f',
    victims: 2
  },{
    name: 'Vampire 4',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1776, 2, 13, 7, 47),
    loves: ['blood','straws'],
    location: 'New York, New York, US',
    gender: 'f',
    victims: 38
  }
]
// Vampire.insertMany(newVamps)
//     .then((data) =>  {console.log(data)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>{db.close()})


// Vampire.find({gender: 'f'})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: { $gt: 500}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: { "$lte": 500}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: {$ne: 210234}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// Vampire.find({victims: {$gt:150, $lt:500}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();lt
// })

//Select by Exists of does not exist

// 1. Have a key of title
// Vampire.find({title: {$exists: true}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// 2. Do not have a key of victims
// Vampire.find({victims: {$exists: false}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// 3. have a title AND no Victims
// Vampire.find({title: {$exists: true}, victims: {$exists: false}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// 4. Have victims and the victims are greater than 1000
// Vampire.find(
//     {victims: {$exists: true}, victims: {$gt: 1000}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

//////////////////////
// Select with OR  //
/////////////////////

// //1. Are from NY, NY, US or New Orleans, Louisiana, ,U.S
// Vampire.find({$or: [{location: "New York, New York, US"},{location: "New Orleans, Louisiana, US"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //2. Love brodding or being tragic
// Vampire.find({$or: [{loves: "brooding"},{loves: "being tragic"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //3. Have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{loves: "marshmallows"},{victims: {$gt: 1000}}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //4. have red hair green eyes. 
// Vampire.find({$or: [{hair_color: "red"},{eye_color: "green"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// /////////////////////////////////////////////////////
// // Select Objects that match one of several values///
// ////////////////////////////////////////////////////
// //1. Love either frilly shirtsleeves or frilly collars
// Vampire.find({$or: [{loves: "frilly shirtsleeves"},{loves: "frilly collars"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //2. love brooding
// Vampire.find({loves: "brooding"})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //3. love at least one of the folllowing: appearing innocent, trickery, lurking in rotting mansions, R & B music //
// Vampire.find({$or: [{loves: "appearing innocent"},{loves: "trickery"},{loves: "lurking in rotting mansions"}, {loves: "R&B Music"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //4. love fancy cloaks but not if they also love either top hats or virgin blood
// Vampire.find(
//    {loves:"fancy cloaks", $nor: [{loves: "top hats"},{loves: "virgin blood"}]})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

///////////////////////////////////
// Negative Selection  ////////////
//////////////////////////////////

// //1. love ribbons but do not have brown eyes
// Vampire.find({loves: "ribbons", eye_color: {$ne: "brown"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// // //2. Are not from Rome
// Vampire.find({location: {$ne: "Rome"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //3. DO NOT LOVE ANU OF THE FOLLOWING []
// Vampire.find({loves: {$nin: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// 4. Have not killed more than 200 
// Vampire.find({victims: {$not: {$gt: 200}}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

//////////////////////
// REPLACE     //////
////////////////////////////
// //1.
// Vampire.updateOne({name:'Claudia'} ,{$set: { name: "Eve"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })
// 1.////
Vampire.updateOne({name:"Claudia"}, {$set:{name:"Eve"}})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(data)
})
.finally(() => {
    db.close();
})
Vampire.updateOne({name:"Eve"}, {$set: {portrayed_by: "Tilda Swinton"}}, {upsert: true})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(data)
})
.finally(() => {
    db.close();
})
//2. 
// Vampire.findOneAndUpdate({gender: "m"}, {$set: {name: "Guy Man"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

/////////////////////////
/// Update /////////////
///////////////////////

//1. Update guy man to have a gender f
// Vampire.updateOne({name: 'Guy Man'}, {$set: {gender: "f"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //2. Update Eve to have a gender of m
// Vampire.updateOne({name: 'Eve'}, {$set: {gender: "m"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

// //6.
// Vampire.updateMany({gender: 'f'}, {$set: {gender: "fems"}})
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) => {
//     console.log(data)
// })
// .finally(() => {
//     db.close();
// })

