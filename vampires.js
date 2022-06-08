////////////////////////////////////////////////
// Our Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make vampire schema

const vampireSchema = new Schema({
    name: { type: String, require: true },
    title: 'String',
    hair_color: { type: String, require: "Blonde" },
    eye_color: 'String',
    dob: { type: Date },
    loves: Array,
    location: 'String',
    gender: 'String',
    victims: { type: Number, min: 0 },
})
// make vampire model
const Vampire = model("Vampire", vampireSchema);



modules.exports = Vampire