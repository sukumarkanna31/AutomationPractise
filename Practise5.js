/// <reference types = "cypress /">

describe('Automate the resolve promise', function(){
    it('Verify the resolve promise', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.products').as('eachProduct')
        cy.get('@eachProduct').find('.product').eq(2).contains("ADD TO CART").click()
        .then(function() {

            //its print the text in console logs in browser
            console.log("verify text is present")
        })

        //Print the "GREENKART" logo  text is present in webpage or not

        cy.get('.brand').then(function(logoElement) {

            cy.log(logoElement.text()) //its prints the text
        })

        //checking the greenkart text is displayed or not
        cy.get('.brand').should('have.text','GREENKART')
    })
})