/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { checkPathName, dataCy } from "./helpers/general";

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy: typeof dataCy;
      checkPathName: typeof checkPathName;
    }
  }
}

Cypress.Commands.add("dataCy", dataCy);
Cypress.Commands.add("checkPathName", checkPathName);
