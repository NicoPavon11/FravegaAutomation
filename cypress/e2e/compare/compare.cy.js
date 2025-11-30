beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});

describe('Compare',()=>{
    it('Compare 2 items',()=>{
        cy.searchByProductId('570653')///Valija Negra
        cy.get('[data-test-id="compare-check"]').click();
        
        cy.get("[data-suggestion-index=0]").clear();

        cy.searchByProductId('570654')///Valija Rosa
        cy.wait(2000)
        cy.get('[data-test-id="compare-check"]').click();

        
        cy.wait(2000)
        cy.get('[data-test-id="compare-button"]').click();
        cy.url().should('contain','/comparar/?skus=')
    })
})