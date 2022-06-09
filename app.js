const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1/vampires";
const db = mongoose.connection;
const vampireArray = require("./vampire.js");

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const { Schema, model } = mongoose;
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

const vampireSchema = new Schema({
  name: { type: String, require: true },
  title: String,
  hair_color: { type: String, require: "Blonde" },
  eye_color: String,
  dob: Date,
  loves: Array,
  location: String,
  gender: String,
  victims: { type: Number, min: 0 },
  
}, {
strict: false 
});
const Vampire = model("Vampire", vampireSchema);

/*Vampire.insertMany(vampireArray)
.then((data) =>{
  console.log(data)
})
.catch((error) =>{
  console.log(error)
})
.finally(() =>{db.close()})*/

const newVamp = [
  {
    name: "Vamp One",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 3,
  },
  {
    name: "Vamp Two",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "M",
    victims: 5,
  },
  {
    name: "Vamp Three",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "F",
    victims: 4,
  },
  {
    name: "Vamp Four",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "F",
    victims: 1,
  },
];
// Vampire.insertMany(newVamp)
// .then((data) =>  {console.log(data)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{db.close()})

// Vampire.find({gender: 'f'})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $gt :500 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $lte :150 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({victims: { $ne :210234 }})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find( { $and:[ {victims: { $gt :150 }, victims: {$lt : 500 }}]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ title: {$exists: true}})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ title: {$exists: false}})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $and: [{ title: {$exists: true}, victims: {$exists: false} }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $and: [{ vicitms: {$exists: true}, victims: {$gt: 1000} }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $or: [{ location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $or: [{ loves: 'brooding'}, {loves: 'being tragic' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $or: [{ victims: {$gt:1000}}, {loves: 'marshmallows' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ $or: [{ hair_color: 'red'}, {eye_color: 'green' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })

// Vampire.find({ $or: [ { loves: 'frilly shirtsleeves'}, {loves: 'filly collars' }]})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ loves: 'Brooding'})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({ loves:{ $in:['appearing innocent','trickery','lurking in rotting mansons','R&B music' ]}})
// .then((vampire) =>{
//    console.log(vampire)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(() =>{
//     db.close()
// })
// Vampire.find({
//   $and: [
//     { loves: { $in: ["fancy cloaks"] } },
//     { loves: { $nin: ["virgin blood", "top hats"] } },
//   ],
// });
//  .then((vampire) =>{
//        console.log(vampire)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
//     .finally(() =>{
//         db.close()
//     })
// Vampire.find({$and:[{loves:{$in:['ribbons']}}, {eye_color:{$ne:'brown'}}]})
// .then((vampire) =>{
//   console.log(vampire)
// })
// .catch((error) =>{
//    console.log(error)
// })
// .finally(() =>{
//    db.close()
// })
// Vampire.find({location: {$ne:'Rome Italy'}})
// .then((vampire) =>{
//   console.log(vampire)
// })
// .catch((error) =>{
//    console.log(error)
// })
// .finally(() =>{
//    db.close()
// })
// Vampire.find({loves:{$nin:['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}})
// .then((vampire) =>{
//   console.log(vampire)
// })
// .catch((error) =>{
//    console.log(error)
// })
// .finally(() =>{
//    db.close()
// })
// Vampire.find({victims:{$lt:200}})
// .then((vampire) =>{
//   console.log(vampire)
// })
// .catch((error) =>{
//    console.log(error)
// })
// .finally(() =>{
//    db.close()
// })
// Vampire.updateOne({name:'Claudia'}, {$set:{name:'Eve'}})
// .then((vampire) =>{
//   console.log(vampire)
// })
// .catch((error) =>{
//    console.log(error)
// })
// .finally(() =>{
//    db.close()
// })
// Vampire.updateOne({ name: "Eve" }, { $set: { portrayed_by: "Tilda Swinton" } })
//   .then((vampire) => {
//     console.log(vampire);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     db.close();
//   });
// Vampire.findOneAndUpdate({gender:'m'}, { $set: {name: 'Guy Man'}})
  // .then((vampire) => {
  //   console.log(vampire);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
  // .finally(() => {
  //   db.close();
  // });
// Vampire.updateOne({ name: 'Guy Man'}, { $set: {gender: "f"}})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });
// Vampire.updateOne({ name: 'Eve'}, { $set: {gender: 'm'}})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });
// Vampire.updateOne({ name: 'Guy Man'}, { $set: {hates: ['clothes', 'jobs']}})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });
// Vampire.updateOne({ name: 'Guy Man'}, { $push: {hates: ['alarm clocks', 'jackalopes']}})
// .then((vampire) => {
//   console.log(vampire);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   db.close();
// });
Vampire.updateOne({ name: 'Eve'}, { $rename: {name:'moniker'}}, {upsert: true} )
.then((vampire) => {
  console.log(vampire);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  db.close();
});
// Vampire.updateMany( {gender: 'f'}, { gender: 'fems'}, {upsert: true} )
// .then((vampire) => {
//   console.log(vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })
// Vampire.deleteOne( {hair_color: 'brown'} )
// .then((vampire) => {
//   console.log(vampire)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })
Vampire.deleteMany( {eye_color: 'blue'} )
.then((vampire) => {
  console.log(vampire)
})
.catch((error) => {
  console.log(error)
})
.finally(() => {
 db.close()
})