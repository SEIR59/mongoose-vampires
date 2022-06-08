const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

// Homepage
app.get('/', (req,res) => {
    res.send("Mongoose-Vampires homepagae")
})

app.listen(3000, () => {
    console.log('working connection')
    routesReport.print()
})