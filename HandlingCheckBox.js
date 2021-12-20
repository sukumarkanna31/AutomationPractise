/// <reference types = "cypress /">

describe('handling the CheckBox suite', function(){
    it('select the checkBox', function(){

        
      //  cy.visit('http://demo.guru99.com/test/radio.html')
        // I want to select the checxbox1 and checkbox2, checkbox3
        // checking the value is selected or not
      //  cy.get('input[value="checkbox1"]').check().should('be.checked').and('have.value','checkbox1')
      //  cy.get('input[value="checkbox2"]').check().should('be.checked').and('have.value','checkbox2')
      //  cy.get('input[value="checkbox3"]').check().should('be.checked').and('have.value','checkbox3')
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check()
      
        
        
    })
})