import { Planet } from "./planets.mongo";
import { PlanetType } from "./planets.types";

export async function getPlanets(): Promise<PlanetType[]> {
  const planets = await Planet.find();
  return planets || [];
}
