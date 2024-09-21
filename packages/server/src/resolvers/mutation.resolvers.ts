import { GraphQLError } from "graphql";
import { MutationResolvers, Role } from "../generated/graphql";

import { IContext } from "../types/types";
import { authorized } from "../auth";

export const mutationResolvers: MutationResolvers<IContext> = {
  addNewFlight: authorized(async (_, { input }, { model }) => {
    const flight = await model.Flights.scheduleFlight(input);
    return flight;
  }, Role.Admin),

  cancelFlight: authorized(async (_, { id }, { model }) => {
    const flight = await model.Flights.cancelFlight(id);
    if (!flight) {
      throw new GraphQLError(`Cancelling flight ${id} failed`);
    }
    return flight;
  }, Role.Admin),

  updateFlight: authorized(async (_, { id, input }, { model }) => {
    const flight = await model.Flights.updateFlight(id, input);
    if (!flight) {
      throw new GraphQLError(`Updating flight ${id} failed`);
    }
    return flight;
  }, Role.Admin),

  login: async (_, { input }, { model }) => {
    const user = await model.Users.authenticateUser(input);
    console.log("user", user);
    return user;
  },

  signUp: async (_, { input }, { model }) => {
    const user = await model.Users.createUser(input);
    console.log("user", user);
    return user;
  },
};
