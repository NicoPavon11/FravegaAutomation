beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe("Search Bar Flow", () => {
  // it("Search by Product Name", () => {
  //   cy.searchByProductName("Plancha");
  //   cy.get(".sc-1fa74e6c-0.kUaLHc").first().should("contain", "Plancha");
  // });
  
  // it("Search by SKU", () => {
  //   cy.get("[data-suggestion-index=0]").type("570653"); ///Valija 20 Pulgadas 13602 10kg Negro
  //   cy.get(".sc-ejfMa-d.iFcilT").click();
  //   cy.get(".sc-1fa74e6c-0.kUaLHc").click();
  //   cy.get(".sc-2e32950b-3.cYRTi").should("contain", "570653");
  // });

  // it("order by price high to low", () => {
  //   cy.searchByProductName("plancha");
  //   cy.get('[data-test-id="order-by-select"]').click();
  //   cy.get(".sc-7cadb928-0.jVZMfP").first().click();
  //   cy.wait(1000);
  //   cy.url().should("contain", "/l/?keyword=plancha&sorting=LOWEST_SALE_PRICE");
  //   cy.get(".sc-1d9b1d9e-0.OZgQ").then(($pr) => {
  //     const ordered = [...$pr].map((el) => {
  //       Number(el.innerText.replace(/[^0-9,-]+/g, "").replace(",", "."));
  //     });
  //     const sorted = [...ordered].sort((a, b) => b - a);
  //     console.log("ARR:", ordered);
  //     console.log("SORTED:", sorted);
  //     expect(ordered, "Los precios están ordenados de mayor a menor").to.deep.equal(
  //       sorted
  //     );
  //   });
  // });
  
  // it("Pagination next page button", () => {
  //   cy.searchByProductName("cama");
  //   for (let i = 2; i < 7; i++) {
  //     cy.get('[data-test-id="pagination-next-button"]').click();
  //     cy.url().should("contain", `/l/?keyword=cama&page=${i}`);
  //   }
  // });
  // it("Pagination next page button", () => {
  //   cy.visit("/l/?keyword=plancha&page=3");
  //   cy.get('[data-test-id="pagination-prev-button"]').click();
  //   cy.url().should("contain", '/l/?keyword=plancha&page=2');
  // });
  // it('Wrong SKU search',()=>{
  //   cy.searchByProductId('8734211');
  //   cy.get('[data-test-id="results-not-found"]').should('have.text','No encontramos resultados para "8734211"')
  // })


  // it('Search with special characters',()=>{
  //   cy.searchByProductName('!"#$%&/())=?/');
  //   cy.get('[data-test-id="results-not-found"]').should('have.text','No encontramos resultados para "!"#$%&/())=?/"')
  // })


  //   it('Search a long word ',()=>{
  //   cy.searchByProductName('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  //   cy.get('[data-test-id="results-not-found"]').should('have.text','No encontramos resultados para "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"')
  //     ///Rompe la vista de la pagina
  // })

  
});
