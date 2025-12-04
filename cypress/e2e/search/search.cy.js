import { searchSelectors } from "../../support/selectors/search";

beforeEach(() => {
  cy.visit("");
  cy.cerrarCartel();
});

describe("Search Bar Flow", () => {
  it("Search by Product Name", () => {
    cy.searchByProductName("Plancha");
    cy.get(".sc-1fa74e6c-0.kUaLHc")
      .should("be.visible")
      .first()
      .should("contain", "Plancha");
  });

  it("Search by SKU", () => {
    cy.get("[data-suggestion-index=0]").should("be.visible").type("570653"); ///Valija 20 Pulgadas 13602 10kg Negro
    cy.get(".sc-ejfMa-d.iFcilT").click();
    cy.get(".sc-1fa74e6c-0.kUaLHc").click();
    cy.get(".sc-2e32950b-3.cYRTi").should("contain", "570653");
  });

  it("Wrong SKU search", () => {
    cy.searchByProductId("8734211");
    cy.get(searchSelectors.WRONG_SEARCH_RESULTS).should(
      "have.text",
      'No encontramos resultados para "8734211"'
    );
  });

  it("Search with special characters", () => {
    cy.searchByProductName('!"#$%&/())=?/');
    cy.get(searchSelectors.WRONG_SEARCH_RESULTS)
      .should("be.visible")
      .should("have.text", 'No encontramos resultados para "!"#$%&/())=?/"');
  });

  it("Search a long word ", () => {
    cy.searchByProductName(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    cy.get(searchSelectors.WRONG_SEARCH_RESULTS)
      .should("be.visible")
      .should(
        "have.text",
        'No encontramos resultados para "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"'
      );
    ///Rompe la vista de la pagina
  });
});
