import { Planet } from "./planets.mongo";
import { IPlanet } from "../../types/types";

export async function getPlanets(): Promise<IPlanet[]> {
  const planets = await Planet.find();
  return planets || [];
}

export const Planets = {
  getPlanets,
};
