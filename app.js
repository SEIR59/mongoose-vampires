const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/vampires"
const Vampire = require('./vampires')
const db = mongoose.connection
mongoose.connect(mongoURI);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });




const newVampires = (
    [
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
)

// Vampire.create(
//     {
//         name: 'steven',
//         hair_color: 'brown',
//         eye_color: 'blue',
//         dob: new Date(1924, 6, 3, 13, 12),
//         loves: ['video games'],
//         location: 'Philadelphia,PA, US',
//         gender: 'm',
//         title: 'Sticky'
//     }
// )
// Vampire.create(
//     {
//         name: 'james',
//         hair_color: 'bald',
//         eye_color: 'blue',
//         dob: new Date(1904, 7, 3, 13, 12),
//         loves: ['poker'],
//         location: 'Philadelphia,PA, US',
//         gender: 'm',
//         title: 'Captian',
//         victims: 62549,
//     }
// )




// Vampire.create(
//     {
//         name: 'Gwargo',
//         hair_color: 'Silver',
//         eye_color: 'no eyes',
//         dob: new Date(1124, 6, 3, 13, 12),
//         loves: ['singing in the shower'],
//         location: 'Philadelphia,PA, US',
//         gender: 'm',
//         title: 'Dreadfull',
//         victims: 69,
//     }
// )
// Vampire.create(
//     {
//         name: 'Shit',
//         hair_color: 'brown',
//         eye_color: 'brown',
//         dob: new Date(1, 6, 3, 13, 12),
//         loves: ['track and field'],
//         location: 'Philadelphia,PA, US',
//         gender: 'm',
//         title: 'The Old One',
//         victims: 13546841687,
//     }
// )


//   Vampire.insertMany(newVampires)
//   .then((vampire) => {
//     console.log(vampire)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//    db.close()
//   })
  







//Querying//

//Select by Comparison//

Vampire.find({gender:'f'})
    .then((res)=>{
        console.log(res)
})

Vampire.find({victims:{$gt:500}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({victims:{$lte:150}})
    .then((res)=>{
        console.log(res)
})

    Vampire.find({victims:{$ne:210234}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$and:[{victims:{$lt:500}},{victims:{$gt:150}}]})
    .then((res)=>{
        console.log(res)
})

//Select by exists or does not exist//

Vampire.find({title:{$exists:true}})
    .then((res)=>{
        console.log(res)
})
Vampire.find({victims:{$exists:false}})
    .then((res)=>{
        console.log(res)
})


Vampire.find({$and:[{title:{$exists:true}},{victims:{$exists:false}}]})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$and:[{victims:{$gt:1000}},{victims:{$exists:true}}]})
    .then((res)=>{
        console.log(res)
})


// select with OR//

Vampire.find({$or:[{location:'New Orleans, Louisiana, US'},{location:'New York, New York, US'}]})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$or:[{loves:/brooding/},{loves:/tragic/}]})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$or:[{loves:/marshmallows/},{victims:{$gt:1000}}]})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$or:[{eye_color:/green/},{hair_color:'red'}]})
    .then((res)=>{
        console.log(res)
})

//select objects that match one of several//

Vampire.find({loves:{$in:['frilly shirtsleeves','frilly collars']}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({loves:{$in:['brooding']}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({loves:{$in:['appearing innocent','trickery','lurking in rotting mansions','R&B music']}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({$and:[{loves:{$in:['fancy cloaks']}},{loves:{$nin:['top hats','virgin blood']}}]})
    .then((res)=>{
        console.log(res)
})

//negative selectioni//

Vampire.find({$and:[{loves:{$in:['ribbons']}},{eye_color:{$ne:'brown'}}]})
    .then((res)=>{
        console.log(res)
})
Vampire.find({location:{$ne:'Rome, Italy'}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({loves:{$nin:['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}})
    .then((res)=>{
        console.log(res)
})

Vampire.find({victims:{$not:{$gte: 200}}})
    .then((res)=>{
        console.log(res)
})


//Replace//

Vampire.updateOne({name:'Claudia'},{$set:{name:'Eve',portrayed_by: 'Tilda Swinton'}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateOne({gender:'m'},{$set:{name:'Guy Man',is_actually:'were-lizard'}})
    .then((res)=>{
        console.log(res)
})

//UPDATE//

Vampire.updateOne({name:'Guy Man'},{$set:{gender:'f'}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateOne({name:'Eve'},{$set:{gender:'m'}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateOne({name:'Guy Man'},{$set:{hates:['clothes','jobs']}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateOne({name:'Guy Man'},{$push:{hates:'jackalopes'}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateOne({name:'Guy Man'},{$push:{hates:'alarm clocks'}})
    .then((res)=>{
        console.log(res)
})


Vampire.updateOne({name:'Eve'},{$set:{name:'moniker'}})
    .then((res)=>{
        console.log(res)
})

Vampire.updateMany({gender:'f'},{$set:{gender:'fems'}})
    .then((res)=>{
        console.log(res)
})

//Delete//

Vampire.deleteMany({eye_color:'blue'})
    .then((res)=>{
        console.log(res)
})

Vampire.deleteOne({hair_color:'brown'})
    .then((res)=>{
        console.log(res)
})
