import jwt from "jsonwebtoken";
import { ResolverFn, Role } from "./generated/graphql";
import { GraphQLError } from "graphql";
import { IContext, IAutenticatedContext, ITokenData } from "./types/types";
import { isAutenticatedContext, isITokenData } from "./types/type-guards";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export function getUserFromToken(token: string): ITokenData | undefined {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    if (!isITokenData(user)) {
      throw new Error("invalid data in JWT token");
    }
    return user;
  } catch (e) {
    console.error("error", e);
    return;
  }
}

export function createToken(data: ITokenData) {
  return jwt.sign(data, JWT_SECRET);
}

export function authenticated<TResult, TParent, TArgs>(
  next: ResolverFn<TResult, TParent, IAutenticatedContext, TArgs>
): ResolverFn<TResult, TParent, IContext, TArgs> {
  return async function (parent, args, context, info) {
    if (!isAutenticatedContext(context)) {
      throw new GraphQLError("Login to perform this operation");
    }

    const existingUser = await context.model.Users.getUser(context.user.id);

    if (!existingUser) {
      throw new GraphQLError("Login to perform this operation");
    }
    return next(parent, args, context, info);
  };
}

export function authorized<TResult, TParent, TArgs>(
  next: ResolverFn<TResult, TParent, IAutenticatedContext, TArgs>,
  role: Role
): ResolverFn<TResult, TParent, IContext, TArgs> {
  return async function (parent, args, context, info) {
    if (!isAutenticatedContext(context)) {
      throw new GraphQLError("Login to perform this operation");
    }

    const existingUser = await context.model.Users.getUser(context.user.id);

    if (!existingUser || existingUser?.role !== role) {
      throw new GraphQLError("Login to perform this operation");
    }

    return next(parent, args, context, info);
  };
}
