import { gql } from "@apollo/client";

export const FLIGHT_SCHEDULED_SUBSCRIPTION = gql`
  subscription AddFlightSubscription {
    flightScheduled {
      starship
      origin
      isCancelled
      id
      destination
      date
    }
  }
`;
