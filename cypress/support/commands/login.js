import { LoginSelectors } from "../../support/selectors/loginPage";

Cypress.Commands.add("loginWithCredentials", (email, password) => {
 
  cy.get(LoginSelectors.BTNCUENTAS).click();
  cy.get(LoginSelectors.EMAIL).type(email);
  cy.get(LoginSelectors.PASSWORD).type(password);
  cy.get(LoginSelectors.BTNENTER).first().click();

});

Cypress.Commands.add('logout',()=>{
    cy.get('.vtex-account_menu-link.f6.no-underline.db.hover-near-black.pv5.mv3.pl5.bl.bw2.nowrap.c-muted-1.b--transparent.pointer').click();
    cy.get('.ph6.ph8-ns.overflow-auto.flex-shrink-1.flex-grow-1.pb8.pt5.pt6-ns.vtex-styleguide-8-x-scrollBar > div > button').click();
  })

