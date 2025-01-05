import { gql } from "@apollo/client";
import { FLIGTH_FRAGMENT } from "./fragments";

export const PLATETS_STARSHIPS_QUERY = gql`
  query PlanetsStarships {
    planets
    starships
  }
`;

export const FLIGTHS_QUERY = gql`
  query Flight($filter: FlightsFilter) {
    flights(filter: $filter) {
      ...FlightFragment
    }
  }
  ${FLIGTH_FRAGMENT}
`;
