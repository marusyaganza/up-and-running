import { GraphQLError } from "graphql";
import { createToken } from "../../auth";
import {
  AuthUser,
  LoginInput,
  Role,
  SignUpInput,
} from "../../generated/graphql";
import { IUser } from "../../types/types";
import { User } from "./user.mongo";
import bcrypt from "bcrypt";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 5;

export async function getUser(id: string): Promise<IUser | null> {
  const user = await User.findById(id);
  return user;
}

export async function createUser(input: SignUpInput): Promise<AuthUser> {
  const password = await bcrypt.hash(input.password, SALT_ROUNDS);

  const role = input?.role || Role.User;

  const user = await User.create({ ...input, password, role });

  const token = createToken({ id: user.id });

  return { ...user.toObject(), token };
}

export async function authenticateUser({
  email,
  password,
}: LoginInput): Promise<AuthUser> {
  const user = await User.findOne({ email });

  if (!user) {
    throw new GraphQLError("Authentification failed");
  }

  const isValid = bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new GraphQLError("Authentification failed");
  }

  const token = createToken({ id: user.id });

  return { ...user.toObject(), token };
}

export const Users = {
  getUser,
  createUser,
  authenticateUser,
};
