import { Schema, model } from "mongoose";
import { IPlanet } from "../../types/types";

const planetSchema = new Schema<IPlanet>({
  name: { type: String, required: true, unique: true },
});

export const Planet = model<IPlanet>("planet", planetSchema);
