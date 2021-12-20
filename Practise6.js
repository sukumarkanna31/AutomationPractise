/// <reference types = "cypress /"

describe('Automate the Test Suite', function(){
    it('Automate the test case' ,function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get('.search-keyword').type('Be')
        cy.wait(2000)
        cy.get('.products').find('.product').each((search,index,list) =>{

            const vegetables = search.find('h4.product-name').text();
            if(vegetables.includes("Beans")){

                cy.wrap(search).find('button').click()
            }
        })
        // Click on the "Bag" item
        cy.get('.cart-icon > img').click()
        cy.wait(1000)
        // click on "Proceed to checkout button and "Place order"
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
       
        // By using select("text"), select the Angola text
        // here we are checking the value is Angola are not
        cy.get('select').select('Angola').should('have.value','Angola')
       
        //click on "Agree to the Terms & Conditions" checkbox button
        // using check()method, it should be checked or not (checkbox is selected or not its like assertions) 
        cy.get('input[class="chkAgree"]').check().should('be.checked')
        
        //click on "Proceed" button 
      //  cy.get('button').click();

    })


})