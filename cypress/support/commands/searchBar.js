Cypress.Commands.add("searchByProductName", (name) => {
  cy.get("[data-suggestion-index=0]").type(name);
  cy.get(".sc-ejfMa-d.iFcilT").click();
});

Cypress.Commands.add("searchByProductId", (id) => {
  cy.get("[data-suggestion-index=0]").type(id);
  cy.get(".sc-ejfMa-d.iFcilT").click();
});
