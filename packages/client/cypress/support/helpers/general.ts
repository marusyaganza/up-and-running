export function dataCy(testId: string) {
  return cy.get(`[data-cy="${testId}"]`);
}

export function checkPathName(route: string) {
  cy.location().should("have.a.property", "pathname", route);
}
