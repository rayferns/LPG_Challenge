class reviewOrder {
    navigateToReviewOrder() {
        cy.visit('/boston/en-us/products/all-inclusive/review-your-order');
    }

    adultCartChosen(text){
        cy.get('.lc-cart__item-wrapper:nth-child(2) .lc-cart__pass-product-name').should('contain.text', text) //'3 day pass Adult All-Inclusive'
    }
    childCartChosen(text){
        cy.get('.lc-cart__item-wrapper:nth-child(3) .lc-cart__pass-product-name').should('contain.text', text) //'3 day pass Child (3–12) All-Inclusive'
    }
    totalValue(amount){
        cy.get(".lc-cart__prices-total .formatted-price").should('contain.text',amount) //199
    }
}
export default reviewOrder