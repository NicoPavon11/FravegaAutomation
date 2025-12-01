import { compareSelectors } from "../../support/selectors/compare";
import { searchSelectors } from "../../support/selectors/search";

beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Compare", () => {
  it("Compare 2 items", () => {
    cy.searchByProductId("570653"); ///Valija Negra
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(searchSelectors.SEARCH_BAR).clear();

    cy.searchByProductId("570654"); ///Valija Rosa
    cy.wait(2000);
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.wait(2000);
    cy.get(compareSelectors.COMPARE_PRODUCTS_BTN).click();
    cy.url().should("contain", "/comparar/?skus=570653%2F570654");
  });

  it("Compare 3 items", () => {
    cy.searchByProductId("570653"); ///Valija Negra
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(searchSelectors.SEARCH_BAR).clear();

    cy.searchByProductId("570654"); ///Valija Rosa
    cy.wait(2000);
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(searchSelectors.SEARCH_BAR).clear();

    cy.searchByProductId("570655"); ///Valija Gris
    cy.wait(2000);
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.wait(2000);
    cy.get(compareSelectors.COMPARE_PRODUCTS_BTN).click();
    cy.url().should("contain", "/comparar/?skus=570653%2F570654%2F570655");
  });

  it("Delete from compare", () => {
    cy.searchByProductId("570653"); ///Valija Negra
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(searchSelectors.SEARCH_BAR).clear();

    cy.searchByProductId("570654"); ///Valija Rosa
    cy.wait(2000);
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(searchSelectors.SEARCH_BAR).clear();

    cy.searchByProductId("570655"); ///Valija Gris
    cy.wait(2000);
    cy.get(compareSelectors.CARD_COMPARE_BTN).click();

    cy.get(compareSelectors.DELETE_FROM_COMPARE_BTN).first().click();

    cy.wait(2000);
    cy.get(compareSelectors.COMPARE_PRODUCTS_BTN).click();
    cy.url().should("contain", "/comparar/?skus=570654%2F570655");
  });
});
