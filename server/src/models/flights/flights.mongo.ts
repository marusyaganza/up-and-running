import { Schema, model } from "mongoose";
import { FlightType } from "./flights.types";

const flightSchema = new Schema<FlightType>({
  destination: { type: String, required: true },
  origin: { type: String, required: true },
  starship: { type: String, required: true },
  date: { type: Date, required: true },
  isCancelled: { type: Boolean, default: false },
});

export const Flight = model<FlightType>("flight", flightSchema);
