Cypress.Commands.add("AddItemCart", () => {
  cy.get('[data-test-id="n1-category"]').first().as('masVendidos');
  cy.get('@masVendidos').click();
  cy.get('@masVendidos').should('be.visible');

  cy.get('[data-test-id="product-layout"]').first().as('productCard');
  cy.get('@productCard').click();
  cy.get('@productCard').should('be.visible');
  cy.get(".sc-bc83eae6-5.ebtdJm")
    .first()
    .scrollIntoView()
    .click({ force: true });
  cy.get(".sc-27bf2d19-0.iGnvSC").should("contain", "Agregaste el producto");
});

// Cypress.Commands.add("addVarious", () => {
//   cy.get('[data-test-id="n1-category"]').first().click();
//   cy.get('[data-test-id="product-layout"]').then(($product, index) => {

//     const firsFive = $product.slice(0,5);

//     cy.wrap(firsFive).each(($item,index)=>{
//         cy.wrap($item).scrollIntoView().click();

//         cy.get(".sc-bc83eae6-5.ebtdJm")
//         .first()
//         .click({ force: true });

//         cy.get(".sc-27bf2d19-0.iGnvSC").should(
//         "contain",
//         "Agregaste el producto"
//       );

//       cy.go("back");
//       cy.wait(4000);
//       cy.get('[data-test-id="product-layout"]')
//         .eq(index+1)
//         .should("exist");
//     })

//     });
// });

Cypress.Commands.add("addVarious", (number) => {
  cy.get('[data-test-id="n1-category"]').should('be.visible').first().click();

  for (let i = 0; i < number; i++) {
    cy.get('[data-test-id="product-layout"]')
      .eq(i)
      //   .should('exist')
      //   .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.get('.sc-bc83eae6-5.ebtdJm', { timeout: 10000 })
      .first()
      .click({ force: true });

    // cy.get(".sc-27bf2d19-0.iGnvSC")
    //   .should("contain", "Agregaste el producto");

    cy.go('back');

    cy.get('[data-test-id="product-layout"]', { timeout: 15000 }).should(
      'have.length.greaterThan',
      i
    );
  }
});

Cypress.Commands.add("emptyCart", () => {
  cy.get('[data-test-id="button-cart"]').should('be.visible').click();
  cy.get('[data-test-id="link-go-to-cart"]').click();
  let largo = 0;
  cy.get('.sc-7039ae69-18.JnLdP>span').then(($array) => {
    largo = $array.length;
    for (let i = 0; i < largo; i++) {
    cy.get('.sc-7039ae69-18.JnLdP>span').first().click();
    cy.get('.sc-b292f13a-2.sILgw').click();

    cy.get("[data-in=true]").should(
      'contain',
      'Producto eliminado exitosamente.'
    );
  }
  cy.get('.sc-848bed9b-1.kuNwjw').should('contain','Su carrito está vacio')
  });

  
});
