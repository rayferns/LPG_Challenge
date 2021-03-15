class homePage{
    navigateToHomePage() {
        cy.visit('/en-us');
    }
    homePageTitle(pageTitle){
        cy.get('head > title').should('contain.text', pageTitle) //'Go City '
    }
    searchDestination(city){
        cy.get("div.destination-list--items-wrapper > ul.destination-list--items>li.destination-list--item").within(() => {
            cy.get('div.destination').find('a').get(`img[alt=`+city+`]`)
        })
    }   
}
export default homePage