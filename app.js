// Dependencies
const mongoose = require('mongoose')
const Vampire = require('./vampires.js')
 
// Global Configuration
const mongoURI = "mongodb://localhost/vampires"
const db = mongoose.connection
 
// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
 
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));
 
// intial data
var vampire = {
   name: 'Chocula',
   title: 'Count',
   hair_color: 'brown',
   eye_color: 'brown',
   dob: new Date(1971, 2, 13, 7, 47),
   loves: ['cereal','marshmallows'],
   location: 'Minneapolis, Minnesota, US',
   gender: 'm',
   victims: 2,
 }
 
// Vampire.create(vampire)
// .then((vampire) => {
//     console.log(vampire)
// })
// .catch((error) => {
//       console.log(error)
//  })
//  //close db connection either way
//   .finally(() => {
//      db.close()
//    })


// Insert into the database using create method:
const moreVampires = [
     {
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },
  {
    name: 'Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  },
  {
    name: 'Elizabeth Bathory ',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks','frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  },
  {
    name: 'Lestat',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
  },
  {
    name: 'Louis de Pointe du Lac',
    dob: new Date(1766, 6, 4, 2, 1),
    hair_color: 'brown',
    eye_color: 'blue',
    loves:['brooding', 'Claudia', 'staring longingly into the distance'],
    location: 'New Orleans, Louisiana, US',
    gender:'m',
    victims: 150
  },
  {
    name:'Claudia',
    dob: new Date(1793, 2, 7, 8, 30),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290
  },
  {
    name:'Armand',
    dob: new Date(1481, 6, 1, 10, 42),
    hair_color: 'red',
    eye_color: 'brown',
    loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045
  },
  {
    name:'Santino',
    dob: new Date(1465, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103
  },
  {
    name:'Akasha',
    dob: new Date(-8000, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    title: 'Queen of the Damned'
  },
  {
    name: 'Edward Cullen',
    dob: new Date(1901, 6, 20, 0, 57),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
    location: 'Chicago, Illinois, US',
    gender: 'm',
  },
  {
    name: 'Persephone Bourignon',
    dob: new Date(1801, 5, 17, 14, 53),
    hair_color: 'red',
    eye_color: 'green',
    loves: ['wine', 'fancy cloaks', 'appearing innocent'],
    location: 'Paris, France',
    gender: 'f',
    victims: 450
  },
  {
    name: 'René Tremblay',
    dob: new Date(1922, 2, 8, 5, 3),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['frilly shirtsleeves', 'trickery', 'card games'],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134
  },
  {
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ['marshmallows', 'ribbons', 'being tragic'],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567
  },
  {
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['brooding', 'frilly shirtsleeves'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112
  },
  {
    name: 'Barnabas Spenser',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1984, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'New York, New York, US',
    gender: 'm',
    title: 'Osiris of Sewer Rats'
  }
  ]

//  Vampire.insertMany(moreVampires)
// .then((data) =>  {
// console.log(data)
// })
// .catch((error) => {
// console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Add some new vampire data
const vampireFamily = [
    {
    name: 'Ambrosia Johnson',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: new Date(1972, 2, 9, 15, 15),
    loves: ['chocolate', 'graham crackers'],
    location: 'Paris, Tennessee, US',
    gender: 'f',
    victims: 150
  },
  {
    name: 'Claudia Johnson',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1973, 9, 15, 15, 15),
    loves: ['apples', 'peanut butter'],
    location: 'Paris, Tennessee, US',
    gender: 'f',
    victims: 175
  },
  {
    name: 'Magnum Johnson',
    hair_color: 'black',
    eye_color: 'blue',
    dob: new Date(1972, 8, 13, 13, 13),
    loves: ['carrots', 'ranch dressing'],
    location: 'Paris, Tennessee, US',
    gender: 'm',
    victims: 180
  },
  {
    name: 'Silas Johnson',
    hair_color: 'black',
    eye_color: 'green',
    dob: new Date(1974, 7, 15, 15, 15),
    loves: ['mice', 'cats'],
    location: 'Paris, Tennessee, US',
    gender: 'm',
    victims: 112
  },
]

// Vampire.insertMany(vampireFamily)
// .then((data) =>  {
// console.log(data)
// })
// .catch((error) => {
// console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Select by comparison
// Vampire.find({gender: "f"})
// .then((data) =>  {
// console.log(data)
// })
// .catch((error) => {
// console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Vampire.find({  victims: { $gt: 500 }})
// .then((data) =>  {
// console.log(data)
// })
// .catch((error) => {
// console.log(error)
// })
// .finally(() => {
//     db.close()
// })

// Vampire.find({ victims: { $lte: 150 } })
// .then((data) =>  {
//     console.log(data)
//     })
//     .catch((error) => {
//     console.log(error)
//     })
//     .finally(() => {
//         db.close()
//     })

// Vampire.find({ victims: {$ne: 210234 }})
// .then((data) =>  {
//         console.log(data)
//         })
//         .catch((error) => {
//         console.log(error)
//         })
//         .finally(() => {
//             db.close()
//         })

// Vampire.find({ $and: [{ victims: { $gt: 150 }}, { victims: { $lt: 500}}]})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Select by exists or does not exist

// Vampire.find({ "title": { $exists: true}})
//               .then((data) =>  {
//                console.log(data)
//                })
//                .catch((error) => {
//                console.log(error)
//                })
//                .finally(() => {
//                    db.close()
//                })


// Vampire.find({ "victims": { $exists: false}})
//               .then((data) =>  {
//                console.log(data)
//                })
//                .catch((error) => {
//                console.log(error)
//                })
//                .finally(() => {
//                    db.close()
//                })

// Vampire.find({ $and: [{ "title": { $exists: true }}, { victims: { $exists: false}}]})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Vampire.find({ $and: [{ victims: { $exists: true }}, { victims: { $gt: 1000}}]})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Select with OR

// Vampire.find({ $or: [{ location: { $in: ["New York, New York, US","New Orleans, Louisiana, US" ]}}]})
//                .then((data) =>  {
//                 console.log(data)
//                 })
//                 .catch((error) => {
//                 console.log(error)
//                 })
//                 .finally(() => {
//                     db.close()
//                 })

// Vampire.find({ $or: [{ loves: 'brooding' },{ loves: 'being tragic' }] })
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })


// Vampire.find({ $or: [{ victims: { $gt: 1000 }}, { loves:'marshmallows'}]})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Vampire.find({ $or: [{ hair_color: 'red' },{ eye_color: 'green' }] })
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Select objects that match one of several values

// Vampire.find({ loves: { $in: ['frilly shirtsleeves', 'frilly collars']}})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

// Vampire.find({ loves: { $in: ['brooding']}})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })


// Vampire.find({ loves: { $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })


// Vampire.find({ $and: [ {loves: { $in: ['fancy cloaks'] }}, {loves: { $nin: ['top hats','virgin blood'] }}]})
// .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })


// Negative Selection

// Vampire.find({ $and: [ {loves: { $in: ['ribbons'] }}, {eye_color: { $ne:'brown' }}]})
//             .then((data) =>  {
//             console.log(data)
//             })
//             .catch((error) => {
//             console.log(error)
//             })
//             .finally(() => {
//                 db.close()
//             })

Vampire.find({location: { $nin: ["Rome"]}})
               .then((data) =>  {
                console.log(data)
                })
                .catch((error) => {
                console.log(error)
                })
                .finally(() => {
                    db.close()
                })





                // .then((data) =>  {
                // console.log(data)
                // })
                // .catch((error) => {
                // console.log(error)
                // })
                // .finally(() => {
                //     db.close()
                // })