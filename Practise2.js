
/// <reference types ="cypress /">

describe('Automate the test suite',function() {

    it('Automate the test case',function() {

        //lauch site 
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // here .products is parent locator, find()-child locator
        //find()--get the descendant dom elements of a specific locator
       
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent-child log
        cy.get('.products').find('.product').should('have.length',4)

        // eq()--it represents the index in an elements 
        //find('locator')--get the descendant DOM elements of a specific locator
        // (the scope of the page is in that block only)

        //contains('text'): it matches with the text, go and click 

        //go and click the 2nd product add to cart
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    })

})
