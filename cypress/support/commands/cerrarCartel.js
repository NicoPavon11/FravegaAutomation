Cypress.Commands.add("cerrarCartel", (postalCode) => {
  cy.get('[data-test-id="geo-sticky"]').should("be.visible").click();
  cy.get('[data-test-id="header-geo-location-form-postal-number"]').type(
    postalCode
  );
  cy.get('[data-test-id="button-save-postal-code"]').click();
  cy.get('.sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh').click();
});
