import { IPlanetData, IStarshipData } from "../types/types";
import {
  assertIsTypedArray,
  isStarshipData,
  isPlanetData,
} from "../types/type-guards";
const PLANETS_API = process.env.PLANETS_API || "";
const STARSHIP_API = process.env.STARSHIP_API || "";

/**Fetch planets from API */
export async function fetchPlanets(): Promise<IPlanetData[]> {
  let planets: IPlanetData[] = [];

  await fetch(PLANETS_API)
    .then((res) => res.json())
    .then((json: unknown) => {
      assertIsTypedArray(json, isPlanetData);
      planets = json.map((planet: IPlanetData) => ({ name: planet.name }));
    })
    .catch((error) => console.error(error));

  return planets;
}

/**Fetch starships from API */
export async function fetchStarships(): Promise<IStarshipData[]> {
  let starships: IStarshipData[] = [];

  await fetch(STARSHIP_API)
    .then((res) => res.json())
    .then((json: unknown) => {
      assertIsTypedArray(json, isStarshipData);
      starships = json.map((starship: IStarshipData) => ({
        model: starship.model,
        name: starship.name,
        passengers: starship.passengers,
      }));
    })
    .catch((error) => console.error(error));

  return starships;
}
