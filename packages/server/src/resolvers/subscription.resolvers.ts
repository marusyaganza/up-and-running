import { SubscriptionResolvers } from "../generated/graphql";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

export const subscriptionResolvers: SubscriptionResolvers = {
  flightScheduled: {
    // @ts-expect-error: it should work according to the docs https://www.apollographql.com/docs/apollo-server/data/subscriptions#switching-from-subscriptions-transport-ws
    subscribe: () => pubsub.asyncIterator(["FLIGHT_SCHEDULED"]),
  },
};
