beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Cart flow", () => {
  it("Add one item", () => {
    cy.AddItemCart();
  });

  it("Empty cart", () => {
    cy.AddItemCart();
    cy.get('[data-test-id="button-cart"]').click();
    cy.get('[data-test-id="link-go-to-cart"]').click();
    cy.get(".sc-7039ae69-18.JnLdP>span").each(($btn) => {
      cy.wrap($btn).click();
      cy.get(".sc-b292f13a-2.sILgw").click();
      cy.get("[data-in=true]").should(
        "contain",
        "Producto eliminado exitosamente."
      );
    });
  });
});
