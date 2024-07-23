import { gql } from "@apollo/client";

export const PLATETS_STARSHIPS_QUERY = gql`
  query PlanetsStarships {
    planets
    starships
  }
`;

export const FLIGTHS_QUERY = gql`
  query Flight($filter: FlightsFilter) {
    flights(filter: $filter) {
      starship
      origin
      id
      destination
      date
      isCancelled
    }
  }
`;
