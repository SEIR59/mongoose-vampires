/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const seedData = require("../seed.js");
const Vampire = require("../vampire.js");
/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);
const db = mongoose.connection;

// Events for when connection opens/disconnects/errors
db.on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

// Vampire.insertMany(seedData)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// // add some vampire data - NOT WORK
// createVampire("Kyle", "black", "New York, US", "m", 450);
// createVampire("Bujidao", "black", "DC, US", "m", 250);
// createVampire("Mona", "black", "Hong Kong, China", "f", 250);
// createVampire("Shankela", "black", "Wellington, New Zealand", "f", 450);

// async function createVampire(name, eye_color, location, gender, victims) {
//   try {
//     const v1 = await Vampire.create({
//       name: this.name,
//       eye_color: this.eye_color,
//       dob: new Date(1984, 6, 3, 13, 12),
//       location: this.location,
//       gender: this.gender,
//       victims: this.victims,
//     });
//   } catch (e) {
//     console.log(e.message);
//   }
// }
const v1 = {
  name: "Jyle",
  eye_color: "black",
  dob: new Date(1984, 6, 3, 13, 12),
  location: "New York",
  gender: "m",
  victims: 450,
};
const v2 = {
  name: "Bujidao",
  eye_color: "black",
  dob: new Date(1984, 6, 4, 13, 12),
  location: "DC",
  gender: "m",
  victims: 200,
};
const v3 = {
  name: "Mona",
  eye_color: "black",
  dob: new Date(1984, 6, 9, 13, 12),
  location: "Hong Kong",
  gender: "f",
  victims: 300,
};
const v4 = {
  name: "Shankala",
  eye_color: "black",
  dob: new Date(1984, 6, 11, 13, 12),
  location: "Wellington",
  gender: "f",
  victims: 1000,
};
/// have to use async & await
const createVampire = async (v) => {
  try {
    const newVamp = await Vampire.create(v);
    console.log(newVamp);
  } catch (e) {
    console.log(e.message);
  }
};
// createVampire(v1);
// createVampire(v2);
// createVampire(v3);
// createVampire(v4);

// Querying
// Select by comparison
// 1.Find all the vampires that that are females
// Vampire.find({ gender: "f" })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// 2.have greater than 500 victims
// Vampire.find({ victims: { $gte: 500 } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// have greater than 150 AND fewer than 500 victims
// Vampire.where("victims")
//   .gte(150)
//   .lt(500)
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Select by exists of not
// Vampire.find({ title: { $exists: true } })
//   .then((v) => {
//     console.log("have a key of 'title':");
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } })
//   .then((v) => {
//     console.log("Do not have a key of 'victims':");
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// have a title AND no victims
// Vampire.find({ victims: { $exists: false }, title: { $exists: true } })
//   .then((v) => {
//     console.log("have a title AND no victims:");
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// have victims AND the victims they have are greater than 1000
/* Vampire.find({ victims: { $exists: true }, victims: { $gte: 1000 } })
  .then((v) => {
    console.log("have a title AND no victims:");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */

// Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
/* Vampire.find({
  $or: [
    { location: "New York, New York, US" },
    { location: "New Orleans, Louisiana, US" },
  ],
})
  .then((v) => {
    console.log("from New York, New York, US or New Orleans, Louisiana, US");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */

// love brooding or being tragic
// NOTE: mongoose create an empty array []
/* Vampire.find({
  loves: { $in: ["brooding", "being tragic"] },
})
  .then((v) => {
    console.log("love brooding or being tragic");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */
// have more than 1000 victims or love marshmallows
/* Vampire.find({
  $or: [{ victims: { $gt: 1000 } }, { loves: "marshmallows" }],
})
  .then((v) => {
    console.log("have more than 1000 victims or love marshmallows: ");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */

// have red hair or green eyes
/* Vampire.find({
  $or: [{ hair_color: "red" }, { eye_color: "green" }],
})
  .then((v) => {
    console.log("have red hair or green eyes: ");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });
 */

// Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
/* Vampire.find({
  $or: [{ loves: "frilly shirtsleeves" }, { loves: "frilly collars" }],
})
  .then((v) => {
    console.log("love either frilly shirtsleeves or frilly collars ");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });
 */
// love brooding
/* Vampire.find({
  loves: "brooding",
})
  .then((v) => {
    console.log("love brooding");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
/* Vampire.find({
  $or: [
    { loves: "appearing innocent" },
    { loves: "trickery" },
    { loves: "lurking in rotting mansions" },
    { loves: "R&B music" },
  ],
})
  .then((v) => {
    console.log("love at least one of ..");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); */

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find({
  $and: [
    { loves: "fancy cloaks" },
    { loves: { $nin: ["top hats", "virgin blood"] } },
  ],
})
  .then((v) => {
    console.log("love fancy cloaks but ..");
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// Negative Selection
// love ribbons but do not have brown eyes
// are not from Rome
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// have not killed more than 200 people

// Replace
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

// Update
// Update 'Guy Man' to have a gender of 'f'
// Update 'Eve' to have a gender of 'm'
// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Rename 'Eve's' name field to 'moniker'
// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".

// Remove
// Remove a single document wherein the hair_color is 'brown'
// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
