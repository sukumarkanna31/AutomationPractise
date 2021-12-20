
/// <reference types ="cypress /">
describe('Automate the test suite',function(){

    it('Automate the test case',function(){

        //lauch site 
        cy.visit('https://www.tutorialspoint.com/videotutorials/index.php')
        //Enter "java" in the edit box 
        cy.get('#search-strings').type('Java')

        cy.wait(3000); //to load the page
        // using jQuery selector to identify only visible elements
        // assertion to validate the number of search results
        // cssSelectors --
        // id =# ,classname= .

        cy.get('.clsHeadQuestion:visible').should('have.length',6)
    })

})