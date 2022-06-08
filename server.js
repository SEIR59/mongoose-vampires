const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

// homepage
app.get('/', (req, res) => {
    res.send('Mongoose-Vampires homepage')
})

app.listen(port, () => {
    console.log('port 3000 listens')
    routesReport.print()
})