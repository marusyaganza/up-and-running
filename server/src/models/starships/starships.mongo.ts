import { Schema, model } from "mongoose";
import { IStarshipType } from "../../types/types";

const starshipSchema = new Schema<IStarshipType>({
  name: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  passengers: String,
});

export const Starship = model<IStarshipType>("starship", starshipSchema);
