import { Schema, model } from "mongoose";
import { PlanetType } from "./planets.types";

const planetSchema = new Schema<PlanetType>({
  name: { type: String, required: true, unique: true },
});

export const Planet = model<PlanetType>("planet", planetSchema);
