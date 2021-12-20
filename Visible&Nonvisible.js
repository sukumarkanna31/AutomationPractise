/// <reference types="cypress" />

describe('handle visble elements and non visble' , function(){
    it('handle both elements', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(1000)
        //Hide/show text is visible
        cy.get('#displayed-text').should('be.visible') 
        cy.get('#hide-textbox').click() //click on 'Hide' button
        cy.wait(1000)
        cy.get('#displayed-text').should('not.be.visible') //textbox is not visible
        cy.wait(1000)
        cy.get('#show-textbox').click() //click on 'Show' button
        cy.get('#displayed-text').should('be.visible')
        
    })
})