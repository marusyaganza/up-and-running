import { SubscriptionResolvers } from "../generated/graphql";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

export const subscriptionResolvers: SubscriptionResolvers = {
  flightScheduled: {
    // @ts-ignore
    subscribe: () => pubsub.asyncIterator(["FLIGHT_SCHEDULED"]),
  },
};
