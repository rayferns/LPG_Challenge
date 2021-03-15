/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress"/>

import bostonAllInclusive from '../page-objects/bostonAllInclusivePage'

const bostonAllInclusivePass = new bostonAllInclusive()

describe('Boston All-Inclusive Pass Test', () => {
    before(() => bostonAllInclusivePass.navigateToBostonAllInclusive())

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test            
            return false
        })
        //open eyes session to appear on AppliTools
        cy.eyesOpen
            ({
                appName: 'Go City Boston Website',
                batchName: 'Go City Boston All-Exclusive page!',
                browser: [
                    { name: 'chrome', width: 1024, height: 768 },
                    { name: 'chrome', width: 800, height: 600 },
                    { name: 'firefox', width: 1024, height: 768 },
                    { deviceName: 'iPhone X' },
                ]
            })
    })
    //Close eyes session once above screenshot is recorded into Appltools Test Manager
    afterEach(() => cy.eyesClose())

    it('Test Area - Choose your All-Inclusive pass', () => {
        bostonAllInclusivePass.verifyBostonAllInclusivePage('All-Inclusive Pass')

        //React Component screenshot
        bostonAllInclusivePass.reactComponentCartProductSelector()

        //Select from dropdown list - chosen 3rd item
        bostonAllInclusivePass.dayPass('3 day pass from $118')
        bostonAllInclusivePass.verifyCheckOutButtonDisabled()

        //Increment by one for an Adult and a Child to validate increment
        bostonAllInclusivePass.AdultCartItemIncrease()
        bostonAllInclusivePass.adultAmountValue('1')
        bostonAllInclusivePass.ChildCartItemIncrease()
        bostonAllInclusivePass.childAmountValue('1')

        //Decrement by one for an Adult and a Child to validate decrement
        bostonAllInclusivePass.AdultCartItemDecrease()
        bostonAllInclusivePass.adultAmountValue('0')
        bostonAllInclusivePass.ChildCartItemDecrease()
        bostonAllInclusivePass.childAmountValue('0')

        //Increment by one for an Adult and a Child to validate decrement to continue with the journey
        bostonAllInclusivePass.AdultCartItemIncrease()
        bostonAllInclusivePass.adultAmountValue('1')
        bostonAllInclusivePass.ChildCartItemIncrease()
        bostonAllInclusivePass.childAmountValue('1')

        //Select the Shopping Cart Icon to verify
        bostonAllInclusivePass.OrderTotalValue('199')
        bostonAllInclusivePass.shoppingBasketCounter('2')
        bostonAllInclusivePass.shoppingBasketOpen()
        bostonAllInclusivePass.verifyShoppingCardOrderTotal('199')

        //Click on the Shopping Cart button within
        bostonAllInclusivePass.shoppingCartCheckoutButton()
    })

    it('Test Area - Why choose the All-Inclusing Pass', () => {
        //Screen capture selling points section
        bostonAllInclusivePass.sellingPointSection()
    })

    it('Test Area - Sub Menu navigation checks', () => {
        //Navigate to first link
        bostonAllInclusivePass.subMenuLink1PageLoad("What's included")
        //browser back navigation
        cy.go('back')

        //Navigate to second link
        bostonAllInclusivePass.subMenuLink2PageLoad("How it works")
        //browser back navigation
        cy.go('back')

        //Navigate to third link
        bostonAllInclusivePass.subMenuLink3PageLoad("Attractions")
        //browser back navigation
        cy.go('back')

        //Navigate to fourth link
        bostonAllInclusivePass.subMenuLink4PageLoad("Plan your trip")
        //browser back navigation
        cy.go('back')

        //Navigate to page when Buy button is clicked
        bostonAllInclusivePass.subMenuBuyBtnPageLoad("Buy")
        //browser back navigation
        cy.go('back')
    })

    it('Visual Validation of Boston All-Inclusive Page', () => {       
        
        //Screengrab for all browser types
        cy.eyesCheckWindow('All-Inclusive Boston pass') 
        
    })
})