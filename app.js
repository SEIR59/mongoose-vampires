const mongoose = require('mongoose')
const Vampire = require('./vampires.js')

const mongoURI = 'mongodb://localhost/mongoose_vampires'
const db = mongoose.connection

mongoose.connect(mongoURI)

db.on('open', () => console.log('mongo connected: ', mongoURI))
db.on('close', () => console.log('Disconnected from:m', mongoURI))
db.on('error', (error) => console.log(error))

//Inserting Seed Data Using Mongoose
const vampireData = [
    {
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },{
    name: 'Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  },{
    name: 'Elizabeth Bathory ',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks','frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  },{
    name: 'Lestat',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
  },{
    name: 'Louis de Pointe du Lac',
    dob: new Date(1766, 6, 4, 2, 1),
    hair_color: 'brown',
    eye_color: 'blue',
    loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
    location: 'New Orleans, Louisiana, US',
    gender:'m',
    victims: 150
  },{
    name:'Claudia',
    dob: new Date(1793, 2, 7, 8, 30),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290
  },{
    name:'Armand',
    dob: new Date(1481, 6, 1, 10, 42),
    hair_color: 'red',
    eye_color: 'brown',
    loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045
  },{
    name:'Santino',
    dob: new Date(1465, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103
  },{
    name:'Akasha',
    dob: new Date(-8000, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    title: 'Queen of the Damned'
  },{
    name: 'Edward Cullen',
    dob: new Date(1901, 6, 20, 0, 57),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
    location: 'Chicago, Illinois, US',
    gender: 'm',
  },{
    name: 'Persephone Bourignon',
    dob: new Date(1801, 5, 17, 14, 53),
    hair_color: 'red',
    eye_color: 'green',
    loves: ['wine', 'fancy cloaks', 'appearing innocent'],
    location: 'Paris, France',
    gender: 'f',
    victims: 450
  },{
    name: 'René Tremblay',
    dob: new Date(1922, 2, 8, 5, 3),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['frilly shirtsleeves', 'trickery', 'card games'],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134
  },{
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ['marshmallows', 'ribbons', 'being tragic'],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567
  },{
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['brooding', 'frilly shirtsleeves'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112
  },{
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

/*
// Add the vampire data that was given
Vampire.insertMany(vampireData)
.then((data) =>  {console.log(data)})
.catch((error)=>{console.log(error)})
.finally(()=>{db.close()})
*/

// Add 4 new vampire data
const myFourNewVampires = [
  {
    name:'Count von Count',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1972, 9, 16, 9, 16),
    loves: ['counting', 'laughing'],
    location: 'Sesame Street',
    gender: 'm',
    victims: 406
  },
  {
    name:'Bearcula',
    hair_color: 'brown',
    eye_color: 'red',
    dob: new Date(1992, 9, 20, 9, 20),
    loves: ['roaring', 'growling', 'sleeping'],
    location: 'Harlem',
    gender: 'm',
    victims: 1
  },
  {
    name:'Princess Sangre',
    hair_color: 'black',
    eye_color: 'pink',
    dob: new Date(1859, 7, 4, 4, 7),
    loves: ['commanding', 'laughing'],
    location: 'South America',
    gender: 'f',
    victims: 999
  },
  {
    name:'Bunnicula',
    hair_color: 'white',
    eye_color: 'red',
    dob: new Date(2006, 6, 6, 6, 6),
    loves: ['hopping', 'lurking'],
    location: 'Death Valley',
    gender: 'u',
    victims: 406
  }
]

/* 
// seed 4 new vampire data
Vampire.create(myFourNewVampires)
// if database transaction succeeds
.then((vampire) => {
  console.log(vampire)
})
// if database transaction fails
.catch((error) => {
  console.log(error)
})
// close db connection either way
.finally(() => {
 db.close()
})
 */


// QUERYING

// Select by comparison
//1
Vampire.find({ gender: "f" })
  .then((vampire) => {
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// 2
Vampire.find({ victims: { $gte: 500 } })
  .then((vampire) => {
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// 3
Vampire.find({ victims: { $lte: 150 } })
  .then((vampire) => {
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// 4
Vampire.find({ victims: { $ne: 210234 } })
  .then((vampire) => {
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// 5
Vampire.where("victims")
  .gte(150)
  .lt(500)
  .then((vampire) => {
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });



  //Select by exists or does not exist
//1
Vampire.find({ title: { $exists: true } })
  .then((vampire) => {
    console.log("have a key of 'title':");
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

  // 2
Vampire.find({ victims: { $exists: false } })
  .then((vampire) => {
    console.log("do not have a key of 'victims':");
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

  // 3
Vampire.find({ victims: { $exists: false }, title: { $exists: true } })
  .then((vampire) => {
    console.log("have a title AND no victims:");
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// 4
Vampire.find({ victims: { $exists: true }, victims: { $gte: 1000 } })
  .then((vampire) => {
    console.log("have victims AND the victims they have are greater than 1000: ");
    console.log(vampire);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });
