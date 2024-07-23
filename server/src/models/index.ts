import { Flights } from "./flights/flights.model";
import { Starships } from "./starships/starships.model";
import { Planets } from "./planets/planets.model";

export const model = { Flights, Starships, Planets };
export type ModelType = typeof model;
