export interface Flight {
  destination: string;
  origin: string;
  starship: string;
  date: string | number;
  isCancelled: boolean;
  _id: string;
}

export interface User {
  id: string;
  displayName: string;
  picture: string;
}
