class bostonAllInclusive {
    navigateToBostonAllInclusive() {
        cy.visit('/boston/en-us/products/all-inclusive');
    }

    verifyBostonAllInclusivePage(pageTitle) {
        cy.get('head > title').should('contain.text', pageTitle) //'All-Inclusive Pass'
        cy.url().should('include', '/all-inclusive')
    }

    dayPass(pass) {
        cy.get('div.cart-product-stack--dropdown__select>select.form-control')
            .select(pass)
            .should('contain.text', pass)
    }

    filterProductList() {
        cy.get('section.block.block-go-pass-product.block-react-attraction-product-list.clearfix.block-wrapper').should('exist')

    }
    verifyCheckOutButtonDisabled() {
        cy.get('div.lc-cart__prices.lc-cart__loader > a').should('have.class','lc-cart__purchase--disabled')
    }

    AdultCartItemIncrease() {
        cy.get(':nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid=cartItemIncrease]')
            .trigger('click', { detail: 1 })
            .trigger('click', { detail: 2 })
            .trigger('click', { detail: 3 })
    }

    AdultCartItemDecrease() {
        cy.get(':nth-child(3) > div.lc-cart__item-amount-wrapper div.lc-cart__item-amount-minus').click()
            .trigger('click', { detail: 1 })
            .trigger('click', { detail: 2 })
            .trigger('click', { detail: 3 })
    }

    ChildCartItemIncrease() {
        cy.get('.lc-cart__item:nth-child(4) .lc-cart__item-amount-plus').click()
            .trigger('click', { detail: 1 })
            .trigger('click', { detail: 2 })
            .trigger('click', { detail: 3 })
    }

    ChildCartItemDecrease() {
        cy.get(':nth-child(4) > div.lc-cart__item-amount-wrapper div.lc-cart__item-amount-minus').click()
            .trigger('click', { detail: 1 })
            .trigger('click', { detail: 2 })
            .trigger('click', { detail: 3 })
    }

    adultAmountValue(value){
        cy.get('.lc-cart__item:nth-child(3) .lc-cart__item-amount-value').should('contain.text', value)
    }
    
    childAmountValue(value){
        cy.get('.lc-cart__item:nth-child(4) .lc-cart__item-amount-value').should('contain.text', value)
    }

    OrderTotalValue(total){
        cy.get('.lc-cart__prices-total > .lc-cart__prices-number > .formatted-price').should('contain.text', total)    
    }

    shoppingBasketOpen(){
        cy.get('.react-component:nth-child(3) .cart-icon__icon').click()
    }

    shoppingBasketCounter(value){
        cy.get('div.site-lower-nav div.cart-icon__icon div.cart-icon__icon-counter').should('contain.text', value)
    }
    verifyShoppingCardOrderTotal(value)
    {
        cy.get('.lc-cart__prices-box:nth-child(1) > .lc-cart__prices-total .formatted-price').should('contain.text', value)
    }
    shoppingCartCheckoutButton(){
        cy.get("a[class='lc-cart__purchase lc-font__regular']").click()
    }

    subMenuLink1PageLoad(firstLink)
    {
        cy.get('.secondary-menu--item:nth-child(1) > a').contains(firstLink)
        cy.get('.secondary-menu--item:nth-child(1) > a').click()
        cy.url().should('include', '/all-inclusive/what-you-get')
        cy.get('.content__title').should('have.text','What’s included with the Go Boston All-Inclusive pass')
    }
    subMenuLink2PageLoad(secondLink)
    {
        cy.get('.secondary-menu--item:nth-child(2) > a').contains(secondLink)
        cy.get('.secondary-menu--item:nth-child(2) > a').click()
        cy.url().should('include', '/all-inclusive/how-it-works')
        cy.get('.content__title').should('have.text','How does the Go Boston All–Inclusive pass work?')
    }
    subMenuLink3PageLoad(thirdLink)
    {
        cy.get('.secondary-menu--item:nth-child(3) > a').contains(thirdLink)
        cy.get('.secondary-menu--item:nth-child(3) > a').click()
        cy.url().should('include', '/all-inclusive/attractions')
        cy.get('.content__title').should('have.text','All-in admission to 40+ Boston attractions')
    }
    subMenuLink4PageLoad(fourthLink)
    {
        cy.get('.secondary-menu--item:nth-child(4) > a').contains(fourthLink)
        cy.get('.secondary-menu--item:nth-child(4) > a').click()
        cy.url().should('include', '/all-inclusive-guidebook')
        cy.get('.content__title').should('have.text','Download your free Boston guidebook')
    }
    subMenuBuyBtnPageLoad(buttonName)
    {
        cy.get('.react-component:nth-child(3) .lc-font__regular').contains(buttonName)
        cy.get('.react-component:nth-child(3) .lc-font__regular').click()
        cy.url().should('include', '/products/all-inclusive/pricing')
        cy.get('.products-stack-header--title').should('have.text','Choose your All-Inclusive pass')
    }

    reactComponentCartProductSelector(){
        cy.get('section.block.block-go-commerce.block-react-product-selector.clearfix.block-wrapper > div > div > div > div').screenshot()
    }

    sellingPointSection()
    {
        cy.get('.view-content-wrapper.view-content-wrapper--even').screenshot()
    }
}
export default bostonAllInclusive