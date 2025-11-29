Cypress.Commands.add('AddItemCart', ()=>{
        
        cy.get('[data-test-id="n1-category"]').first().click();
        cy.get('[data-test-id="product-layout"]').first().click();
        cy.get('.sc-bc83eae6-5.ebtdJm').first().scrollIntoView().click({force:true});
        cy.get('.sc-27bf2d19-0.iGnvSC').should('contain','Agregaste el producto');
})