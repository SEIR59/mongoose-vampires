///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Vampire = require('./vampire')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

db.on('open', () => {
	// array of starter fruits
	const vampire = {
        name: 'Chocula',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
    }

	// when we seed data, there are a few steps involved
	// delete all the data that already exists(will only happen if data exists)
	Vampire.remove({})
        .then(deletedVampires => {
		    console.log('this is what remove returns', deletedVampires)
		    // then we create with our seed data
            Vampire.create(startVampires)
                .then((data) => {
                    console.log('Here are the new seed vampires', data)
                    db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close()
                })
	    })
        .catch(error => {
            console.log(error)
            db.close()
        })
	// then we can send if we want to see that data
})