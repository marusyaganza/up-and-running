import { EVENTS } from "../constants/events";
import { SubscriptionResolvers } from "../generated/graphql";
import { pubsub } from "../pubsub";

export const subscriptionResolvers: SubscriptionResolvers = {
  flightScheduled: {
    // @ts-expect-error: it should work according to the docs https://www.apollographql.com/docs/apollo-server/data/subscriptions#switching-from-subscriptions-transport-ws
    subscribe: () => pubsub.asyncIterator([EVENTS.FLIGHT_SCHEDULED]),
  },
};
