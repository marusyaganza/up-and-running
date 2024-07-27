import { Flight } from "./flights.mongo";
import {
  FlightInput,
  UpdateFlightInput,
  Flight as FlightType,
} from "../../generated/graphql";
import { Document } from "mongoose";

function formatDate<T extends { date: Date; toObject: Document["toObject"] }>(
  data: T
) {
  const dataObject = data.toObject();
  return { ...dataObject, date: dataObject.date.toDateString() };
}

function formatDateInArray<
  T extends { date: Date; toObject: Document["toObject"] }
>(arr: T[]) {
  return arr.map(formatDate);
}

export async function getFlights(): Promise<FlightType[]> {
  const flights = await Flight.find().sort("-date").exec();
  return formatDateInArray(flights);
}

export async function getUpcomingFlights(): Promise<FlightType[]> {
  const flights = await Flight.find({
    $and: [{ date: { $gte: new Date() }, isCancelled: false }],
  })
    .sort("-date")
    .exec();
  return formatDateInArray(flights);
}

export async function getPastFlights(): Promise<FlightType[]> {
  const flights = await Flight.find({
    $or: [
      {
        date: { $lt: new Date() },
      },
      { isCancelled: true },
    ],
  })
    .sort("-date")
    .exec();
  return formatDateInArray(flights);
}

export async function updateFlight(
  id: string,
  update: UpdateFlightInput
): Promise<FlightType | null> {
  const flight = await Flight.findByIdAndUpdate(id, update, {
    new: true,
  });

  return flight ? formatDate(flight) : flight;
}

export async function scheduleFlight(input: FlightInput): Promise<FlightType> {
  const flight = await Flight.create(input);
  return flight ? formatDate(flight) : flight;
}

export async function cancelFlight(
  id: string
): Promise<FlightType | undefined> {
  const flight = await Flight.findByIdAndUpdate(
    id,
    { isCancelled: true },
    {
      new: true,
    }
  );
  return flight ? formatDate(flight) : flight;
}

export const Flights = {
  getFlights,
  getUpcomingFlights,
  getPastFlights,
  updateFlight,
  scheduleFlight,
  cancelFlight,
};
