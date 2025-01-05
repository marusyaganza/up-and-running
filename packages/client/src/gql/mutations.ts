import { gql } from "@apollo/client";
import { FLIGTH_FRAGMENT } from "./fragments";

export const NEW_FLIGHT_MUTATION = gql`
  mutation NewFlight($input: FlightInput!) {
    addNewFlight(input: $input) {
      ...FlightFragment
    }
  }
  ${FLIGTH_FRAGMENT}
`;

export const CANCEL_FLIGHT_MUTATION = gql`
  mutation CancelFlight($cancelFlightId: ID!) {
    cancelFlight(id: $cancelFlightId) {
      ...FlightFragment
    }
  }
  ${FLIGTH_FRAGMENT}
`;
