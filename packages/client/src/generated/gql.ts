/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation NewFlight($input: FlightInput!) {\n    addNewFlight(input: $input) {\n      destination\n    }\n  }\n": types.NewFlightDocument,
    "\n  mutation CancelFlight($cancelFlightId: ID!) {\n    cancelFlight(id: $cancelFlightId) {\n      destination\n      origin\n    }\n  }\n": types.CancelFlightDocument,
    "\n  query PlanetsStarships {\n    planets\n    starships\n  }\n": types.PlanetsStarshipsDocument,
    "\n  query Flight($filter: FlightsFilter) {\n    flights(filter: $filter) {\n      starship\n      origin\n      id\n      destination\n      date\n      isCancelled\n    }\n  }\n": types.FlightDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation NewFlight($input: FlightInput!) {\n    addNewFlight(input: $input) {\n      destination\n    }\n  }\n"): (typeof documents)["\n  mutation NewFlight($input: FlightInput!) {\n    addNewFlight(input: $input) {\n      destination\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CancelFlight($cancelFlightId: ID!) {\n    cancelFlight(id: $cancelFlightId) {\n      destination\n      origin\n    }\n  }\n"): (typeof documents)["\n  mutation CancelFlight($cancelFlightId: ID!) {\n    cancelFlight(id: $cancelFlightId) {\n      destination\n      origin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PlanetsStarships {\n    planets\n    starships\n  }\n"): (typeof documents)["\n  query PlanetsStarships {\n    planets\n    starships\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Flight($filter: FlightsFilter) {\n    flights(filter: $filter) {\n      starship\n      origin\n      id\n      destination\n      date\n      isCancelled\n    }\n  }\n"): (typeof documents)["\n  query Flight($filter: FlightsFilter) {\n    flights(filter: $filter) {\n      starship\n      origin\n      id\n      destination\n      date\n      isCancelled\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;