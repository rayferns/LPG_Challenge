class bostonHomePage {
    navigateToBostonPage() {
        cy.visit('/boston/en-us');
    }

    verifyBostonPage(pageTitle) {
        cy.get('head > title').should('contain.text', pageTitle) //"Go Boston Pass | Attraction Pass"
        cy.url().should('include', '/boston/en-us')
    }
    bostonPassAllInclusive(){
        cy.get('div.pass-product-card-dest__content-left')
            .eq(0)
            .get('div.pass-product-card-dest__content-title > span')
            .eq(0)
            .should('contain.text', 'All-Inclusive Pass')
            .get('div.field.field--name-field-card-buy-button-text.field--type-string')
            .eq(0)
            .should('contain.text', 'View attractions')
            .click()
    }

}
export default bostonHomePage