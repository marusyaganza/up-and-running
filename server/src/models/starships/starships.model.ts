import { Starship } from "./starships.mongo";
import { IStarshipType } from "../../types/types";

export async function getStarships(): Promise<IStarshipType[]> {
  const starships = await Starship.find();
  return starships || [];
}

export const Starships = {
  getStarships,
};
