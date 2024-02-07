class selectors {
    static get mainPage() {
        return cy.get('https://www.saucedemo.com');
    }

    static get userNameField(){
        return cy.get([id="user-name"]);
    }

    static get passwordField(){
        return cy.get([id="password"]);
    }

    static get loginButton(){
        return cy.get([id="login-button"]);
    }

    static get errorMessage(){
        return cy.get([class="error-button"]);
    }

    static get loginSuccess() {
        return cy.get(id="inventory_container");
    };

    static get cartButton() {
        return cy.get(id="add-to-cart-test.allthethings()-t-shirt-(red)");
    };
