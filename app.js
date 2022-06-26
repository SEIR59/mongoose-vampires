const Vampire = require("vampires");

Vampire.insertMany(seedData)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });
