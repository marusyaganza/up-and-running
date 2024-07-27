export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Flight = {
  __typename?: 'Flight';
  date: Scalars['String']['output'];
  destination: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  origin: Scalars['String']['output'];
  starship: Scalars['String']['output'];
};

export type FlightInput = {
  date: Scalars['String']['input'];
  destination: Scalars['String']['input'];
  origin: Scalars['String']['input'];
  starship: Scalars['String']['input'];
};

export type FlightsFilter = {
  past?: InputMaybe<Scalars['Boolean']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewFlight: Flight;
  cancelFlight: Flight;
  updateFlight: Flight;
};


export type MutationAddNewFlightArgs = {
  input: FlightInput;
};


export type MutationCancelFlightArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateFlightArgs = {
  id: Scalars['ID']['input'];
  input: UpdateFlightInput;
};

export type Query = {
  __typename?: 'Query';
  flights: Array<Flight>;
  planets: Array<Scalars['String']['output']>;
  starships: Array<Scalars['String']['output']>;
};


export type QueryFlightsArgs = {
  filter?: InputMaybe<FlightsFilter>;
};

export type UpdateFlightInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  starship?: InputMaybe<Scalars['String']['input']>;
};
