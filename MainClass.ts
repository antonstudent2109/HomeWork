class MainClass() {
    cy.visit.mainPage();
    cy.userNameField.type("standard_user");
    cy.passwordField.type("secret_saucetest");
    cy.loginButton.click();
    cy.errorMessage.should('be.true');//negative result

    cy.userNameField.type("standard_user");
    cy.passwordField.type("secret_sauce");//positive result
    cy.loginSuccess.should('be.true') //postitive result


    cy.cartButton.click(); //add to cart button is claickable

}




