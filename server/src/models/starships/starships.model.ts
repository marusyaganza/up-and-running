import { Starship } from "./starships.mongo";
import { StarshipType } from "./starships.types";

export async function getStarships(): Promise<StarshipType[]> {
  const starships = await Starship.find();
  return starships || [];
}
