import { connect, connection } from "mongoose";
import { Planet } from "../models/planets/planets.mongo";
import { Starship } from "../models/starships/starships.mongo";
import { Flight } from "../models/flights/flights.mongo";

import { mockData } from "./mocks";

export async function seedDb() {
  await Planet.insertMany(mockData.mockPlanets);
  await Starship.insertMany(mockData.mockStarships);
  await Flight.insertMany(mockData.mockFlights);
}

export async function connectToDb() {
  try {
    await connect("mongodb://localhost:27017/test");
    await seedDb();
  } catch (err) {
    console.error("mongoose err, make sure you run the DB", err);
  }
}

export async function disconnectFromDb() {
  try {
    await connection.close();
  } catch (err) {
    console.error("mongoose close connection error", err);
  }
}

export async function dropDb() {
  try {
    await connection?.db?.dropDatabase();
  } catch (err) {
    console.error("mongoose drop db error", err);
  }
}
