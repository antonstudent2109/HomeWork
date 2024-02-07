class selectors {
    static get mainPage() {
        return cy.get('https://www.saucedemo.com');
    }

    static get loginSuccess() {
        return cy.get('id='inventory_container');
    };

    static get cartButton() {
        return cy.get('id='add-to-cart-test.allthethings()-t-shirt-(red)');
