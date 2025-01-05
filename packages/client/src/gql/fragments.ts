import { gql } from "@apollo/client";

export const FLIGTH_FRAGMENT = gql`
  fragment FlightFragment on Flight {
    starship
    origin
    id
    destination
    date
    isCancelled
  }
`;
