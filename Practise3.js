/// <reference types="cypress" />

describe('Automate the matches with text', function(){

    it('Click on Cashews button', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //iterate all products into store in List,
        cy.get('.products').find('.product').each(($e1,index,list) =>{
            cy.wait(2000)
            // To iterate the elements stored in text
            // iterate the each and every product stored in text()
            const vegText = $e1.find('h4.product-name').text();
            // if it includes() the text, go and Click cashews
            if(vegText.includes("Cashews")){
                cy.wait(1000)
                //click on "Add to cart button"
                cy.wrap($e1).find('button').click();
                
            }

        })

    })
})