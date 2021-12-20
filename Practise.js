/// <reference types="cypress" />

describe('Automate test suite',function(){

    it('Automate launch site', function(){

        //launch website using cy.visit('')
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //get()-it acts as like  findElement in webpage
        // Get one or more DOM elements by selector. The querying behavior of this command matches exactly how $(…) works in jQuery.

        //type('')--is used to enter the text in textBox
        cy.get('.search-keyword').type('cashews')
    })

})