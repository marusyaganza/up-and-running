import { QueryResolvers } from "../generated/graphql";
import {
  getFlights,
  getPastFlights,
  getUpcomingFlights,
} from "../models/flights/flights.model";

import { getPlanets } from "../models/planets/planets.model";
import { getStarships } from "../models/starships/starships.model";

import { IContext } from "../types/types";

export const queryResolvers: QueryResolvers<IContext> = {
  flights: async (_, { filter }) => {
    if (filter?.upcoming) {
      const flights = await getUpcomingFlights();
      return flights;
    }

    if (filter?.past) {
      const flights = await getPastFlights();
      return flights;
    }
    const flights = await getFlights();
    return flights;
  },
  planets: async () => {
    const planets = await getPlanets();
    return planets.map((starship) => starship.name);
  },
  starships: async () => {
    const starships = await getStarships();
    return starships.map((starship) => starship.model);
  },
};
