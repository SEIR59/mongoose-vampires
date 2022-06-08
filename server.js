require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")
const Vampire = require("./vampires")



//Middleware
const DATABASE_URL = process.env.DATABASE_URL; //just give it a variable name for using .env
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DATABASE_URL, CONFIG);
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error));

const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})

app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

app.get("/", (req, res) => {
  res.send("your server is running... better catch it.");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

const Vampires = [
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

  app.get("/vampires/seed", (req, res) => {
    Vampire.deleteMany({}).then(() => {
      Vampire.insertMany(Vampires).then((data) => {
        res.json(data);
    })
})
})

/*Vampire.create([
  {
    name: 'Bniyam',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1999, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'denver,co,US',
    gender: 'm',
    title: 'The tallest'
  },
  {
    name: 'Afe',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1998, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'washington,dc,US',
    gender: 'm',
    title: 'The funny'
  }, {
    name: 'Helu',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(2000, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'alexa,va,US',
    gender: 'f',
    title: 'The not funny '
  }, {
    name: 'Liyu',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1999, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'silverspring,md,US',
    gender: 'f',
    title: 'The gf'
  }
 ])*/

 // TO FIND FEMAIL VAMPIRES
 const findFemaleVampires = async () => {
  try {
    const femaleVampires = await Vampire.find({ gender: 'f' });
    console.log(femaleVampires);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//findFemaleVampires()

// FIND THE ONES WHO HAVE OVER 500 victims
const find500v = async () => {
  try {
    const victims500 = await Vampire.find({ victims:{$gt:500 }});
    console.log(victims500);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
 //find500v()

 const lessFewer = async () => {
  try {
    const lessF = await Vampire.find({ victims:{$lte:150 }});
    console.log(lessF);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
 //lessFewer()

 const notEqual = async () => {
  try {
    const noteq = await Vampire.find({ victims:{$ne:210234 }});
    console.log( noteq);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//notEqual()

const gtle = async () => {
  try {
    const  gl = await Vampire.find({ victims:{$gt:150, $lte:500 }});
    console.log( gl );
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//gtle()

const title = async () => {
  try {
    const tyt = await (await Vampire.find({ title:{ $exists: true } }))
    console.log( tyt );
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
 title()