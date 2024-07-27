import { connect } from "mongoose";
import { Planet } from "../models/planets/planets.mongo";
import { Starship } from "../models/starships/starships.mongo";

import { fetchStarships, fetchPlanets } from "./fetchData";

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

export async function initDB(callback: () => void) {
  try {
    await connect(DB_URL);
    await seedDB();
    callback();
  } catch (err) {
    console.error("mongoose error", err);
  }
}
