import { mapPrices } from "../../support/utils";
import { searchSelectors } from "../../support/selectors/search";

beforeEach(() => {
  cy.visit("");
  cy.cerrarCartel();
});

describe("Search results ordered by price", () => {
  // it("order by price low to high", () => {
  //   cy.searchByProductName("plancha");

  //   cy.get(searchSelectors.ORDER_BY_SELECT).click();
  //   cy.get(searchSelectors.ORDER_SELECT_OPTIONS).eq(0).click();
  //   cy.wait(1000);

  //   cy.url().should("contain", "/l/?keyword=plancha&sorting=LOWEST_SALE_PRICE");

  //   cy.get(searchSelectors.PRODUCT_CARD_PRICE).then(($pr) => {
  //     const ordered = mapPrices($pr);
  //     //   console.log(ordered);
  //     const sorted = [...ordered].sort((a, b) => a - b);
  //     //   console.log(sorted);
  //     expect(
  //       ordered,
  //       "Los precios están ordenados de menor a mayor"
  //     ).to.deep.equal(sorted);
  //   });
  // });

  // it("order by price high to low", () => {
  //   cy.searchByProductName("plancha");

  //   cy.get(searchSelectors.ORDER_BY_SELECT).click();
  //   cy.get(searchSelectors.ORDER_SELECT_OPTIONS).eq(1).click();

  //   cy.wait(1000);

  //   cy.url().should(
  //     "contain",
  //     "/l/?keyword=plancha&sorting=HIGHEST_SALE_PRICE"
  //   );
  //   cy.get(searchSelectors.PRODUCT_CARD_PRICE).then(($pr) => {
  //     const ordered = mapPrices($pr);
  //     console.log(ordered);
  //     const sorted = [...ordered].sort((a, b) => b - a);
  //     console.log(sorted);
  //     expect(
  //       ordered,
  //       "Los precios están ordenados de mayor a menor"
  //     ).to.deep.equal(sorted);
  //   });
  // });

  it("Order by discount", () => {
    cy.searchByProductName("plancha");

    cy.get(searchSelectors.ORDER_BY_SELECT).should('be.visible').click();
    cy.get(searchSelectors.ORDER_SELECT_OPTIONS).eq(2).click();

    cy.wait(1000);

    cy.url().should("contain", "/l/?keyword=plancha&sorting=HIGHEST_DISCOUNT");

    cy.get('[data-test-id="discount-tag"]').should('be.visible').then(($disc) => {
      const ordered = [...$disc].map((el) => Number(el.innerText));
      const sorted = [...ordered].sort((a, b) => b - a);

      expect(
        ordered,
        "Los descuentos están ordenados de mayor a menor"
      ).to.deep.equal(sorted);
    });
  });
});
