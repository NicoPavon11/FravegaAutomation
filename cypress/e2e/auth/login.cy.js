import { LoginSelectors } from "../../support/selectors/loginPage";

describe("Login ", () => {
  beforeEach(() => {
    cy.visit("/mi-cuenta/");
    cy.get(".category").first().click();
    cy.url().should(
      "contain",
      "/login?ReturnUrl=%2f_secure%2fmi-cuenta%2fdatos"
    );

  });

  // it("Right Credentials", () => {
  //   cy.fixture("user.json").then((user) => {
  //     cy.loginWithCredentials(user.email, user.password);
  //   });
  //   cy.url().should("contain", "/_secure/mi-cuenta/datos#/profile");
  //   cy.wait(10000);
  //   cy.logout();
  // });

  it("Wrong Credentials", () => {
    cy.get(LoginSelectors.BTNCUENTAS).click();
    cy.get(LoginSelectors.EMAIL).type('wrongmail@wrong.com');
    cy.get(LoginSelectors.PASSWORD).type('WrongPass123');
    cy.get(LoginSelectors.BTNENTER).first().click();
    cy.get('[data-i18n="vtexid.invalidAuth"]').should('contain','De usuario y/o contraseña incorrecta')
  });
});
