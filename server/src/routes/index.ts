import { Router } from "express";
import planetsRouter from "./planets/planets.router";
import starshipsRouter from "./starships/starships.router";
import flightsFouter from "./flights/flights.router";

export enum URLS {
  Planets = "planets",
  Starships = "starships",
  Flights = "flights",
}

interface RouteType {
  url: string;
  router: Router;
}

export const ROUTES: Record<URLS, RouteType> = {
  [URLS.Planets]: {
    url: "/data/planets",
    router: planetsRouter,
  },
  [URLS.Starships]: {
    url: "/data/starships",
    router: starshipsRouter,
  },
  [URLS.Flights]: {
    url: "/data/flights",
    router: flightsFouter,
  },
};

export const Routers = {
  planetsRouter,
  starshipsRouter,
  flightsFouter,
};
