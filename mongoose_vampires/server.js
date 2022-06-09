
//Dependencies imported
require('dotenv').config()
const express = require('express')
const app = require('liquid-express-views')(express())


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})