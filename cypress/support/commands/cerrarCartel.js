// Cypress.Commands.add('cerrarCartel',()=>{
//     cy.wait(1000)
//     cy.get(".sc-bfhvDw.sc-faUjhM.iYBOSD.jWJPFh").should('be.visible').click({force:true});
// })

Cypress.Commands.add('cerrarCartel', () => {
  cy.get('body').then($body => {
    if ($body.find('button:contains("Cerrar")').length > 0) {
      cy.contains('button', 'Cerrar').click({ force: true });
    }
  });
});

