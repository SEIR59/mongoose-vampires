
//Dependencies imported
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')


//Listen on port set in .env
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})