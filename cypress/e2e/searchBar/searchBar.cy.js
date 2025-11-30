beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Search Bar Flow", () => {
  it("Search by Product Name", () => {
    cy.searchByProductName("Plancha");
    cy.get(".sc-1fa74e6c-0.kUaLHc").first().should("contain", "Plancha");
  });

  it("Filtered Search", () => {
    cy.searchByProductName("cama");
    cy.get('[data-test-id="price-filter-option"]').first().click();
    cy.get(".sc-8f88aecf-2.bJrZPO")
      .first()
      .scrollIntoView()
      .click({ force: true });
    cy.get("#DeliveryTypeFilter-PICKUP").click();
    cy.get('[data-test-id="discount-filter"]>a').last().click();

    cy.url().should("contain", "menos-de");
    cy.url().should("contain", "formas-de-pago=12-cuotas-sin-interes");
    cy.url().should("contain", "tipo-de-entrega=retiro-en-sucursal");
    cy.url().should("contain", "descuento=desde");
  });

  it("Search by SKU", () => {
    cy.get("[data-suggestion-index=0]").type("570653"); ///Valija 20 Pulgadas 13602 10kg Negro
    cy.get(".sc-ejfMa-d.iFcilT").click();
    cy.get(".sc-1fa74e6c-0.kUaLHc").click();
    cy.get(".sc-2e32950b-3.cYRTi").should("contain", "570653");
  });
});
