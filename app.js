const mongoose = require('mongoose')
const Vampire = require('./vampires.js')

const mongoURI = 'mongodb://localhost/mongoose_vampires'
const db = mongoose.connection

mongoose.connect(mongoURI)

db.on('open', () => console.log('mongo connected: ', mongoURI))
db.on('close', () => console.log('Disconnected from:m', mongoURI))
db.on('error', (error) => console.log(error))
