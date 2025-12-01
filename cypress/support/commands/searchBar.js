import { searchSelectors } from "../selectors/search";

Cypress.Commands.add("searchByProductName", (name) => {
  cy.get(searchSelectors.SEARCH_BAR).type(name);
  cy.get(searchSelectors.SEARCH_BTN).click();
});

Cypress.Commands.add("searchByProductId", (id) => {
  cy.get(searchSelectors.SEARCH_BAR).type(id);
  cy.get(searchSelectors.SEARCH_BTN).click();
});
