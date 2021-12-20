/// <reference types ="cypress/">

describe('Handle the mouseover test Suite',function(){

    it('Test case started',function(){

        cy.visit('https://www.amazon.com/')
        // to display hidden element with invoke() with show
        cy.get('#nav-flyout-ya-signin').invoke('show')
         //click on the hidden element
         cy.contains('Sign in').click()
         ////assert to verify the url
         cy.url().should('include','sign')

       

    })
})