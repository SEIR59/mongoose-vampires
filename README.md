# Mongoose Vampires

For this lab, you will be using some of the mongoose commands that you learned today and you will be **reading the documents** to find **new** queries to complete the following activities. Researching queries and implementing them is a big part of this lab!

![mongoose](https://s-media-cache-ak0.pinimg.com/564x/ee/b7/a9/eeb7a99383582d53e65ffcc0e4a225bd.jpg)

# Resources
Utilize the following resources to research the commands you will need:
- Your notes from today
- Mongoose Documentation
- Google to find Stack Overflow articles and more

# Setup
1. create a folder `mongoose_vampires`
2. in the folder create an npm project `npm init -y`
3. install mongoose
4. establish a connection like you did in todays lecture


# The Exercise

## Building a Schema

Lets design a schema using mongoose and then use it to create some documents and eventually query for those documents.


Our vampire collection will look something like this:

``` javascript
var vampire = {
  {name: 'Chocula', required: true},
  title: 'Count',
  {hair_color: 'brown', default: 'blonde'},
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal','marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}
```

1. Build a vampire **schema** and **model** that matches the object above inside the `vampires.js` file

1. Go to the Mongoose documentation to learn more about validations and defaults: http://mongoosejs.com/docs/api.html

1. The **name field is required**, so make sure that the schema accommodates for that.

1. Also, **no vampire will have less than 0 victims**, so add that into the schema as a validation.

1. Lastly, set the **default value of the hair color to blonde**.



## Inserting Seed Data Using Mongoose

Insert into the database using **create** method:

```js
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
```

### Add the vampire data that we gave you

1. Write this command and run it **ONCE** in `app.js` - once you are done, comment it out or else every time you run it it will make duplicates of your data.

```javascript
Vampire.insertMany(seedData)
.then((data) =>  {console.log(data)}
.catch((error)=>{console.log(error)}
.finally(()=>{db.close()})
```
1. remember run  your file with `node app.js`

### Add some new vampire data

1. Using the create method, create 4 new vampires with any qualities that you like two should be male and two should be female.


## Querying
### Select by comparison

Write a different query for each of the following:

1. Find all the vampires that that are females
{
    _id: ObjectId("62acba7566411825cb2ce03e"),
    name: 'Brynlin Curry',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'jiu jitsu', 'setting off fire alarms', 'badoogaler alerts' ],
    location: 'Austin, Texas',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce03f"),
    name: 'Klahn',
    hair_color: 'white',
    eye_color: 'brown',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [ 'fetch', 'eating poop', 'lurking', 'spins' ],
    location: 'Lagrange, Ohio',
    gender: 'f',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce042"),
    name: 'Elizabeth Bathory ',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'virgin blood', 'fancy cloaks', 'frilly collars' ],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04a"),
    name: 'Persephone Bourignon',
    hair_color: 'red',
    eye_color: 'green',
    dob: ISODate("1801-06-17T20:43:36.000Z"),
    loves: [ 'wine', 'fancy cloaks', 'appearing innocent' ],
    location: 'Paris, France',
    gender: 'f',
    victims: 450,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  }
]
2. have greater than 500 victims
app> db.vampires.find({victims: {$gt: 500}})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03c"),
    name: 'Dan B',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1990-12-21T15:12:00.000Z"),
    loves: [ 'dogs', 'jiujitsu' ],
    location: 'Lagrange, Ohio, US',
    gender: 'm',
    victims: 10000000,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce03e"),
    name: 'Brynlin Curry',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'jiu jitsu', 'setting off fire alarms', 'badoogaler alerts' ],
    location: 'Austin, Texas',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce041"),
    name: 'Dracula',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("0937-01-24T18:50:36.000Z"),
    loves: [
      'Winona Ryder',
      'top hats',
      'fancy cloaks',
      'handlebar   mustaches'
    ],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce042"),
    name: 'Elizabeth Bathory ',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'virgin blood', 'fancy cloaks', 'frilly collars' ],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce046"),
    name: 'Armand',
    hair_color: 'red',
    eye_color: 'brown',
    dob: ISODate("1481-07-01T16:32:36.000Z"),
    loves: [ 'theatre', 'painting', 'velvet robes', 'being tragic' ],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce047"),
    name: 'Santino',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1465-07-01T16:32:36.000Z"),
    loves: [ 'trickery', 'vampiric cults', 'fancy cloaks' ],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  }
]
3. have fewer than or equal to 150 victims
app> db.vampires.find({victims: {$lte: 150}})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03d"),
    name: 'Dave',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1901-02-01T07:01:00.000Z"),
    loves: [
      'abusing power/ spying',
      'making family members uncomfortable in thier time of need',
      'great person to others',
      'mustaches'
    ],
    location: 'Lagrange, OH',
    gender: 'm',
    victims: 1,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce040"),
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1971-03-13T13:47:00.000Z"),
    loves: [ 'cereal', 'marshmallows' ],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce044"),
    name: 'Louis de Pointe du Lac',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1766-07-04T07:51:36.000Z"),
    loves: [ 'brooding', 'Claudia', 'staring longingly into the   distance' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
4. have a victim count is not equal to 210234
app> db.vampires.find({victims: {$ne: 210234}})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03c"),
    name: 'Dan B',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1990-12-21T15:12:00.000Z"),
    loves: [ 'dogs', 'jiujitsu' ],
    location: 'Lagrange, Ohio, US',
    gender: 'm',
    victims: 10000000,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce03d"),
    name: 'Dave',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1901-02-01T07:01:00.000Z"),
    loves: [
      'abusing power/ spying',
      'making family members uncomfortable in thier time of need',
      'great person to others',
      'mustaches'
    ],
    location: 'Lagrange, OH',
    gender: 'm',
    victims: 1,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce03e"),
    name: 'Brynlin Curry',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'jiu jitsu', 'setting off fire alarms', 'badoogaler alerts' ],
    location: 'Austin, Texas',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce03f"),
    name: 'Klahn',
    hair_color: 'white',
    eye_color: 'brown',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [ 'fetch', 'eating poop', 'lurking', 'spins' ],
    location: 'Lagrange, Ohio',
    gender: 'f',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce040"),
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1971-03-13T13:47:00.000Z"),
    loves: [ 'cereal', 'marshmallows' ],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce041"),
    name: 'Dracula',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("0937-01-24T18:50:36.000Z"),
    loves: [
      'Winona Ryder',
      'top hats',
      'fancy cloaks',
      'handlebar   mustaches'
    ],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce042"),
    name: 'Elizabeth Bathory ',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'virgin blood', 'fancy cloaks', 'frilly collars' ],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce043"),
    name: 'Lestat',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [
      'frilly shirtsleeves',
      'frilly collars',
      'lurking in   rotting mansions',
      'Louis'
    ],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce044"),
    name: 'Louis de Pointe du Lac',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1766-07-04T07:51:36.000Z"),
    loves: [ 'brooding', 'Claudia', 'staring longingly into the   distance' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce046"),
    name: 'Armand',
    hair_color: 'red',
    eye_color: 'brown',
    dob: ISODate("1481-07-01T16:32:36.000Z"),
    loves: [ 'theatre', 'painting', 'velvet robes', 'being tragic' ],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce047"),
    name: 'Santino',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1465-07-01T16:32:36.000Z"),
    loves: [ 'trickery', 'vampiric cults', 'fancy cloaks' ],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce049"),
    name: 'Edward Cullen',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1901-07-20T06:57:00.000Z"),
    loves: [ 'brooding', 'diamond skin', 'calling people spider   monkeys' ],
    location: 'Chicago, Illinois, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04a"),
    name: 'Persephone Bourignon',
    hair_color: 'red',
    eye_color: 'green',
    dob: ISODate("1801-06-17T20:43:36.000Z"),
    loves: [ 'wine', 'fancy cloaks', 'appearing innocent' ],
    location: 'Paris, France',
    gender: 'f',
    victims: 450,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04e"),
    name: 'Barnabas Spenser',
    title: 'Osiris of Sewer Rats',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1984-07-03T18:12:00.000Z"),
    loves: [ 'being merry', 'being insane', 'card games' ],
    location: 'New York, New York, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
5. have greater than 150 AND fewer than 500 victims
{
    _id: ObjectId("62acba7566411825cb2ce03f"),
    name: 'Klahn',
    hair_color: 'white',
    eye_color: 'brown',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [ 'fetch', 'eating poop', 'lurking', 'spins' ],
    location: 'Lagrange, Ohio',
    gender: 'f',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce043"),
    name: 'Lestat',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [
      'frilly shirtsleeves',
      'frilly collars',
      'lurking in   rotting mansions',
      'Louis'
    ],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04a"),
    name: 'Persephone Bourignon',
    hair_color: 'red',
    eye_color: 'green',
    dob: ISODate("1801-06-17T20:43:36.000Z"),
    loves: [ 'wine', 'fancy cloaks', 'appearing innocent' ],
    location: 'Paris, France',
    gender: 'f',
    victims: 450,
    __v: 0
  }
]


### Select by exists or does not exist
Select all the vampires that:

1. have a key of 'title'
db.vampires.find({title: {$exists: true}})
[
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04e"),
    name: 'Barnabas Spenser',
    title: 'Osiris of Sewer Rats',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1984-07-03T18:12:00.000Z"),
    loves: [ 'being merry', 'being insane', 'card games' ],
    location: 'New York, New York, US',
    gender: 'm',
    __v: 0
  }
]
app>
2. do not have a key of 'victims'
db.vampires.find({victims: {$exists: false}})
[
  {
    _id: ObjectId("62acba7566411825cb2ce049"),
    name: 'Edward Cullen',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1901-07-20T06:57:00.000Z"),
    loves: [ 'brooding', 'diamond skin', 'calling people spider   monkeys' ],
    location: 'Chicago, Illinois, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04e"),
    name: 'Barnabas Spenser',
    title: 'Osiris of Sewer Rats',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1984-07-03T18:12:00.000Z"),
    loves: [ 'being merry', 'being insane', 'card games' ],
    location: 'New York, New York, US',
    gender: 'm',
    __v: 0
  }
]
app>
3. have a title AND no victims
db.vampires.find({ $and: [ { title: {exists: true}}, { victims:{$lt: 1}}]})
4. have victims AND the victims they have are greater than 1000
db.vampires.find({ $and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03c"),
    name: 'Dan B',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1990-12-21T15:12:00.000Z"),
    loves: [ 'dogs', 'jiujitsu' ],
    location: 'Lagrange, Ohio, US',
    gender: 'm',
    victims: 10000000,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce041"),
    name: 'Dracula',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("0937-01-24T18:50:36.000Z"),
    loves: [
      'Winona Ryder',
      'top hats',
      'fancy cloaks',
      'handlebar   mustaches'
    ],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce046"),
    name: 'Armand',
    hair_color: 'red',
    eye_color: 'brown',
    dob: ISODate("1481-07-01T16:32:36.000Z"),
    loves: [ 'theatre', 'painting', 'velvet robes', 'being tragic' ],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce047"),
    name: 'Santino',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1465-07-01T16:32:36.000Z"),
    loves: [ 'trickery', 'vampiric cults', 'fancy cloaks' ],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  }
]


### Select with OR
Select all the vampires that:

1. are from New York, New York, US or New Orleans, Louisiana, US
app> db.vampires.find({ $or: [{location: {$eq: 'New York, New York, US'}}, {location: {$eq: 'New Orleans, Louisiana, US'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce044"),
    name: 'Louis de Pointe du Lac',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1766-07-04T07:51:36.000Z"),
    loves: [ 'brooding', 'Claudia', 'staring longingly into the   distance' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04e"),
    name: 'Barnabas Spenser',
    title: 'Osiris of Sewer Rats',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1984-07-03T18:12:00.000Z"),
    loves: [ 'being merry', 'being insane', 'card games' ],
    location: 'New York, New York, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
2. love brooding or being tragic
db.vampires.find({ $or: [{loves: {$eq: 'brooding'}}, {loves: {$eq: 'being tragic'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce044"),
    name: 'Louis de Pointe du Lac',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1766-07-04T07:51:36.000Z"),
    loves: [ 'brooding', 'Claudia', 'staring longingly into the   distance' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce046"),
    name: 'Armand',
    hair_color: 'red',
    eye_color: 'brown',
    dob: ISODate("1481-07-01T16:32:36.000Z"),
    loves: [ 'theatre', 'painting', 'velvet robes', 'being tragic' ],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce049"),
    name: 'Edward Cullen',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1901-07-20T06:57:00.000Z"),
    loves: [ 'brooding', 'diamond skin', 'calling people spider   monkeys' ],
    location: 'Chicago, Illinois, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
3. have more than 1000 victims or love marshmallows
 db.vampires.find({ $or: [{victims: {$gt: 1000}}, {loves: {$eq: 'marshmallows'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03c"),
    name: 'Dan B',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1990-12-21T15:12:00.000Z"),
    loves: [ 'dogs', 'jiujitsu' ],
    location: 'Lagrange, Ohio, US',
    gender: 'm',
    victims: 10000000,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce040"),
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1971-03-13T13:47:00.000Z"),
    loves: [ 'cereal', 'marshmallows' ],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce041"),
    name: 'Dracula',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("0937-01-24T18:50:36.000Z"),
    loves: [
      'Winona Ryder',
      'top hats',
      'fancy cloaks',
      'handlebar   mustaches'
    ],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce046"),
    name: 'Armand',
    hair_color: 'red',
    eye_color: 'brown',
    dob: ISODate("1481-07-01T16:32:36.000Z"),
    loves: [ 'theatre', 'painting', 'velvet robes', 'being tragic' ],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce047"),
    name: 'Santino',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1465-07-01T16:32:36.000Z"),
    loves: [ 'trickery', 'vampiric cults', 'fancy cloaks' ],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  }
]
app>
4. have red hair or green eyes
 db.vampires.find({$or: [{hair_color: {$eq: 'blonde'}}, {eye_color: {$eq: 'green'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce03c"),
    name: 'Dan B',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1990-12-21T15:12:00.000Z"),
    loves: [ 'dogs', 'jiujitsu' ],
    location: 'Lagrange, Ohio, US',
    gender: 'm',
    victims: 10000000,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce043"),
    name: 'Lestat',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [
      'frilly shirtsleeves',
      'frilly collars',
      'lurking in   rotting mansions',
      'Louis'
    ],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04a"),
    name: 'Persephone Bourignon',
    hair_color: 'red',
    eye_color: 'green',
    dob: ISODate("1801-06-17T20:43:36.000Z"),
    loves: [ 'wine', 'fancy cloaks', 'appearing innocent' ],
    location: 'Paris, France',
    gender: 'f',
    victims: 450,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04c"),
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: ISODate("1799-05-21T22:05:36.000Z"),
    loves: [ 'marshmallows', 'ribbons', 'being tragic' ],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567,
    __v: 0
  }
]
app>


### Select objects that match one of several values
Select all the vampires that:

1. love either frilly shirtsleeves or frilly collars
db.vampires.find({$or: [{loves: {$eq: 'frilly shirtsleeves'}}, {loves: {$eq: 'frilly collars'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce042"),
    name: 'Elizabeth Bathory ',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'virgin blood', 'fancy cloaks', 'frilly collars' ],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce043"),
    name: 'Lestat',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [
      'frilly shirtsleeves',
      'frilly collars',
      'lurking in   rotting mansions',
      'Louis'
    ],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
2. love brooding
db.vampires.find({$or: [{loves: {$eq: 'frilly shirtsleeves'}}, {loves: {$eq: 'frilly collars'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce042"),
    name: 'Elizabeth Bathory ',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1560-09-08T04:00:36.000Z"),
    loves: [ 'virgin blood', 'fancy cloaks', 'frilly collars' ],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce043"),
    name: 'Lestat',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1760-12-10T00:34:36.000Z"),
    loves: [
      'frilly shirtsleeves',
      'frilly collars',
      'lurking in   rotting mansions',
      'Louis'
    ],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app> db.vampires.find({loves: 'brooding'})
[
  {
    _id: ObjectId("62acba7566411825cb2ce044"),
    name: 'Louis de Pointe du Lac',
    hair_color: 'brown',
    eye_color: 'blue',
    dob: ISODate("1766-07-04T07:51:36.000Z"),
    loves: [ 'brooding', 'Claudia', 'staring longingly into the   distance' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce049"),
    name: 'Edward Cullen',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1901-07-20T06:57:00.000Z"),
    loves: [ 'brooding', 'diamond skin', 'calling people spider   monkeys' ],
    location: 'Chicago, Illinois, US',
    gender: 'm',
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04d"),
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: ISODate("1976-07-18T23:18:00.000Z"),
    loves: [ 'brooding', 'frilly shirtsleeves' ],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112,
    __v: 0
  }
]
app>
3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
db.vampires.find({$or: [{loves: {$eq: 'appearing innocent'}}, {loves: {$eq: 'trickery'}}, {loves: {$eq: 'lurking in rotting mansions'}}, {loves: {$eq: 'R&B music'}}]})
[
  {
    _id: ObjectId("62acba7566411825cb2ce045"),
    name: 'Claudia',
    hair_color: 'blonde',
    eye_color: 'blue',
    dob: ISODate("1793-03-07T14:20:36.000Z"),
    loves: [ 'doll babies', 'ribbons', 'appearing innocent', '  trickery' ],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce047"),
    name: 'Santino',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: ISODate("1465-07-01T16:32:36.000Z"),
    loves: [ 'trickery', 'vampiric cults', 'fancy cloaks' ],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce048"),
    name: 'Akasha',
    title: 'Queen of the Damned',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("-008000-07-01T16:32:36.000Z"),
    loves: [
      'eating hearts',
      'bathing in roses',
      'elaborate   headdresses',
      'R&B music'
    ],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04a"),
    name: 'Persephone Bourignon',
    hair_color: 'red',
    eye_color: 'green',
    dob: ISODate("1801-06-17T20:43:36.000Z"),
    loves: [ 'wine', 'fancy cloaks', 'appearing innocent' ],
    location: 'Paris, France',
    gender: 'f',
    victims: 450,
    __v: 0
  },
  {
    _id: ObjectId("62acba7566411825cb2ce04b"),
    name: 'René Tremblay',
    hair_color: 'brown',
    eye_color: 'green',
    dob: ISODate("1922-03-08T11:03:00.000Z"),
    loves: [ 'frilly shirtsleeves', 'trickery', 'card games' ],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134,
    __v: 0
  }
]
app>
4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
db.vampires.find({$and: [{loves: {$eq: 'fancy cloaks'}}, {$or: [{$nin: {loves: {$eq: 'top hats'}}}, {$nin: {loves: {$eq: 'virgin blood'}}}]}}]})


### Negative Selection
Select all vampires that:

1. love ribbons but do not have brown eyes
 db.vampires.find({$and: [{love: {$eq: 'ribbons'}}, {eye_color: {$ne: 'brown'}}]})
2. are not from Rome
 db.vampires.find({location: {$ne: 'Rome, Italy'}})

3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
db.vampires.find({$or: [{loves: {$ne: 'fancy cloaks'}}, {loves: {$ne: 'frilly shirtsleeves'}}, {loves: {$ne: 'appearing innocent'}}, {loves: {$ne: 'being tragic'}}, {loves: {$ne: 'brooding'}}]})
5. have not killed more than 200 people
 db.vampires.find({victims: {$lte: 200}})

## Replace (this one may require some additional google foo. Hint: fields may need to be updated in schema)

1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
 db.vampires.update({name: 'Claudia'}, {$set:{name: 'Eve'}})
2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'


## Update

1. Update 'Guy Man' to have a gender of 'f'
db.vampires.updateOne({name: 'guy man'}, {$set: {gender: 'f'}})
2. Update 'Eve' to have a gender of 'm'
db.vampires.update({name: 'Eve'}, {$set: {gender: 'm'}})
3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
db.vampires.update({name: 'Guy Man'}, {$set: {"hates": ['clothes', 'jobs']}})
4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
db.vampires.update({name: 'Guy Man'}, {$push: {hates: ['alarm clocks', 'jackalopes']}})
5. Rename 'Eve's' name field to 'moniker'
db.vampires.update({name: 'Eve'}, {$set: {name: 'moniker'}})
6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".
db.vampires.updateMany({gender: 'f'}, {$set: {gender: 'fems'}})


## Remove

1. Remove a single document wherein the hair_color is 'brown'
 db.vampires.deleteOne({hair_color: 'brown'})
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
<hr>db.vampires.deleteMany({eye_color: 'blue'})


## Hungry for more

1. Check out Mongoose's Query Builder!

```js
Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(callback);
```

1. Write what that does in English: `Find a person whose occupation is ...`

2. Make an index route that will res.send the json of all the data in our database.

3. If number 1 was easy, try to connect your database to your application and show a proper index page that displays your vampire data. If this is also easy, create a show page as well where you are showing individual vampire data.

4. Have extra time? Try out a few more problems on [CodeWars](https://www.codewars.com/)
