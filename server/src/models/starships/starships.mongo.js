const { Schema, model } = require("mongoose");

const starshipSchema = new Schema({
  name: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  passengers: String,
});

const Starship = model("starship", starshipSchema);

module.exports = Starship;
