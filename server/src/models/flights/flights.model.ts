import { Flight } from "./flights.mongo";
import { FlightType, FlightInputType } from "./flights.types";

export async function getFlights(): Promise<FlightType[]> {
  const flights = await Flight.find().sort("-date").exec();
  return flights;
}

export async function getUpcomingFlights(): Promise<FlightType[]> {
  const flights = await Flight.find({
    $and: [{ date: { $gte: new Date() }, isCancelled: false }],
  })
    .sort("-date")
    .exec();
  return flights;
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
  return flights;
}

export async function updateFlight(
  id: string,
  update: Partial<FlightInputType>
): Promise<FlightType | null> {
  const flight = await Flight.findByIdAndUpdate(id, update, {
    new: true,
  });
  return flight;
}

export async function scheduleFlight(
  input: FlightInputType
): Promise<FlightType> {
  const flight = await Flight.create(input);
  return flight;
}

export async function cancelFlight(id: string): Promise<FlightType | null> {
  const flight = await Flight.findByIdAndUpdate(
    id,
    { isCancelled: true },
    {
      new: true,
    }
  );
  return flight;
}
