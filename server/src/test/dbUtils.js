const { connect, connection } = require("mongoose");
const Planet = require("../models/planets/planets.mongo");
const Starship = require("../models/starships/starships.mongo");
const Flight = require("../models/flights/flights.mongo");

const { mockFlights, mockPlanets, mockStarships } = require("./mocks");

async function seedDb() {
  await Planet.insertMany(mockPlanets);
  await Starship.insertMany(mockStarships);
  await Flight.insertMany(mockFlights);
}

async function connectToDb() {
  try {
    await connect("mongodb://localhost:27017/test");
    await seedDb();
  } catch (err) {
    console.error("mongoose err, make sure you run the DB", err);
  }
}

async function disconnectFromDb() {
  try {
    await connection.close();
  } catch (err) {
    console.error("mongoose close connection error", err);
  }
}

async function dropDb() {
  try {
    await connection.db.dropDatabase();
  } catch (err) {
    console.error("mongoose drop db error", err);
  }
}

module.exports = {
  connectToDb,
  disconnectFromDb,
  dropDb,
  seedDb,
};
