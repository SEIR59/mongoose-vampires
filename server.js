require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})
const PORT = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error))

//MiddleWare
app.use(morgan("tiny")); 
app.use(methodOverride("_method")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public")); 

const seedData = require("./seed.js");


app.listen(PORT, () => console.log("Listening on Port 3000"));