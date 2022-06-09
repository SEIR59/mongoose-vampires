const mongoose = require("mongoose");
const Vampire = require("./vampires.js");

const mongoURL = "mongodb://127.0.0.1/vampires";
const db = mongoose.connection;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURL));
db.on("close", () => console.log("mongo disconnected"));

const manyVampires = [
  {
    name: "Count Chocula",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2,
  },
  {
    name: "Dracula",
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: "brown",
    eye_color: "blue",
    loves: [
      "Winona Ryder",
      "top hats",
      "fancy cloaks",
      "handlebar   mustaches",
    ],
    location: "Transylvania, Romania",
    gender: "m",
    victims: 1238,
  },
  {
    name: "Elizabeth Bathory ",
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: "brown",
    eye_color: "brown",
    loves: ["virgin blood", "fancy cloaks", "frilly collars"],
    location: "Nyírbátor, Hungary",
    gender: "f",
    victims: 980,
  },
  {
    name: "Lestat",
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: "blonde",
    eye_color: "blue",
    loves: [
      "frilly shirtsleeves",
      "frilly collars",
      "lurking in   rotting mansions",
      "Louis",
    ],
    location: "Auvergne, France",
    gender: "m",
    victims: 324,
  },
  {
    name: "Louis de Pointe du Lac",
    dob: new Date(1766, 6, 4, 2, 1),
    hair_color: "brown",
    eye_color: "blue",
    loves: ["brooding", "Claudia", "staring longingly into the   distance"],
    location: "New Orleans, Louisiana, US",
    gender: "m",
    victims: 150,
  },
  {
    name: "Claudia",
    dob: new Date(1793, 2, 7, 8, 30),
    hair_color: "blonde",
    eye_color: "blue",
    loves: ["doll babies", "ribbons", "appearing innocent", "  trickery"],
    location: "New Orleans, Louisiana, US",
    gender: "f",
    victims: 290,
  },
  {
    name: "Armand",
    dob: new Date(1481, 6, 1, 10, 42),
    hair_color: "red",
    eye_color: "brown",
    loves: ["theatre", "painting", "velvet robes", "being tragic"],
    location: "Kiev, Russia",
    gender: "m",
    victims: 1045,
  },
  {
    name: "Santino",
    dob: new Date(1465, 6, 1, 10, 42),
    hair_color: "brown",
    eye_color: "brown",
    loves: ["trickery", "vampiric cults", "fancy cloaks"],
    location: "Rome, Italy",
    gender: "m",
    victims: 1103,
  },
  {
    name: "Akasha",
    dob: new Date(-8000, 6, 1, 10, 42),
    hair_color: "brown",
    eye_color: "green",
    loves: [
      "eating hearts",
      "bathing in roses",
      "elaborate   headdresses",
      "R&B music",
    ],
    location: "Kemet, Egypt",
    gender: "f",
    victims: 210234,
    title: "Queen of the Damned",
  },
  {
    name: "Edward Cullen",
    dob: new Date(1901, 6, 20, 0, 57),
    hair_color: "brown",
    eye_color: "brown",
    loves: ["brooding", "diamond skin", "calling people spider   monkeys"],
    location: "Chicago, Illinois, US",
    gender: "m",
  },
  {
    name: "Persephone Bourignon",
    dob: new Date(1801, 5, 17, 14, 53),
    hair_color: "red",
    eye_color: "green",
    loves: ["wine", "fancy cloaks", "appearing innocent"],
    location: "Paris, France",
    gender: "f",
    victims: 450,
  },
  {
    name: "René Tremblay",
    dob: new Date(1922, 2, 8, 5, 3),
    hair_color: "brown",
    eye_color: "green",
    loves: ["frilly shirtsleeves", "trickery", "card games"],
    location: "Bucharest, Romania",
    gender: "m",
    victims: 134,
  },
  {
    name: "Caroline Belmont",
    hair_color: "blonde",
    eye_color: "brown",
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ["marshmallows", "ribbons", "being tragic"],
    location: "Ljubljana, Slovenia",
    gender: "f",
    victims: 567,
  },
  {
    name: "Francis Frost",
    hair_color: "black",
    eye_color: "blue",
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ["brooding", "frilly shirtsleeves"],
    location: "New York, New York, US",
    gender: "m",
    victims: 112,
  },
  {
    name: "Barnabas Spenser",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1984, 6, 3, 13, 12),
    loves: ["being merry", "being insane", "card games"],
    location: "New York, New York, US",
    gender: "m",
    title: "Osiris of Sewer Rats",
  },
];

//add the vampire data using create method
// Vampire.create(manyVampires)
//     .then((vampire) => {
//         console.log(vampire);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//     .finally(() => {
//         db.close()
//     })

//Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.
const addMoreVamps = [
  {
    name: "Damon Salvator",
    hair_color: "black",
    eye_color: "grey",
    dob: new Date(1487, 10, 30, 2, 7),
    loves: ["Elena Gilbert", "His brother"],
    location: "Mystic Falls",
    gender: "m",
    victims: 465,
  },
  {
    name: "Stefan Salvator",
    hair_color: "brown",
    eye_color: "green",
    dob: new Date(1846, 11, 01, 9, 2),
    loves: ["Elena Gilbert", "His brother"],
    location: "Mystic Falls",
    gender: "m",
    victims: 378,
  },
  {
    name: "Elena Gilbert",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1992, 6, 22, 5, 20),
    loves: ["Damon Salvator", "Stefan Salvator"],
    location: "Mystic Falls",
    gender: "f",
    victims: 28,
  },
  {
    name: "Rebecca Mikaelson",
    hair_color: "blond",
    eye_color: "blue",
    dob: new Date(985, 8, 2, 20, 6),
    loves: ["Her family", "Stefan Salvator"],
    location: "Mystic Falls",
    gender: "f",
    victims: 17867,
  },
];

//create 4 more vamps
// Vampire.insertMany(addMoreVamps)
//     .then((vampire) => {
//         console.log(vampire);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//     .finally(() => {
//         db.close()
//     })



//Select by comparison

//Find all the vampires that that are females
// Vampire.find({ gender: "f" })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close(); 
//   });

  //have greater than 500 victims
//   Vampire.find( { victims: { $gt: 500 }})
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });


//have fewer than or equal to 150 victims
// Vampire.find( { victims: { $lte: 150 }})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

//have a victim count is not equal to 210234
// Vampire.find( { victims: { $ne: 210234 }})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

//have greater than 150 AND fewer than 500 victims
// Vampire.find( {$and: [{ victims: { $gt: 150 }}, { victims: { $lt: 500 }}]})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });


//Select by exists or does not exist

// Select all the vampires that:

// have a key of 'title'
// Vampire.find( { title: {$exists: true} } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// do not have a key of 'victims'
// Vampire.find( { victims: {$exists: false} } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// have a title AND no victims
// Vampire.find( {$and: [ { title: { $exists: true } }, { victims: { $exists: false } } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// have victims AND the victims they have are greater than 1000
// Vampire.find( { $and: [ { victims: { $exists: true } }, { victims: { $gt: 1000 } } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

//Select with OR

//Select all the vampires that:

// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find( { $or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// love brooding or being tragic
// Vampire.find( { $or: [ { loves: 'brooding' }, { loves: 'being tragic' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// have more than 1000 victims or love marshmallows
// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, { loves: 'marshmallows' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// have red hair or green eyes
// Vampire.find( { $or: [ { hair_color: 'red' }, { eye_color: 'green' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Select objects that match one of several values

// Select all the vampires that:

// love either frilly shirtsleeves or frilly collars
// Vampire.find( { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// love brooding
// Vampire.find( { loves: 'brooding' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find( { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' }, { loves: 'R&B music' } ] } )
.then((vampire) => {
  console.log(vampire);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  db.close();
});
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *






