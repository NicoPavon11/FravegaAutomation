beforeEach(() => {

  cy.visit("");
cy.cerrarCartel();});

describe("Location", () => {
  // it("Change location by CP (Tres Arroyos 7500)", () => {
  //   cy.get('[data-test-id="geo-sticky"]').should("be.visible").click();
  //   cy.get('[data-test-id="header-geo-location-form-postal-number"]').type(
  //     "7500"
  //   );
  //   cy.get('[data-test-id="geo-sticky"]').should(
  //     "have.attr",
  //     "title",
  //     "Tres Arroyos"
  //   );
  // });

  it("Pickup in store filter", () => {
    cy.searchByProductId("Aire");
    cy.get('[href="/l/?keyword=Aire&tiempo-de-entrega=entrega-inmediata"]')
      .should("be.visible")
      .click();
    cy.get('[data-test-id="result-item"]').should("be.visible").first().click();
    cy.get('[data-test-id="offices-title"]')
      .should("be.visible")
      .last()
      .should("have.text", "Retiro GRATIS en sucursal ¡Retiralo YA!");
  });

  it("Wrong CP", () => {
    cy.get('[data-test-id="geo-sticky"]').click();
    cy.get('[data-test-id="header-geo-location-form-postal-number"]').should('be.visible').type(
      "8568"
    );
    cy.get('[data-test-id="button-save-postal-code"]').click();
    cy.get(".sc-bOhtcR.sc-fFlnrN.hywpKG.gBGTmB").should(
      "contain",
      "Ingresá un CP válido"
    );
  });
});
