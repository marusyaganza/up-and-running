const mongoose = require("mongoose");
const Planet = require("../models/planets/planets.mongo");
const Starship = require("../models/starships/starships.mongo");

const { fetchStarships, fetchPlanets } = require("./fetchData");

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";

async function seedDB() {
  const starshipsNum = await Starship.countDocuments();
  if (!starshipsNum) {
    const starships = await fetchStarships();
    await Starship.insertMany(starships);
  }
  const planetsNum = await Planet.countDocuments();
  if (!planetsNum) {
    const planets = await fetchPlanets();
    await Planet.insertMany(planets);
  }
}

async function initDB(callback) {
  try {
    await mongoose.connect(DB_URL);
    await seedDB();
    callback();
  } catch (err) {
    console.error("mongoose error", err);
  }
}

module.exports = { initDB };
