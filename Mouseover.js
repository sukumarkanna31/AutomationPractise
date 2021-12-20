/// <reference types="cypress /">

describe('Handle the mouseover test Suite',function(){

    it('Test case started',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.wait(1000)
        cy.get('#mousehover').scrollIntoView()
        cy.get('.mouse-hover-content').invoke('show')
        cy.wait(2000)
        cy.contains('Top').click()
    })
})