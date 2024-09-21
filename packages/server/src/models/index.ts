import { Flights } from "./flights/flights.model";
import { Starships } from "./starships/starships.model";
import { Planets } from "./planets/planets.model";
import { Users } from "./user/user.model";

export const model = { Flights, Starships, Planets, Users };
export type ModelType = typeof model;
