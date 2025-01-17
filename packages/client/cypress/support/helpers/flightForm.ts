import { FlightInput } from "../../../src/generated/graphql";

export function fillDatePicker(date: string) {
  const vals = date.split("/");
  const month = Number.parseInt(vals[0]) - 1 || 0;
  const day = vals[1];
  const year = vals[2];
  // open date picker
  cy.get('[data-testid="CalendarIcon"]').click();

  // select the year
  cy.get(
    'button[aria-label="calendar view is open, switch to year view"]'
  ).click();
  cy.get("button").contains(year).click();

  // select the month
  Cypress._.times(month, () => {
    cy.get('[data-testid="ArrowRightIcon"]').click();
  });

  // select the day
  cy.get("button").contains(day).click();
}

export function fillFlightForm(data: FlightInput) {
  const { origin, destination, starship, date } = data;
  cy.dataCy("origin").click();
  cy.dataCy(origin).click();

  cy.dataCy("destination").click();
  cy.dataCy(destination).click();

  cy.dataCy("starship").click();
  cy.dataCy(starship).click();

  fillDatePicker(date);
}

export function submitFlight(data: FlightInput) {
  fillFlightForm(data);
  cy.dataCy("flight-form").submit();
}

export function checkLabels(labels: Record<string, string>) {
  const keys = Object.keys(labels);
  keys.forEach((key) => {
    cy.dataCy(key).find("label").contains(labels[key]);
  });
}