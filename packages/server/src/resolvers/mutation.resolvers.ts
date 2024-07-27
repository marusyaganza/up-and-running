import { GraphQLError } from "graphql";
import { MutationResolvers } from "../generated/graphql";

import { IContext } from "../types/types";

export const mutationResolvers: MutationResolvers<IContext> = {
  addNewFlight: async (_, { input }, { model }) => {
    const flight = await model.Flights.scheduleFlight(input);
    return flight;
  },
  cancelFlight: async (_, { id }, { model }) => {
    const flight = await model.Flights.cancelFlight(id);
    if (!flight) {
      throw new GraphQLError(`Cancelling flight ${id} failed`);
    }
    return flight;
  },
  updateFlight: async (_, { id, input }, { model }) => {
    const flight = await model.Flights.updateFlight(id, input);
    if (!flight) {
      throw new GraphQLError(`Updating flight ${id} failed`);
    }
    return flight;
  },
};
