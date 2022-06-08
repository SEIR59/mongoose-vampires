/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require("express"); // import express
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")




////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make vampire schema

const vampire = new Schema ({
    name: 'String',
    title: 'String',
    hair_color: 'String',
    eye_color: 'String',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['String','String'],
    location: 'String',
    gender: 'String',
    victims: 2,
  })
// make fruit model
const Vampire = model("Vampire", fruitsSchema);




//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));