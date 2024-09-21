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

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      role
    }
  }
`;

export const SING_UP_MUTATION = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      role
    }
  }
`;
