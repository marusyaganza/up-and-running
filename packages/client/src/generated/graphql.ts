/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type NewFlightMutationVariables = Exact<{
  input: FlightInput;
}>;


export type NewFlightMutation = { __typename?: 'Mutation', addNewFlight: { __typename?: 'Flight', destination: string } };

export type CancelFlightMutationVariables = Exact<{
  cancelFlightId: Scalars['ID']['input'];
}>;


export type CancelFlightMutation = { __typename?: 'Mutation', cancelFlight: { __typename?: 'Flight', destination: string, origin: string } };

export type PlanetsStarshipsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlanetsStarshipsQuery = { __typename?: 'Query', planets: Array<string>, starships: Array<string> };

export type FlightQueryVariables = Exact<{
  filter?: InputMaybe<FlightsFilter>;
}>;


export type FlightQuery = { __typename?: 'Query', flights: Array<{ __typename?: 'Flight', starship: string, origin: string, id: string, destination: string, date: string, isCancelled?: boolean | null }> };


export const NewFlightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewFlight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlightInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNewFlight"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination"}}]}}]}}]} as unknown as DocumentNode<NewFlightMutation, NewFlightMutationVariables>;
export const CancelFlightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelFlight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cancelFlightId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelFlight"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cancelFlightId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]}}]} as unknown as DocumentNode<CancelFlightMutation, CancelFlightMutationVariables>;
export const PlanetsStarshipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlanetsStarships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planets"}},{"kind":"Field","name":{"kind":"Name","value":"starships"}}]}}]} as unknown as DocumentNode<PlanetsStarshipsQuery, PlanetsStarshipsQueryVariables>;
export const FlightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Flight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FlightsFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"starship"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"destination"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"isCancelled"}}]}}]}}]} as unknown as DocumentNode<FlightQuery, FlightQueryVariables>;