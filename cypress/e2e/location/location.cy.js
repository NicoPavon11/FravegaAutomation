beforeEach(() => {
  cy.visit("");
  cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").click();
});


describe('Location',()=>{
    // it('Change location by CP (Tres Arroyos 7500)',()=>{
    //         cy.get('[data-test-id="geo-sticky"]').click();
    //         cy.get('[data-test-id="header-geo-location-form-postal-number"]').type('7500');
    //         cy.get('[data-test-id="geo-sticky"]').should('have.attr','title','Tres Arroyos');
    // })

    it('Pickup in store filter',()=>{
        cy.searchByProductId('Aire');
        cy.get('[href="/l/?keyword=Aire&tiempo-de-entrega=entrega-inmediata"]').click();
        cy.get('[data-test-id="result-item"]').first().click();
        cy.get('[data-test-id="offices-title"]').last().should('have.text','Retiro GRATIS en sucursal ¡Retiralo YA!');
    })

    // it('Wrong CP',()=>{})
})


