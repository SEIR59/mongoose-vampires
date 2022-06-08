require('dotenv').config(); // Load ENV Variables
const express = require('express'); // import express
const morgan = require('morgan'); //import morgan
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const vampire = require('./models/vampire');
const seedData = require('./seedData');

//! Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require('liquid-express-views')(express(), {
  root: [path.resolve(__dirname, 'views/')],
});

/////////////////////////////////////////////////////
//! Middleware
/////////////////////////////////////////////////////
app.use(morgan('dev')); //? logging
app.use(methodOverride('_method')); //? override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); //? parse urlencoded request bodies
app.use(express.static('public')); //? serve files from public statically

/////////////////////////////////////////////
//! Database Connection
/////////////////////////////////////////////
//? Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//? Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

//? Events for when connection opens/disconnects/errors
mongoose.connection
  .on('open', () => console.log('Connected to Mongoose'))
  .on('close', () => console.log('Disconnected from Mongoose'))
  .on('error', (error) => console.log(error));

////////////////////////////////////////////
//! Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('your server is running... better catch it.');
});

//? INDEX ROUTE
app.get('/vampires', async (req, res) => {
  try {
    const vampires = await vampire.find({});
    // res.json(vampires);
    res.render('index', { vampires });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//? SEED ROUTE
app.get('/vampires/seed', async (req, res) => {
  try {
    await vampire.deleteMany({});
    const vampiresData = await vampire.insertMany(seedData);
    res.json(vampiresData);
  } catch (error) {
    res.json({ message: error.message });
  } finally {
    mongoose.connection.close();
  }
});

//? SHOW ROUTE
app.get('/vampires/:id', async (req, res) => {
  try {
    const vamp = await vampire.findById(req.params.id);
    res.render('show', { vampire: vamp });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//? CREATE VAMPIRE
const createVampires = async (vampData) => {
  try {
    const vamp = await vampire.insertMany(vampData);
    console.log(vamp);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// createVampires([{
//   name: 'Anita Chan',
//   dob: new Date(1560, 8, 6, 23, 10),
//   hair_color: 'black',
//   eye_color: 'brown',
//   loves: ['KPOP', 'KDRAMA', 'Chinese Food'],
//   location: 'Brooklyn, NY',
//   gender: 'f',
//   victims: 1000,
// },
// {
//   name: 'Jose Zambrano',
//   dob: new Date(1998, 8, 20, 22, 10),
//   hair_color: 'black',
//   eye_color: 'brown',
//   loves: ['Playing Video Games', 'Hot Sauce', 'Mexican food'],
//   location: 'Brooklyn, NY',
//   gender: 'm',
//   victims: 200,
// },
// {
//   name: 'Melissa Diaz',
//   dob: new Date(1997, 8, 6, 22, 10),
//   hair_color: 'black',
//   eye_color: 'brown',
//   loves: ['Fashion', 'Money', 'Mexican food'],
//   location: 'Brooklyn, NY',
//   gender: 'f',
//   victims: 500,
// },
// {
//   name: 'Cristina Madueno',
//   dob: new Date(1995, 8, 6, 22, 10),
//   hair_color: 'black',
//   eye_color: 'brown',
//   loves: ['Mexican food', 'Working', 'KPOP'],
//   location: 'Brooklyn, NY',
//   gender: 'f',
//   victims: 2000,
// }]);

// (Select by comparison)
// #1. Find all the vampires that that are females
const findFemaleVampires = async () => {
  try {
    const femaleVampires = await vampire.find({ gender: 'f' });
    console.log(femaleVampires);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//   findFemaleVampires();

// (Select by comparison)
// #2. have greater than 500 victims
const vampWithGreaterThanFiveHundredVictims = async () => {
  try {
    const vamps = await vampire.find({ victims: { $gt: 500 } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// vampWithGreaterThanFiveHundredVictims();

// (Select by comparison)
// #3. have fewer than or equal to 150 victims
const fewerOrEqualOneVictims = async () => {
  try {
    const vamps = await vampire.find({ victims: { $lte: 150 } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// fewerOrEqualOneVictims();

// (Select by comparison)
// #4. have a victim count is not equal to 210234
const countNotEqual = async () => {
  try {
    const vamps = await vampire.find({ victims: { $ne: 210234 } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//   countNotEqual();

// (Select by comparison)
// #5. have greater than 150 AND fewer than 500 victims
const greaterThan150FewerThan500 = async () => {
  try {
    const vamps = await vampire.find({ victims: { $gt: 150, $lt: 500 } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// greaterThan150FewerThan500();

// (Select by exists or does not exist)
// #1. have a key of 'title'
const haveKeyTitle = async () => {
  try {
    const vamps = await vampire.find({ title: { $exists: true } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//   haveKeyTitle();

// (Select by exists or does not exist)
// #2. Do not have a key of 'victims'
const notHaveKeyVictims = async () => {
  try {
    const vamps = await vampire.find({ victims: { $exists: false } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//   notHaveKeyVictims();

// (Select by exists or does not exist)
// #3. have a title AND no victims
const haveTitleAndNoVictims = async () => {
  try {
    const vamps = await vampire.find({
      title: { $exists: true },
      victims: { $exists: false },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
//   haveTitleAndNoVictims();

// (Select by exists or does not exist)
// #4. have victims AND the victims they have are greater than 1000
const haveVictimsAndVictimsGreaterThan1000 = async () => {
  try {
    const vamps = await vampire.find({
      victims: { $exists: true, $gte: 1000 },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// haveVictimsAndVictimsGreaterThan1000();

// (Select with OR)
// #1. are from New York, New York, US or New Orleans, Louisiana, US
const fromNewYorkOrNewOrleans = async () => {
  try {
    const vamps = await vampire.find({
      $or: [
        { location: 'New York, New York, US' },
        { location: 'New Orleans, Louisiana, US' },
      ],
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// fromNewYorkOrNewOrleans();

// (Select with OR)
// #2. love brooding or being tragic
const loveBroodingOrBeingTragic = async () => {
  try {
    const vamps = await vampire.find({
      $or: [
        { loves: { $in: ['brooding'] } },
        { loves: { $in: ['being tragic'] } },
      ],
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// loveBroodingOrBeingTragic();

// (Select with OR)
// #3. have more than 1000 victims or love marshmallows
const haveMoreThan1000VictimsOrLovesMarshmallows = async () => {
  try {
    const vamps = await vampire.find({
      $or: [{ victims: { $gt: 1000 } }, { loves: { $in: ['marshmallows'] } }],
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// haveMoreThan1000VictimsOrLovesMarshmallows();

// (Select with OR)
// #4. have red hair or green eyes
const haveRedHairOrGreenEyes = async () => {
  try {
    const vamps = await vampire.find({
      $or: [{ hair_color: 'red hair' }, { eye_color: 'green eyes' }],
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// haveRedHairOrGreenEyes();

// (Select objects that match one of several values)
// #1. love either frilly shirtsleeves or frilly collars
const loveEitherFrillyShirtsleevesOrFrillyCollars = async () => {
  try {
    const vamps = await vampire.find({
      $or: [
        { loves: { $in: ['frilly shirtsleeves'] } },
        { loves: { $in: ['frilly collars'] } },
      ],
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// loveEitherFrillyShirtsleevesOrFrillyCollars();

// (Select objects that match one of several values)
// #2. love brooding
const lovesBrooding = async () => {
  try {
    const vamps = await vampire.find({ loves: { $in: ['brooding'] } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// lovesBrooding();

// (Select objects that match one of several values)
// #3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
const noName = async () => {
  try {
    const vamps = await vampire.find({
      loves: {
        $in: [
          'appearing innocent',
          'trickery',
          'lurking in rotting mansions',
          'R&B music',
        ],
      },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName();

// (Select objects that match one of several values)
// #4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
const lovesFancyCloaksButDontLikeTopHatsOrVirginBlood = async () => {
  try {
    const vamps = await vampire.find({
      loves: {
        $in: ['fancy cloaks'],
        $nin: ['top hats', 'virgin blood'],
      },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// lovesFancyCloaksButDontLikeTopHatsOrVirginBlood();

// (Negative Selection)
// #1. love ribbons but do not have brown eyes
const lovesRibbonsButDontHaveBrownEyes = async () => {
  try {
    const vamps = await vampire.find({
      loves: {
        $in: ['ribbons'],
      },
      eye_color: { $ne: 'brown eyes' },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// lovesRibbonsButDontHaveBrownEyes();

// (Negative Selection)
// #2. are not from Rome
const notFromRome = async () => {
  try {
    const vamps = await vampire.find({
      location: { $ne: 'Rome, Italy' },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// notFromRome();

// (Negative Selection)
// #3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
const noName2 = async () => {
  try {
    const vamps = await vampire.find({
      loves: {
        $nin: [
          'fancy cloaks',
          'frilly shirtsleeves',
          'appearing innocent',
          'being tragic',
          'brooding',
        ],
      },
    });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName2();

// (Negative Selection)
// #4. have not killed more than 200 people
const haveNotKilledMoreThan2000 = async () => {
  try {
    const vamps = await vampire.find({ victims: { $lte: 200 } });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// haveNotKilledMoreThan2000();

// Replace (this one may require some additional google foo. Hint: fields may need to be updated in schema)
// #1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
const noName3 = async () => {
  try {
    const vamps = await vampire.updateOne(
      { name: 'Claudia' },
      { $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName3();

// Replace (this one may require some additional google foo. Hint: fields may need to be updated in schema)
// #2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
const noName4 = async () => {
  try {
    const vamps = await vampire.findOneAndUpdate(
      { gender: 'm' },
      { $set: { name: 'Guy Man', is_actually: 'were-lizard' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName4();

// Update
// #1. Update 'Guy Man' to have a gender of 'f'
const noName5 = async () => {
  try {
    const vamps = await vampire.findOneAndUpdate(
      { name: 'Guy Man' },
      { $set: { gender: 'f' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName5();

// Update
// #2. Update 'Eve' to have a gender of 'm'
const noName6 = async () => {
  try {
    const vamps = await vampire.findOneAndUpdate(
      { name: 'Eve' },
      { $set: { gender: 'm' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName6();

// Update
// #3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
const noName7 = async () => {
  try {
    const vamps = await vampire.findOneAndUpdate(
      { name: 'Guy Man' },
      { $set: { hates: ['clothes', 'jobs'] } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName7();

// Update
// #4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
const noName8 = async () => {
  try {
    const vamps = await vampire.updateOne(
      { name: 'Guy Man' },
      { $push: { hates: ['alarm clocks', 'jackalopes'] } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName8();

// Update
// #5. Rename 'Eve's' name field to 'moniker
const noName9 = async () => {
  try {
    const vamps = await vampire.findOneAndUpdate(
      { name: 'Eve' },
      { $set: { name: 'moniker' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName9();

// Update
// #6. We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
const noName10 = async () => {
  try {
    const vamps = await vampire.updateMany(
      { gender: 'f' },
      { $set: { gender: 'fems' } }
    );
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName10();

// Remove
// #1. Remove a single document wherein the hair_color is 'brown'
const noName11 = async () => {
  try {
    const vamps = await vampire.deleteOne({ hair_color: 'brown' });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName11();

// Remove
// #2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
const noName12 = async () => {
  try {
    const vamps = await vampire.deleteMany({ eye_color: 'blue' });
    console.log(vamps);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};
// noName12();

// Hungry for more
// #1. Write what that does in English: Find a person whose occupation is ...
// Answer: Find a person whose occupation is a host where lastname is equal to Ghost, age is greater than 17 and less than 66. Who likes vaporizing and talking. Limit only to 10 results and sort in descending order by occupation and only display the name and occupation fields.
//////////////////////////////////////////////
//! Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
