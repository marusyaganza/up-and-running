/// <reference types="cypress" />
import { FlightInput } from "../../src/generated/graphql";
import { ROUTES } from "../../src/router/routes";
import {
  checkLabels,
  fillFlightForm,
  submitFlight,
} from "../support/helpers/flightForm";

import { checkFlightTableRow } from "../support/helpers/flightsTable";

const requiredFields = ["origin", "destination", "starship", "date"];

const labels = {
  origin: "Origin",
  destination: "Destination",
  starship: "Starship",
  date: "Date",
};

const flightInput: FlightInput = {
  destination: "Kamino",
  origin: "Naboo",
  starship: "Imperial I-class Star Destroyer",
  date: "10/15/2027",
};

describe("Flights page", () => {
  beforeEach(() => {
    cy.task("prepareDB");
    cy.visit(`/${ROUTES.flights}`);
  });

  afterEach(() => {
    cy.task("disconnectFromDb");
  });

  it("displays flight form", () => {
    checkLabels(labels);
    requiredFields.forEach((field) => {
      cy.dataCy(field).find("input").should("be.empty");
    });
    cy.get('button[type="submit"]')
      .contains("Schedule flight")
      .should("be.enabled");
  });

  it("validates flight form", () => {
    cy.dataCy("flight-form").find("button").contains("Schedule flight").click();
    requiredFields.forEach((field) => {
      cy.dataCy(`${field}-error`)
        .should("be.visible")
        .and("contain", "required");
    });
  });

  it("fills the flight form correctly", () => {
    fillFlightForm(flightInput);
    requiredFields.forEach((field) => {
      cy.dataCy(field).find("input").should("have.value", flightInput[field]);
      cy.dataCy(field).find("label").should("contain", labels[field]);
    });
  });

  it.only("shedules a flight correctly", () => {
    submitFlight(flightInput);
    cy.checkPathName(`/${ROUTES.upcoming}`);
    checkFlightTableRow(flightInput);
  });
});
