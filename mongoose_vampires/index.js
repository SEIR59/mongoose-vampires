const mongoose = require('mongoose')

const DATABASE_URL = 'mongodb://127.0.0.1/mongooseVampires'
//only nessesary with deprecation warning
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const db = mongoose.connection

mongoose.connect(DATABASE_URL, CONFIG)
db.on('open', () => { console.log('Connected to DB') })
    .on('close', () => { console.log('Closing DB') })
    .on('error', (error) => { console.log('There was an error: ', error) })

const { Schema, model } = mongoose

const vampireSchema = new Schema({
    name: { type: String, required: true },
    title: String,
    hair_color: { type: String, default: 'blonde' },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: { type: Number, min: 0 }
}, { strict: false })


const Vampires = model('mVampires', vampireSchema)

const myVamps = require('./vampires.js')
//console.log(myVamps)

/* const newVamps = require('./myVampires')
Vampires.deleteMany({}).then(()=>{
    Vampires.create(myVamps).then(()=>{
        Vampires.create(newVamps).then(()=>{
            db.close()
            console.log('Vampires refreshed')
        })
    })
})
 */

/* Vampires.find({gender:'f'}).then((results)=>{
      console.log('Gender: Females' ,results)
  })
  
  Vampires.find({victims:{$gt:500}}).then((results)=>{
      console.log('Victims > 500',results)
  })

  Vampires.find({victims:{$lte:150}}).then((results)=>{
      console.log('Victims <=150',results)
  })

Vampires.find({victims:{$ne:210234}}).then((results)=>{
    console.log('Victims $ne 210234',results)
})

Vampires.find({ victims: { $lt: 500 , $gt:150}}).then((results) => {
    console.log('GT150, LT500', results)
}) */

/* Vampires.find({title:{$exists:true}}).then((results)=>{
    console.log('Title key',results)
})

 Vampires.find({victims:{$exists:false}}).then((results)=>{
    console.log('No victims',results)
})

Vampires.find({title:{$exists:true} , victims:{$exists:false}}).then((results)=>{
    console.log('Title, no victims',results)
})

Vampires.find({victims:{$exists:true , $gt:1000}}).then((results)=>{
    console.log('Victims confirmed and over 1000',results)
})  */
/* 
Vampires.find({ $or:[
    {location: 'New York, New York, US'},
     {location: 'New Orleans, Louisiana, US'}] })
    .then((results) => {
        console.log('NY, NO', results)
    }) */
/* 
Vampires.find({
    loves: {
        $in: ['brooding', 'being tragic']
    }
}).then((results) => {
    console.log('brooding tragic' , results)
})

Vampires.find({
    $or: [{victims:{$gt:1000}}, {loves:{$in:['marshmallows']}}]
}).then((results) => {
    console.log('v1000 marsh' ,results)
})


Vampires.find({$or:[{eye_color:'green'},{hair_color:'red'}]}).then((results)=>{
    console.log('red hair or green eyes',results)
})  */


/* 
Vampires.find({loves:{$in:['frilly shirtsleeves','frilly collars']}}).then((results)=>{
    console.log('sleeve collar',results)
}) 

Vampires.find({loves:{$in:['brooding']}}).then((results)=>{
    console.log('brooding' ,results)
}) 

Vampires.find({loves:{$in:['appearing innocent','trickery','lurking in rotting mansions','R&B music']}
}).then((results)=>{
    console.log('One of many' ,results)
}) 

Vampires.find({$and:[{loves:{$in:['fancy cloaks']}},{loves:{$nin:['virgin blood','top hats']}}]}).then((results)=>{
    console.log('fancy cloaks, not hats/blood',results)
}) */

/* 
Vampires.find({$and:[{loves:{$in:['ribbons']}}, {eye_color:{$ne:'brown'}}]}).then((results)=>{
    console.log('ribbons, no brown',results)
}) 

Vampires.find({location:{$ne:'Rome, Italy'}}).then((results)=>{
    console.log('no Rome',results)
}) 

Vampires.find({loves:{$nin:['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}}).then((results)=>{
    console.log('No many loves',results)
})

Vampires.find({victims:{$lt:200}}).then((results)=>{
    console.log('$lt 200 victs',results)
})  */

/* Vampires.findOneAndReplace({name:'Claudia'}, { portrayed_by:'Tilda Swinton', name:'Eve'}, ).then((results)=>{
    Vampires.find({name:'Eve'}).then((eve)=>{
        console.log(eve)
    })})
 */
/* 
Vampires.findOneAndReplace({gender:'m'},{name:'Guy Man', is_actually:'were-lizard'}).then((results)=>{
    Vampires.find({name:'Guy Man'}).then((guy)=>{console.log(guy)})
}) */

/* 
Vampires.updateOne({name:'Guy Man'} ,{gender:'f'}).then((results)=>{
    Vampires.find({name:'Guy Man'}).then((guy)=>{console.log(guy)})
}) 

 Vampires.updateOne({name:'Eve'}, {gender:'m'}).then((results)=>{
    Vampires.find({name:'Eve'}).then((guy)=>{console.log(eve)})
})  


 Vampires.updateOne({name:'Guy Man'}, {hates: ['clothes', 'jobs']}).then((results)=>{
    Vampires.find({name:'Guy Man'}).then((guy)=>{console.log(guy)})
}) 

 Vampires.updateOne({name: 'Guy Man'} , {$push:{hates:{$each:['alarm clocks', 'jackalopes']}}}).then((results)=>{
    Vampires.find({name:'Guy Man'}).then((guy)=>{console.log(guy)})
})
 
 Vampires.updateOne({name:'Eve'}, {$rename:{name:'moniker'}} ).then((results)=>{
    Vampires.find({moniker:'Eve'}).then((eve)=>{console.log(eve)})
}) 


Vampires.updateMany({gender:'f'},{gender:'fems'}).then((results)=>{
    console.log(results)
}) */

/* 

Vampires.deleteOne({hair_color:'brown'}).then((results)=>{
    console.log(results)
})

 Vampires.deleteMany({eye_color:'blue'}).then((results)=>{
    console.log(results)
})
 */

///////////////////////// Hungry for more? Yeah, usually... ////////////////////////

/*
1. This query searchs...
Person model for anyone with an occupation that includes host in it, such as hostess.
Where their last name is 'Ghost'
Where their age is greater than 17 and less than 66
where their likes Array includes vaporizing or talking
limited to 10 results
sorted by occupation (decending?)
producing only that model's name and occupation fields
with a callback function executed
*/

 const express = require('express')
const app = require('liquid-express-views')(express())

app.get('/' , (req,res)=>{
    Vampires.find().then((vamps)=>{
        res.render('index', {
            vampireList: vamps
        })
    })
})

app.listen(3000,()=>{
    console.log('Server on')
}) 