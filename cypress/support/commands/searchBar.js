Cypress.Commands.add('searchByProductName',(name)=>{
        cy.get("[data-suggestion-index=0]").type(name); ///FUNCION BUSQUEDA CON PARAMETRO
    cy.get(".sc-ejfMa-d.iFcilT").click();
  })