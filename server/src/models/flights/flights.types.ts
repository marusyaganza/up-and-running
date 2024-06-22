import { ObjectId } from "mongoose";

export interface FlightInputType {
  destination: string;
  origin: string;
  starship: string;
  date: Date;
  isCancelled: boolean;
}

export interface FlightType extends FlightInputType {
  _id: ObjectId;
}
