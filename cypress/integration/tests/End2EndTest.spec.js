/// <reference types="cypress" />
import homePage from '../page-objects/homePage'
import bostonHomePage from '../page-objects/bostonHomePage'
import bostonAllInclusive from '../page-objects/bostonAllInclusivePage'
import reviewOrder from '../page-objects/reviewOrder'

const homepage = new homePage()
const bostonhomepage = new bostonHomePage()
const bostonAllInclusivePass = new bostonAllInclusive()
const revieworder = new reviewOrder()

describe('End to End Journey of Go Boston Pass', () => {
    before(() => homepage.navigateToHomePage())
   
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test            
            return false            
        })
        //open eyes session to appear on AppliTools
        cy.eyesOpen
            ({
                appName: 'Go City Boston', batchName: 'Go City Boston All Inclusive!',
                browser: [
                    { name: 'chrome', width: 1024, height: 768 },
                    { name: 'chrome', width: 800, height: 600 },
                    { name: 'firefox', width: 1024, height: 768 },
                    { deviceName: 'iPhone X' },
                ]
            })
        cy.injectAxe();
    })
    afterEach(() => cy.eyesClose())
    it('Validate home page', () => {

        homepage.homePageTitle('Go City ')

        cy.eyesCheckWindow('Go City Home page')

        //Capture Accessibility issues earlier on, if any
        //only include rules with serious and critical impacts
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    })
    it.skip('Find city from List of Destination', () => {
        homepage.searchDestination('Boston')
    })
    it('Validate Boston page', () => {
        bostonhomepage.navigateToBostonPage()
        bostonhomepage.verifyBostonPage('Go Boston Pass | Attraction Pass')

        cy.eyesCheckWindow('Boston home page')
        //Validate accessibility on the page
        //only include rules with serious and critical impacts
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });

        //Choose Boston All Inclusive pass
        bostonhomepage.bostonPassAllInclusive()
    })

    it('Validate Accessibility on Boston All-Inclusive Pass page', () => {
        bostonAllInclusivePass.navigateToBostonAllInclusive()
        //only include rules with serious and critical impacts
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    })
    it('Choose your pass - Boston All Inclusive journey', () => {

        bostonAllInclusivePass.navigateToBostonAllInclusive()
        //Select from dropdown list - chosen 3rd item
        bostonAllInclusivePass.dayPass('5 day pass from $147')
        bostonAllInclusivePass.verifyCheckOutButtonDisabled()

        //Increment by one for an Adult and a Child to validate increment
        bostonAllInclusivePass.AdultCartItemIncrease()
        bostonAllInclusivePass.adultAmountValue('1')
        bostonAllInclusivePass.ChildCartItemIncrease()
        bostonAllInclusivePass.childAmountValue('1')

        cy.eyesCheckWindow('Boston All inclusive page')
        //Select the Shopping Cart Icon to verify
        bostonAllInclusivePass.OrderTotalValue('258')
        bostonAllInclusivePass.shoppingBasketCounter('2')
        bostonAllInclusivePass.shoppingBasketOpen()
        bostonAllInclusivePass.verifyShoppingCardOrderTotal('258')


        //Click on the Shopping Cart button within
        bostonAllInclusivePass.shoppingCartCheckoutButton()

        revieworder.adultCartChosen('5 day pass Adult All-Inclusive')
        revieworder.childCartChosen('5 day pass Child (3–12) All-Inclusive')
        revieworder.totalValue('258')
        cy.eyesCheckWindow('Review Order page')
    })

    it('Validate Accessibility on Review Order page', () => {
        revieworder.navigateToReviewOrder()
        //only include rules with serious and critical impacts
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    })

})
