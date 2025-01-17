import { FlightInput } from "../../../src/generated/graphql";

export function checkFlightTableRow(data: FlightInput, index = 0) {
  Object.keys(data).forEach((key) => {
    cy.dataCy(key).eq(index).should("contain", data[key]);
  });
}
