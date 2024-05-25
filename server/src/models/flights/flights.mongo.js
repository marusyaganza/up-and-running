const { Schema, model } = require("mongoose");

const flightSchema = new Schema({
  destination: { type: String, required: true },
  origin: { type: String, required: true },
  starship: { type: String, required: true },
  date: { type: Date, required: true },
  isCancelled: { type: Boolean, default: false },
});

const Flight = model("flight", flightSchema);

module.exports = Flight;
