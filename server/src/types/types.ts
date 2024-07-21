export interface IFlight {
  destination: string;
  origin: string;
  starship: string;
  date: string | number;
  isCancelled: boolean;
  _id: string;
}

export interface IPlanetData {
  name: string;
}

export interface IStarshipData {
  model: string;
  name: string;
  passengers: number;
}
