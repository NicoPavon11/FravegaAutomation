beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Pagination", () => {
  it("Pagination next page button", () => {
    cy.searchByProductName("cama");
    for (let i = 2; i < 5; i++) {
      cy.get('[data-test-id="pagination-next-button"]').click();
      cy.url().should("contain", `/l/?keyword=cama&page=${i}`);
    }
  });
  it("Pagination prev page button", () => {
    cy.visit("/l/?keyword=plancha&page=3");
    cy.get('[data-test-id="pagination-prev-button"]').click();
    cy.url().should("contain", "/l/?keyword=plancha&page=2");
  });
});
