require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const app = require('liquid-express-views')(express(), {root: [path.resolve(__dirname, 'views/')]})
const PORT = process.env.PORT
const seedData = require('./seed.js')
const db = mongoose.connection;
const Vampire = require('./vampire.js')


const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)
mongoose.connection
.on('open', () => console.log('Connected to Mongoose'))
.on('close', () => console.log('Disconnected from Mongoose'))
.on('error', (error) => console.log(error))

//MiddleWare
app.use(morgan("tiny")); 
app.use(methodOverride("_method")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.send("Here");
  });
  
  const newVampires = [
    {
        name: 'Michael',
        title: 'Duke',
        hair_color: 'blonde',
        eye_color: 'blue',
        dob: new Date(1998, 3, 13, 7, 47),
        loves: ['sucking blood','stakes'],
        location: 'New York, New York, US',
        gender: 'm',
        victims: 902,
      },
      {
        name: 'Rob',
        hair_color: 'black',
        eye_color: 'black',
        dob: new Date(1937, 2, 14, 7, 47),
        loves: ['cats','baseball'],
        location: 'San Fran, California, US',
        gender: 'm',
        victims: 523,
      },
      {
        name: 'Fiona',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1995, 2, 13, 6, 47),
        loves: ['horse riding','cars'],
        location: 'Guangzhou, China',
        gender: 'f',
        victims: 110,
      },
      {
        name: 'Sam',
        hair_color: 'brown',
        eye_color: 'blue',
        dob: new Date(1891, 3, 26, 7, 47),
        loves: ['books'],
        location: 'LA, California, US',
        gender: 'f',
        victims: 260,
      }
]

// //Find Females
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

//  //Greater than 500 victims
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

// // Fewer than or equal to 150 victims
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

// // Not equal 210234
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

// // Greater than 150 and fewer than 500
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

//Key of title
// Vampire.find({ title: { $exists: true } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Do not have key of victim
// Vampire.find({ victims: { $exists: false } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Title and no victims
// Vampire.find({ victims: { $exists: false }, title: { $exists: true } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// Great than 1000 victims
// Vampire.find({ victims: { $exists: true }, victims: { $gte: 1000 } })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// From New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({
//   $or: [
//     { location: "New York, New York, US" },
//     { location: "New Orleans, Louisiana, US" },
//   ],
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// Brooding or being tragic
// Vampire.find({
//   loves: { $in: ["brooding", "being tragic"] },
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// More than 1000 victims or love marshmallows
// Vampire.find({
//   $or: [{ victims: { $gt: 1000 } }, { loves: "marshmallows" }],
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

//Red hair or green eyes
// Vampire.find({
//     $or: [{ hair_color: "red" }, { eye_color: "green" }],
//   })
//     .then((v) => {
//       console.log(v);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       db.close();
//     });

// Frilly shirtsleeves or frilly collars
// Vampire.find({
//   $or: [{ loves: "frilly shirtsleeves" }, { loves: "frilly collars" }],
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });
 
// Brooding
//  Vampire.find({
//   loves: "brooding",
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// Love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
//  Vampire.find({
//   $or: [
//     { loves: "appearing innocent" },
//     { loves: "trickery" },
//     { loves: "lurking in rotting mansions" },
//     { loves: "R&B music" },
//   ],
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// love fancy cloaks but not if they also love either top hats or virgin blood
// Vampire.find({
//     $and: [
//       { loves: "fancy cloaks" },
//       { loves: { $nin: ["top hats", "virgin blood"] } },
//     ],
//   })
//     .then((v) => {
//       console.log(v);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       db.close();
//     });

// love ribbons but do not have brown eyes
// Vampire.find({
//   $and: [{ loves: "ribbons" }, { eye_color: { $ne: "brown" } }],
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// // are not from Rome
//  Vampire.find({
//    location:{$ne: "Rome"} 
//   })
//     .then((v) => {
//       console.log(v);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       db.close();
//     });

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({
//   loves: {
//     $nin: [
//       "fancy cloaks",
//       "frilly shirtsleeves",
//       "appearing innocent",
//       "being tragic",
//       "brooding",
//     ],
//   },
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// // have not killed more than 200 people
//  Vampire.find({
//   victims: { $lte: 200 },
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });
 

// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.updateOne(
//   { name: "Claudia" },
//   { $set: {name: "Eve"} }
// )
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });
//  Vampire.findOneAndUpdate(
//      { name: "Eve"},
//      { $set: {portrayed_by: "Tilda Swinton"}}
//  )
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.replaceOne(
//   { gender: "m" },
//   { name: "Guy Man", is_actually: "were-lizard" },
//   { new: true }
// )
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   }); 

// Update 'Guy Man' to have a gender of 'f'
 Vampire.updateOne({ name: "Guy Man" }, { $set: { gender: "f" } })
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// Update 'Eve' to have a gender of 'm'
 Vampire.updateOne({ name: "Eve" }, { $set: { gender: "m" } })
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

  // Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
Vampire.updateOne({ name: "Guy Man" }, { $set: { hates: ["clothes", "jobs"] } })
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
Vampire.updateOne(
  { name: "Guy Man" },
  {
    $push: {
      hates: { $each: ["alarm clocks", "jackalopes"] },
    },
  }
)
  .then((v) => {
    console.log(v);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  }); 



app.listen(PORT, () => console.log("Listening on Port 3000"));

// Vampire.insertMany(newVampires)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})