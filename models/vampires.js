const { Schema } = require("mongoose");
const mongoose = require("./connection");

const vampireSchema = new Schema(
  {
    name: { type: String },
    title: { type: String },
    hair_color: { type: String },
    eye_color: { type: String },
    dob: { type: String },
    loves: [String],
    location: { type: String },
    gender: { type: String },
    victims: { type: Ineger },
  },
  { timestamps: true }
);

const Vampires = model("Vampires", vampireSchema);

module.exports = Vampires;
