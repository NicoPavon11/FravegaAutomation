beforeEach(() => {

  cy.visit("");
cy.cerrarCartel(1046);});

describe('Filtered Search',()=>{
    it("Filtered Search", () => {
    cy.searchByProductName("cama");
    cy.get('[data-test-id="price-filter-option"]').should('be.visible').first().click();
    cy.get(".sc-8f88aecf-2.bJrZPO")
      .first()
      .scrollIntoView()
      .click({ force: true });
    cy.get("#DeliveryTypeFilter-PICKUP").should('be.visible').click();
    cy.get('[data-test-id="discount-filter"]>a').should('be.visible').last().click();
    cy.url().should("contain", "menos-de");
    cy.url().should("contain", "formas-de-pago=12-cuotas-sin-interes");
    cy.url().should("contain", "tipo-de-entrega=retiro-en-sucursal");
    cy.url().should("contain", "descuento=desde");
  });
})