import { gql } from "@apollo/client";

export const NEW_FLIGHT_MUTATION = gql`
  mutation NewFlight($input: FlightInput!) {
    addNewFlight(input: $input) {
      destination
    }
  }
`;

export const CANCEL_FLIGHT_MUTATION = gql`
  mutation CancelFlight($cancelFlightId: ID!) {
    cancelFlight(id: $cancelFlightId) {
      destination
      origin
    }
  }
`;
