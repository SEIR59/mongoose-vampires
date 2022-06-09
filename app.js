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
// Vampire.find( { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' }, { loves: 'R&B music' } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// Vampire.find( { $and: [ { loves: 'fancy cloaks' }, { loves: { $nin: ['top hats', 'virgin blood'] } } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });


// Negative Selection

// Select all vampires that:

// love ribbons but do not have brown eyes
// Vampire.find( { $and: [ { loves: 'ribbons' }, { eye_color: { $ne: 'brown' } } ] } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// are not from Rome
// Vampire.find({ location: { $ne: 'Rome, Italy' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({ loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'] } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// have not killed more than 200 people
// Vampire.find( { victims: { $lte: 200 } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Replace (this one may require some additional google foo. Hint: fields may need to be updated in schema)

// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.updateOne( { name: 'Claudia' }, { $set: { name: 'Eve' } })
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.updateOne( { name: 'Eve' }, { $set: { portrayed_by: 'Tilda Swinton' } }, { upsert: true } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Eve' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.updateOne( { gender: 'm' }, { $set: { name: 'Guy Man' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.updateOne( { name: 'Guy Man' }, { $set: { is_actually: 'were-lizard' } }, { upsert: true } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Guy Man' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });


// Update

// Update 'Guy Man' to have a gender of 'f'
// Vampire.updateOne( { name: 'Guy Man' }, { $set: { gender: 'f' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Guy Man' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Update 'Eve' to have a gender of 'm'
// Vampire.updateOne( { name: 'Eve' }, { $set: { gender: 'm' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Eve' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.updateOne( { name: 'Guy Man' }, { $set: { hates: ['clothes', 'jobs'] } }, { upsert: true } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Guy Man' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.updateOne( { name: 'Guy Man' }, { $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { name: 'Guy Man' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });


// Rename 'Eve's' name field to 'moniker'
// Vampire.updateOne( { name: 'Eve' }, { $rename: {'name': 'moniker' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( { moniker: 'Eve' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany( { gender: 'f' }, { $set: { gender: 'fems' } } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// Vampire.find( {gender: 'fems'} )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });


// Remove
// Remove a single document wherein the hair_color is 'brown'
// Vampire.deleteOne( { hair_color: 'brown' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany( { eye_color: 'blue' } )
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });

Vampire.find( { eye_color: 'blue' } )
.then((vampire) => {
  console.log(vampire);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  db.close();
});



