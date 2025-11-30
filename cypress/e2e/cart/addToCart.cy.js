beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Cart flow", () => {
  //   it("Add one item", () => {
  //     cy.AddItemCart();
  //   });

  //   it("Empty cart 1 item", () => {
  //     cy.AddItemCart();
  //     cy.get('[data-test-id="button-cart"]').click();
  //     cy.get('[data-test-id="link-go-to-cart"]').click();
  //     cy.get(".sc-7039ae69-18.JnLdP>span").each(($btn) => {
  //       cy.wrap($btn).click();
  //       cy.get(".sc-b292f13a-2.sILgw").click();
  //       cy.get("[data-in=true]").should(
  //         "contain",
  //         "Producto eliminado exitosamente."
  //       );
  //     });
  //   });

  // it("Add various items", () => {
  //   cy.addVarious();
  // });

  it("Delete various", () => {
    cy.addVarious(5);
    cy.emptyCart();
  });

  it("Go to checkout logged", () => {
    cy.fixture("user.json").then((user) => {

      cy.loginWithCredentials(user.email, user.password);
      cy.visit('');
      cy.AddItemCart();
      cy.get('[data-test-id="button-cart"]').click();
      cy.get('[data-test-id="link-go-to-cart"]').click();
      cy.get("#endPurchaseCart").click();
      cy.url().should("contain", "/chk-ui-headless/profile");
    });
  });

  it("Go to checkout without login", () => {
    cy.AddItemCart();
    cy.get('[data-test-id="button-cart"]').click();
    cy.get('[data-test-id="link-go-to-cart"]').click();
    cy.get("#endPurchaseCart").click();
    cy.url().should("contain", "/chk-ui-headless/email");


    
  });
});
