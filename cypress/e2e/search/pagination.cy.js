beforeEach(() => {
  cy.visit("");
cy.cerrarCartel(1046);});

describe("Pagination", () => {
  it("Pagination next page button", () => {
    cy.searchByProductName("cama");
    for (let i = 2; i < 5; i++) {
      cy.get('[data-test-id="pagination-next-button"]').should('be.visible').click();
      cy.url().should("contain", `/l/?keyword=cama&page=${i}`);
    }
  });
  it("Pagination prev page button", () => {
    cy.visit("/l/?keyword=plancha&page=3");
    cy.get('[data-test-id="pagination-prev-button"]').should('be.visible').click();
    cy.url().should("contain", "/l/?keyword=plancha&page=2");
  });
});
// beforeEach(() => {
//   cy.visit("");
  
//   // Esperar a que el popup o modal esté visible antes de cerrar
//   // cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh", { timeout: 8000 })
//   //   .should('be.visible')
//   //   .click();

//   // Asegurar que no queden loaders dando vueltas
//   cy.get('[data-test-id="loader"]', { timeout: 10000 }).should('not.exist')
// });

// describe("Pagination", () => {

//   it("Next page button works correctly", () => {
//     cy.searchByProductName("cama");

//     // Aseguramos carga de resultados antes de paginar
//     cy.get('[data-test-id="result-item"]', { timeout: 10000 }).should("exist");

//     for (let i = 2; i < 5; i++) {
//       cy.get('[data-test-id="pagination-next-button"]')
//         .should("be.visible")
//         .and("not.be.disabled")
//         .scrollIntoView()
//         .click();

//       // Esperar carga de página antes de validar URL
//       cy.url({ timeout: 10000 }).should("contain", `/l/?keyword=cama&page=${i}`);

//       // Esperar a que terminen de renderizar los productos
//       cy.get('[data-test-id="result-item"]', { timeout: 10000 }).should("exist");
//     }
//   });

//   it("Prev page button works correctly", () => {
//     cy.visit("/l/?keyword=plancha&page=3");

//     // Asegurar carga de productos antes del click
//     cy.get('[data-test-id="result-item"]', { timeout: 10000 }).should("exist");

//     cy.get('[data-test-id="pagination-prev-button"]')
//       .should("be.visible")
//       .and("not.be.disabled")
//       .scrollIntoView()
//       .click();

//     cy.url({ timeout: 10000 }).should("contain", "/l/?keyword=plancha&page=2");

//     // Asegurar que ya cargó la nueva página
//     cy.get('[data-test-id="result-item"]', { timeout: 10000 }).should("exist");
//   });

// });
