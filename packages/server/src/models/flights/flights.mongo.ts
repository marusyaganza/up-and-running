import { Schema, model } from "mongoose";
import { IFlight } from "../../types/types";

const flightSchema = new Schema<IFlight>(
  {
    destination: { type: String, required: true },
    origin: { type: String, required: true },
    starship: { type: String, required: true },
    date: { type: Date, required: true },
    isCancelled: { type: Boolean, default: false },
  },
  { toObject: { virtuals: true } }
);

flightSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export const Flight = model<IFlight>("flight", flightSchema);
