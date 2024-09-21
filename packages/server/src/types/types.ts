import { Role } from "../generated/graphql";
import { ModelType } from "../models";

export interface IPlanetData {
  name: string;
}

export interface IStarshipData {
  model: string;
  name: string;
  passengers: number;
}

export interface IStarshipType {
  name: string;
  model: string;
  passengers: string;
  id: string;
}

export interface IPlanet {
  name: string;
  id: string;
}

export interface IFlight {
  destination: string;
  origin: string;
  starship: string;
  date: Date;
  isCancelled: boolean;
  id: string;
}

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role?: Role;
}

export interface IContext {
  model: ModelType;
  user?: ITokenData;
}

export interface IAutenticatedContext {
  model: ModelType;
  user: ITokenData;
}

export interface ITokenData {
  id: string;
}
