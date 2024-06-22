import { Schema, model } from "mongoose";
import { StarshipType } from "./starships.types";

const starshipSchema = new Schema<StarshipType>({
  name: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  passengers: String,
});

export const Starship = model<StarshipType>("starship", starshipSchema);
