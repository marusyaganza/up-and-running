import { queryResolvers } from "./query.resolvers";
import { mutationResolvers } from "./mutation.resolvers";
import { subscriptionResolvers } from "./subscription.resolvers";

export const resolvers = {
  Query: { ...queryResolvers },
  Mutation: { ...mutationResolvers },
  Subscription: { ...subscriptionResolvers },
};
